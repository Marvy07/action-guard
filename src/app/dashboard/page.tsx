export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'

async function getStats(orgId: string) {
  const period = new Date().toISOString().slice(0, 7)
  const [usage, pendingApprovals, agents, recentEvents] = await Promise.all([
    prisma.usageCounter.findFirst({ where: { orgId, period } }),
    prisma.approval.count({ where: { orgId, status: 'pending' } }),
    prisma.agent.count({ where: { orgId, status: 'active' } }),
    prisma.auditEvent.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ])
  return { usage, pendingApprovals, agents, recentEvents }
}

export default async function DashboardPage() {
  // Demo org — first org in DB
  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })

  if (!org) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-4">🛡️</div>
        <h1 className="text-2xl font-bold text-white mb-2">No organization yet</h1>
        <p className="text-gray-500 text-sm">Create an org via POST /api/v1/orgs to get started.</p>
      </div>
    )
  }

  const { usage, pendingApprovals, agents, recentEvents } = await getStats(org.id)

  const stats = [
    { label: 'Actions Checked', value: usage?.actionsChecked ?? 0, color: 'text-indigo-400' },
    { label: 'Allowed', value: usage?.actionsAllowed ?? 0, color: 'text-green-400' },
    { label: 'Pending Approval', value: pendingApprovals, color: 'text-yellow-400' },
    { label: 'Denied', value: usage?.actionsDenied ?? 0, color: 'text-red-400' },
    { label: 'Active Agents', value: agents, color: 'text-blue-400' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Org: <span className="text-indigo-400">{org.name}</span> · Plan: {org.plan} · Period: {new Date().toISOString().slice(0, 7)}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-4">Recent Audit Events</h2>
        {recentEvents.length === 0 ? (
          <p className="text-gray-600 text-sm">No events yet. Run your first access check to see activity.</p>
        ) : (
          <div className="space-y-3">
            {recentEvents.map(event => (
              <div key={event.id} className="flex items-start gap-3 py-2 border-b border-gray-800 last:border-0">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium">{event.eventType}</div>
                  <div className="text-xs text-gray-500">{event.entityType} · {event.actorType} · trace: {event.traceId.slice(0, 12)}…</div>
                </div>
                <div className="text-xs text-gray-600 flex-shrink-0">
                  {new Date(event.createdAt).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
