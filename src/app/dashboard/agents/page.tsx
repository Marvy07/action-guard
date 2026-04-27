export const dynamic = 'force-dynamic'
import { prisma } from '@/lib/prisma'

export default async function AgentsPage() {
  const org = await prisma.organization.findFirst({ orderBy: { createdAt: 'asc' } })
  const agents = org ? await prisma.agent.findMany({
    where: { orgId: org.id },
    include: { _count: { select: { actionRequests: true } } },
    orderBy: { createdAt: 'desc' },
  }) : []

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Agents</h1>
          <p className="text-gray-500 text-sm mt-1">Registered AI agents for this organization</p>
        </div>
        <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-lg">
          POST /api/v1/agents to register
        </div>
      </div>
      {agents.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3">🤖</div>
          <p className="text-gray-400">No agents registered yet.</p>
          <code className="text-xs text-indigo-400 mt-2 block">POST /api/v1/agents</code>
        </div>
      ) : (
        <div className="grid gap-4">
          {agents.map(agent => (
            <div key={agent.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-900 flex items-center justify-center text-lg">🤖</div>
                <div>
                  <div className="text-white font-semibold">{agent.name}</div>
                  <div className="text-gray-500 text-xs">{agent.description ?? 'No description'}</div>
                  <div className="text-gray-600 text-xs mt-1 font-mono">{agent.id}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-right">
                <div>
                  <div className="text-white font-bold">{agent._count.actionRequests}</div>
                  <div className="text-gray-600 text-xs">Actions</div>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${agent.status === 'active' ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-500'}`}>
                    {agent.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
