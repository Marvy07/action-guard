export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

export default async function PoliciesPage() {
  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })
  const policies = org ? await prisma.policy.findMany({
    where: { orgId: org.id },
    orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
  }) : []

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Policies</h1>
          <p className="text-gray-500 text-sm mt-1">Governance rules applied to every AI action</p>
        </div>
        <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-lg">POST /api/v1/policies to create</div>
      </div>
      {policies.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-gray-400">No policies yet. All actions default to allow.</p>
          <code className="text-xs text-indigo-400 mt-2 block">POST /api/v1/policies</code>
        </div>
      ) : (
        <div className="grid gap-4">
          {policies.map(p => (
            <div key={p.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-semibold">{p.name}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Priority: {p.priority}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.enabled ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-500'}`}>
                    {p.enabled ? 'Active' : 'Disabled'}
                  </span>
                </div>
              </div>
              <pre className="bg-gray-800 rounded-lg p-3 text-xs text-gray-400 overflow-auto max-h-32">
                {JSON.stringify(p.rules, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
