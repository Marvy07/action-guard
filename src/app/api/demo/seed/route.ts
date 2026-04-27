import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const existing = await prisma.organization.findUnique({ where: { slug: 'acme-demo' } })
    if (existing) {
      return NextResponse.json({ message: 'Demo data already seeded', orgId: existing.id, apiKey: existing.apiKey })
    }
    const org = await prisma.organization.create({
      data: { name: 'Acme Corp (Demo)', slug: 'acme-demo', apiKey: 'ag_org_demo_' + randomBytes(16).toString('hex'), plan: 'growth' },
    })
    const agent = await prisma.agent.create({
      data: { orgId: org.id, name: 'refund-bot', description: 'Handles customer refund requests automatically', apiKey: 'ag_agent_demo_' + randomBytes(16).toString('hex'), status: 'active' },
    })
    const policyAllow = await prisma.policy.create({
      data: { orgId: org.id, name: 'Auto-approve small refunds', rules: JSON.parse(JSON.stringify([{ type: 'amount_threshold', field: 'amount', operator: 'lte', value: 100 }, { type: 'decision', decision: 'allow' }])), priority: 10, enabled: true },
    })
    const policyApprove = await prisma.policy.create({
      data: { orgId: org.id, name: 'Review large refunds', rules: JSON.parse(JSON.stringify([{ type: 'amount_threshold', field: 'amount', operator: 'gt', value: 100 }, { type: 'decision', decision: 'require_approval' }])), priority: 5, enabled: true },
    })
    const traceSmall = 'trace_demo_' + randomBytes(8).toString('hex')
    const traceLarge = 'trace_demo_' + randomBytes(8).toString('hex')
    const smallRefund = await prisma.actionRequest.create({
      data: { orgId: org.id, agentId: agent.id, actionType: 'refund', payload: JSON.parse(JSON.stringify({ customerId: 'cust_001', orderId: 'ord_001', amount: 45, currency: 'USD' })), riskScore: 25, decision: 'allow', policyId: policyAllow.id, traceId: traceSmall },
    })
    const largeRefund = await prisma.actionRequest.create({
      data: { orgId: org.id, agentId: agent.id, actionType: 'refund', payload: JSON.parse(JSON.stringify({ customerId: 'cust_002', orderId: 'ord_002', amount: 349, currency: 'USD' })), riskScore: 75, decision: 'require_approval', policyId: policyApprove.id, traceId: traceLarge },
    })
    await prisma.approval.create({
      data: { actionRequestId: largeRefund.id, orgId: org.id, requestedBy: agent.id, status: 'pending', expiresAt: new Date(Date.now() + 86400000) },
    })
    for (const ar of [smallRefund, largeRefund]) {
      await prisma.auditEvent.create({
        data: { orgId: org.id, entityType: 'action_request', entityId: ar.id, eventType: 'access_check', actorId: agent.id, actorType: 'agent', payload: JSON.parse(JSON.stringify({ decision: ar.decision, riskScore: ar.riskScore })), traceId: ar.traceId, actionRequestId: ar.id },
      })
    }
    const period = new Date().toISOString().slice(0, 7)
    await prisma.usageCounter.create({ data: { orgId: org.id, period, actionsChecked: 2, actionsAllowed: 1, actionsApproved: 1, actionsDenied: 0 } })
    return NextResponse.json({ message: 'Demo data seeded', org: { id: org.id, name: org.name, apiKey: org.apiKey }, agent: { id: agent.id, name: agent.name, apiKey: agent.apiKey } }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    const org = await prisma.organization.findUnique({ where: { slug: 'acme-demo' } })
    if (!org) return NextResponse.json({ message: 'No demo data found' })
    await prisma.auditEvent.deleteMany({ where: { orgId: org.id } })
    await prisma.usageCounter.deleteMany({ where: { orgId: org.id } })
    await prisma.approval.deleteMany({ where: { orgId: org.id } })
    await prisma.execution.deleteMany({ where: { orgId: org.id } })
    await prisma.actionRequest.deleteMany({ where: { orgId: org.id } })
    await prisma.policy.deleteMany({ where: { orgId: org.id } })
    await prisma.agent.deleteMany({ where: { orgId: org.id } })
    await prisma.user.deleteMany({ where: { orgId: org.id } })
    await prisma.organization.delete({ where: { id: org.id } })
    return NextResponse.json({ message: 'Demo data reset' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
