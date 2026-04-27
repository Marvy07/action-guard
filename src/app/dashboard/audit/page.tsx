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

interface Props {
  searchParams: Promise<{ eventType?: string; actorType?: string; traceId?: string }>
}

export default async function AuditPage({ searchParams }: Props) {
  const filters = await searchParams
  const { eventType, actorType, traceId } = filters

  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })

  const where = {
    ...(org ? { orgId: org.id } : {}),
    ...(eventType ? { eventType } : {}),
    ...(actorType ? { actorType } : {}),
    ...(traceId ? { traceId } : {}),
  }

  const events = org
    ? await prisma.auditEvent.findMany({ where, orderBy: { createdAt: 'desc' }, take: 100 })
    : []

  const eventTypes = ['access_check', 'approval_requested', 'approval_approved', 'approval_rejected', 'refund_executed', 'refund_failed']
  const actorTypes = ['agent', 'user', 'system']

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Audit Log</h1>
          <p className="text-gray-500 text-sm mt-1">Immutable record of every AI action and decision</p>
        </div>
        <div className="text-xs text-gray-600">{events.length} events</div>
      </div>

      {/* Filters */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-end">
        <div>
          <div className="text-xs text-gray-500 mb-1">Event Type</div>
          <div className="flex flex-wrap gap-1">
            <a href="/dashboard/audit" className={`px-2 py-1 rounded text-xs ${!eventType ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>All</a>
            {eventTypes.map(et => (
              <a key={et} href={`/dashboard/audit?eventType=${et}${actorType ? `&actorType=${actorType}` : ''}`}
                className={`px-2 py-1 rounded text-xs ${eventType === et ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
                {et.replace(/_/g, ' ')}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Actor Type</div>
          <div className="flex gap-1">
            <a href={`/dashboard/audit${eventType ? `?eventType=${eventType}` : ''}`}
              className={`px-2 py-1 rounded text-xs ${!actorType ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>All</a>
            {actorTypes.map(at => (
              <a key={at} href={`/dashboard/audit?actorType=${at}${eventType ? `&eventType=${eventType}` : ''}`}
                className={`px-2 py-1 rounded text-xs ${actorType === at ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
                {at}
              </a>
            ))}
          </div>
        </div>
        {traceId && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-400 font-mono">trace: {traceId}</span>
            <a href="/dashboard/audit" className="text-xs text-gray-600 hover:text-gray-400">✕ clear</a>
          </div>
        )}
      </div>

      {events.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-gray-400">No audit events match the current filters.</p>
          <a href="/dashboard/audit" className="text-indigo-400 text-sm mt-2 block">Clear filters</a>
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
                <a href={`/dashboard/audit?traceId=${event.traceId}`}
                  className="text-xs text-gray-600 hover:text-indigo-400 mt-0.5 font-mono block">
                  trace: {event.traceId.slice(0, 24)}…
                </a>
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
