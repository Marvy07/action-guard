import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateApiKey } from '@/lib/auth'

// POST /api/v1/approvals — Create approval request for an action
export async function POST(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { actionRequestId, requestedBy, assignedTo, expiresInMinutes } = body

    if (!actionRequestId || !requestedBy) {
      return NextResponse.json({ error: 'actionRequestId and requestedBy are required' }, { status: 400 })
    }

    // Verify action request belongs to this org
    const actionRequest = await prisma.actionRequest.findFirst({
      where: { id: actionRequestId, orgId: org.id },
    })
    if (!actionRequest) return NextResponse.json({ error: 'Action request not found' }, { status: 404 })

    const expiresAt = expiresInMinutes
      ? new Date(Date.now() + expiresInMinutes * 60 * 1000)
      : new Date(Date.now() + 24 * 60 * 60 * 1000) // default 24h

    const approval = await prisma.approval.create({
      data: {
        actionRequestId,
        orgId: org.id,
        requestedBy,
        assignedTo: assignedTo ?? null,
        status: 'pending',
        expiresAt,
      },
    })

    // Update action request decision to require_approval
    await prisma.actionRequest.update({
      where: { id: actionRequestId },
      data: { decision: 'require_approval' },
    })

    await prisma.auditEvent.create({
      data: {
        orgId: org.id,
        entityType: 'approval',
        entityId: approval.id,
        eventType: 'approval_requested',
        actorId: requestedBy,
        actorType: 'system',
        payload: { actionRequestId, assignedTo },
        traceId: actionRequest.traceId,
        actionRequestId,
      },
    })

    return NextResponse.json({ approval }, { status: 201 })
  } catch (err) {
    console.error('POST /api/v1/approvals error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET /api/v1/approvals — List approvals (filterable by status)
export async function GET(req: NextRequest) {
  try {
    const org = await validateApiKey(req)
    if (!org) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '50'), 200)

    const approvals = await prisma.approval.findMany({
      where: {
        orgId: org.id,
        ...(status && { status }),
      },
      include: {
        actionRequest: {
          select: { actionType: true, payload: true, riskScore: true, agentId: true, traceId: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    return NextResponse.json({ approvals })
  } catch (err) {
    console.error('GET /api/v1/approvals error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
