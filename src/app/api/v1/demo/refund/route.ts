import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateAgentKey } from '@/lib/auth'
import { executeMockRefund } from '@/lib/adapters/mock-refund'

export async function POST(req: NextRequest) {
  try {
    const agent = await validateAgentKey(req)
    if (!agent) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { customerId, orderId, amount, currency, reason, actionRequestId } = body

    if (!customerId || !orderId || !amount) {
      return NextResponse.json({ error: 'customerId, orderId, and amount are required' }, { status: 400 })
    }
    if (!actionRequestId) {
      return NextResponse.json({ error: 'actionRequestId required. Call POST /api/v1/access/check first.' }, { status: 400 })
    }

    const actionRequest = await prisma.actionRequest.findFirst({ where: { id: actionRequestId, orgId: agent.orgId } })
    if (!actionRequest) return NextResponse.json({ error: 'Action request not found' }, { status: 404 })
    if (actionRequest.decision === 'deny') return NextResponse.json({ error: 'Action was denied by policy' }, { status: 403 })

    if (actionRequest.decision === 'require_approval') {
      const approval = await prisma.approval.findFirst({ where: { actionRequestId, status: 'approved' } })
      if (!approval) return NextResponse.json({ error: 'Action requires approval. Pending approval.' }, { status: 403 })
    }

    const execution = await prisma.execution.create({ data: { actionRequestId, orgId: agent.orgId, status: 'running' } })
    const result = await executeMockRefund({ customerId, orderId, amount, currency, reason })

    const updatedExecution = await prisma.execution.update({
      where: { id: execution.id },
      data: {
        status: result.success ? 'completed' : 'failed',
        result: JSON.parse(JSON.stringify(result)),
        completedAt: new Date(),
        error: result.error ?? null,
      },
    })

    await prisma.auditEvent.create({
      data: {
        orgId: agent.orgId,
        entityType: 'execution',
        entityId: execution.id,
        eventType: result.success ? 'refund_executed' : 'refund_failed',
        actorId: agent.id,
        actorType: 'agent',
        payload: JSON.parse(JSON.stringify({ refundId: result.refundId, amount, currency: currency ?? "USD" })),
        traceId: actionRequest.traceId,
        actionRequestId,
      },
    })

    return NextResponse.json({ execution: updatedExecution, refund: result, traceId: actionRequest.traceId })
  } catch (err) {
    console.error('POST /api/v1/demo/refund error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
