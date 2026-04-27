import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateAgentKey } from '@/lib/auth'
import { evaluatePolicies, computeRiskScore, PolicyConfig } from '@/lib/policy-engine'

// POST /api/v1/access/check
// Core endpoint — AI agent calls this before taking any real-world action.
// Returns: allow | require_approval | deny
export async function POST(req: NextRequest) {
  try {
    const agent = await validateAgentKey(req)
    if (!agent) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { actionType, payload, traceId } = body

    if (!actionType || typeof actionType !== 'string') {
      return NextResponse.json({ error: 'actionType is required' }, { status: 400 })
    }
    if (!payload || typeof payload !== 'object') {
      return NextResponse.json({ error: 'payload is required' }, { status: 400 })
    }

    // Load enabled policies for this org
    const policies = await prisma.policy.findMany({
      where: { orgId: agent.orgId, enabled: true },
      orderBy: { priority: 'desc' },
    })

    // Compute risk score from action type + payload
    const riskScore = computeRiskScore(actionType, payload as Record<string, unknown>)

    // Evaluate each policy
    let decision: 'allow' | 'require_approval' | 'deny' = 'allow'
    let matchedPolicyId: string | null = null

    for (const policy of policies) {
      const rules = policy.rules as Array<Record<string, unknown>>
      if (!rules || rules.length === 0) continue

      // Extract embedded decision from rules (stored as last rule with type:'decision')
      const decisionRule = rules.find(r => r['type'] === 'decision')
      const policyDecision = (decisionRule?.['decision'] as 'allow' | 'require_approval' | 'deny') ?? 'require_approval'
      const conditionRules = rules.filter(r => r['type'] !== 'decision')

      if (conditionRules.length === 0) continue

      const { decision: evalDecision } = evaluatePolicies(
        [{ rules: conditionRules as unknown as PolicyConfig["rules"], decision: policyDecision, priority: policy.priority }],
        actionType,
        payload as Record<string, unknown>,
        riskScore
      )

      if (evalDecision !== 'allow') {
        decision = evalDecision
        matchedPolicyId = policy.id
        break
      }
    }

    // Record the action request
    const actionRequest = await prisma.actionRequest.create({
      data: {
        orgId: agent.orgId,
        agentId: agent.id,
        actionType,
        payload: JSON.parse(JSON.stringify(payload)),
        riskScore,
        decision,
        policyId: matchedPolicyId,
        traceId: traceId ?? undefined,
      },
    })

    // Write audit event
    await prisma.auditEvent.create({
      data: {
        orgId: agent.orgId,
        entityType: 'action_request',
        entityId: actionRequest.id,
        eventType: 'access_check',
        actorId: agent.id,
        actorType: 'agent',
        payload: JSON.parse(JSON.stringify({ actionType, decision, riskScore })),
        traceId: actionRequest.traceId,
        actionRequestId: actionRequest.id,
      },
    })

    // Increment usage counter
    const period = new Date().toISOString().slice(0, 7) // YYYY-MM
    await prisma.usageCounter.upsert({
      where: { orgId_period: { orgId: agent.orgId, period } },
      create: {
        orgId: agent.orgId,
        period,
        actionsChecked: 1,
        actionsAllowed: decision === 'allow' ? 1 : 0,
        actionsApproved: decision === 'require_approval' ? 1 : 0,
        actionsDenied: decision === 'deny' ? 1 : 0,
      },
      update: {
        actionsChecked: { increment: 1 },
        actionsAllowed: { increment: decision === 'allow' ? 1 : 0 },
        actionsApproved: { increment: decision === 'require_approval' ? 1 : 0 },
        actionsDenied: { increment: decision === 'deny' ? 1 : 0 },
      },
    })

    return NextResponse.json({
      decision,
      actionRequestId: actionRequest.id,
      traceId: actionRequest.traceId,
      riskScore,
      policyId: matchedPolicyId,
    })
  } catch (err) {
    console.error('POST /api/v1/access/check error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
