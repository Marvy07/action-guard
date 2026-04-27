/**
 * Action Guard — Policy Engine
 * Evaluates action requests against org policies and returns a decision.
 *
 * Decision types:
 *   allow            — action proceeds automatically
 *   require_approval — action is queued for human review
 *   deny             — action is blocked outright
 */

export type PolicyDecision = 'allow' | 'require_approval' | 'deny'

export interface PolicyRule {
  type: 'amount_threshold' | 'action_type' | 'risk_score' | 'time_window' | 'always'
  // amount_threshold
  field?: string
  operator?: 'gt' | 'gte' | 'lt' | 'lte' | 'eq'
  value?: number
  // action_type
  actionTypes?: string[]
  // risk_score
  minScore?: number
  maxScore?: number
  // time_window (UTC hours)
  startHour?: number
  endHour?: number
}

export interface PolicyConfig {
  rules: PolicyRule[]
  decision: PolicyDecision
  priority: number
}

export interface ActionPayload {
  [key: string]: unknown
}

function evaluateRule(rule: PolicyRule, actionType: string, payload: ActionPayload, riskScore: number): boolean {
  switch (rule.type) {
    case 'always':
      return true

    case 'action_type':
      return (rule.actionTypes ?? []).includes(actionType)

    case 'amount_threshold': {
      if (!rule.field || !rule.operator || rule.value === undefined) return false
      const fieldValue = payload[rule.field]
      if (typeof fieldValue !== 'number') return false
      switch (rule.operator) {
        case 'gt':  return fieldValue > rule.value
        case 'gte': return fieldValue >= rule.value
        case 'lt':  return fieldValue < rule.value
        case 'lte': return fieldValue <= rule.value
        case 'eq':  return fieldValue === rule.value
        default:    return false
      }
    }

    case 'risk_score': {
      const min = rule.minScore ?? 0
      const max = rule.maxScore ?? 100
      return riskScore >= min && riskScore <= max
    }

    case 'time_window': {
      const hour = new Date().getUTCHours()
      const start = rule.startHour ?? 0
      const end = rule.endHour ?? 23
      return hour >= start && hour <= end
    }

    default:
      return false
  }
}

export function evaluatePolicies(
  policies: PolicyConfig[],
  actionType: string,
  payload: ActionPayload,
  riskScore: number
): { decision: PolicyDecision; policyIndex: number | null } {
  // Sort by priority descending (higher priority wins)
  const sorted = [...policies].sort((a, b) => b.priority - a.priority)

  for (let i = 0; i < sorted.length; i++) {
    const policy = sorted[i]
    if (!policy.rules || policy.rules.length === 0) continue

    // All rules in a policy must match (AND logic)
    const allMatch = policy.rules.every(rule =>
      evaluateRule(rule, actionType, payload, riskScore)
    )

    if (allMatch) {
      return { decision: policy.decision, policyIndex: i }
    }
  }

  // Default: allow if no policy matched
  return { decision: 'allow', policyIndex: null }
}

export function computeRiskScore(actionType: string, payload: ActionPayload): number {
  let score = 0

  // Base score by action type
  const highRiskActions = ['refund', 'delete', 'charge', 'cancel', 'transfer', 'withdraw']
  const mediumRiskActions = ['update', 'modify', 'reassign', 'disable']
  if (highRiskActions.some(a => actionType.toLowerCase().includes(a))) score += 50
  else if (mediumRiskActions.some(a => actionType.toLowerCase().includes(a))) score += 25

  // Amount-based score
  const amount = payload.amount ?? payload.value ?? payload.price
  if (typeof amount === 'number') {
    if (amount > 1000) score += 40
    else if (amount > 500) score += 25
    else if (amount > 100) score += 10
  }

  return Math.min(score, 100)
}
