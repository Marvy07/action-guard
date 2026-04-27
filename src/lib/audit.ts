import { prisma } from './prisma'
import type { Prisma } from '../../prisma/src/generated/prisma'

export interface AuditEventInput {
  orgId: string
  entityType: string
  entityId: string
  eventType: string
  actorId: string
  actorType: 'agent' | 'user' | 'system'
  payload?: Record<string, unknown>
  traceId: string
  actionRequestId?: string
}

export async function writeAuditEvent(input: AuditEventInput) {
  const payload: Prisma.InputJsonValue | undefined = input.payload
    ? (JSON.parse(JSON.stringify(input.payload)) as Prisma.InputJsonValue)
    : undefined

  return prisma.auditEvent.create({
    data: {
      orgId: input.orgId,
      entityType: input.entityType,
      entityId: input.entityId,
      eventType: input.eventType,
      actorId: input.actorId,
      actorType: input.actorType,
      payload,
      traceId: input.traceId,
      actionRequestId: input.actionRequestId ?? null,
    },
  })
}
