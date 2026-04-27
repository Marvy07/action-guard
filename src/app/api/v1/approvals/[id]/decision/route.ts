import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// POST /api/v1/approvals/[id]/decision — Approve or reject
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const body = await req.json()
    const { decision, decidedBy, reason } = body

    if (!decision || !['approved', 'rejected'].includes(decision)) {
      return NextResponse.json({ error: 'decision must be approved or rejected' }, { status: 400 })
    }
    if (!decidedBy) {
      return NextResponse.json({ error: 'decidedBy is required' }, { status: 400 })
    }

    const approval = await prisma.approval.findFirst({
      where: { id, orgId: org.id },
      include: { actionRequest: true },
    })

    if (!approval) return NextResponse.json({ error: 'Approval not found' }, { status: 404 })
    if (approval.status !== 'pending') {
      return NextResponse.json({ error: `Approval is already ${approval.status}` }, { status: 409 })
    }

    // Check expiry
    if (approval.expiresAt && new Date() > approval.expiresAt) {
      await prisma.approval.update({ where: { id }, data: { status: 'expired' } })
      return NextResponse.json({ error: 'Approval has expired' }, { status: 410 })
    }

    const updated = await prisma.approval.update({
      where: { id },
      data: {
        status: decision,
        decidedAt: new Date(),
        assignedTo: decidedBy,
        reason: reason ?? null,
      },
    })

    // Update the action request decision
    await prisma.actionRequest.update({
      where: { id: approval.actionRequestId },
      data: { decision: decision === 'approved' ? 'allow' : 'deny' },
    })

    await prisma.auditEvent.create({
      data: {
        orgId: org.id,
        entityType: 'approval',
        entityId: id,
        eventType: `approval_${decision}`,
        actorId: decidedBy,
        actorType: 'user',
        payload: { decision, reason },
        traceId: approval.actionRequest.traceId,
        actionRequestId: approval.actionRequestId,
      },
    })

    return NextResponse.json({ approval: updated, decision })
  } catch (err) {
    console.error('POST /api/v1/approvals/[id]/decision error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
