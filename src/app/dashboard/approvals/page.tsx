export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

const statusColor: Record<string, string> = {
  pending: 'bg-yellow-900 text-yellow-400',
  approved: 'bg-green-900 text-green-400',
  rejected: 'bg-red-900 text-red-400',
  expired: 'bg-gray-800 text-gray-500',
}

export default async function ApprovalsPage() {
  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })
  const approvals = org ? await prisma.approval.findMany({
    where: { orgId: org.id },
    include: {
      actionRequest: { select: { actionType: true, payload: true, riskScore: true, traceId: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
  }) : []

  const pending = approvals.filter(a => a.status === 'pending')
  const decided = approvals.filter(a => a.status !== 'pending')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Approvals</h1>
        <p className="text-gray-500 text-sm mt-1">AI actions pending human review</p>
      </div>

      {pending.length > 0 && (
        <div className="mb-8">
          <h2 className="text-yellow-400 font-semibold text-sm mb-3">⏳ Pending ({pending.length})</h2>
          <div className="grid gap-4">
            {pending.map(a => (
              <div key={a.id} className="bg-gray-900 border border-yellow-800 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-white font-semibold">{a.actionRequest.actionType}</div>
                    <div className="text-gray-500 text-xs mt-1">Trace: {a.actionRequest.traceId.slice(0, 16)}… · Risk: {Math.round(a.actionRequest.riskScore)}/100</div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColor[a.status]}`}>{a.status}</span>
                </div>
                <pre className="bg-gray-800 rounded-lg p-3 text-xs text-gray-400 overflow-auto max-h-24">
                  {JSON.stringify(a.actionRequest.payload, null, 2)}
                </pre>
                <div className="mt-3 flex gap-2">
                  <div className="text-xs text-gray-600">
                    POST /api/v1/approvals/{a.id}/decision with {`{ decision: "approved", decidedBy: "user@org.com" }`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {decided.length > 0 && (
        <div>
          <h2 className="text-gray-400 font-semibold text-sm mb-3">History ({decided.length})</h2>
          <div className="grid gap-3">
            {decided.map(a => (
              <div key={a.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-medium">{a.actionRequest.actionType}</div>
                  <div className="text-gray-600 text-xs mt-0.5">
                    {a.decidedAt ? new Date(a.decidedAt).toLocaleString() : '—'} · {a.assignedTo ?? 'unknown'}
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColor[a.status] ?? 'bg-gray-800 text-gray-500'}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {approvals.length === 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="text-gray-400">No approvals yet. Actions requiring review will appear here.</p>
        </div>
      )}
    </div>
  )
}
