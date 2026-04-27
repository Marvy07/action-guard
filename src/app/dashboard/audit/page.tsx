export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

const eventColor: Record<string, string> = {
  access_check: 'bg-indigo-900 text-indigo-400',
  approval_requested: 'bg-yellow-900 text-yellow-400',
  approval_approved: 'bg-green-900 text-green-400',
  approval_rejected: 'bg-red-900 text-red-400',
  refund_executed: 'bg-blue-900 text-blue-400',
  refund_failed: 'bg-red-900 text-red-400',
}

export default async function AuditPage() {
  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })
  const events = org ? await prisma.auditEvent.findMany({
    where: { orgId: org.id },
    orderBy: { createdAt: 'desc' },
    take: 100,
  }) : []

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Audit Log</h1>
          <p className="text-gray-500 text-sm mt-1">Immutable record of every AI action and decision</p>
        </div>
        <div className="text-xs text-gray-600">{events.length} events</div>
      </div>

      {events.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-gray-400">No audit events yet.</p>
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
          {events.map(event => (
            <div key={event.id} className="p-4 flex items-start gap-4">
              <span className={`px-2 py-0.5 rounded text-xs font-bold flex-shrink-0 mt-0.5 ${eventColor[event.eventType] ?? 'bg-gray-800 text-gray-400'}`}>
                {event.eventType}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-300">
                  <span className="text-white">{event.actorType}</span>
                  {' · '}
                  <span className="font-mono text-xs">{event.actorId.slice(0, 12)}…</span>
                  {' → '}
                  <span>{event.entityType}</span>
                </div>
                <div className="text-xs text-gray-600 mt-0.5 font-mono">trace: {event.traceId.slice(0, 20)}…</div>
              </div>
              <div className="text-xs text-gray-600 flex-shrink-0">
                {new Date(event.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
