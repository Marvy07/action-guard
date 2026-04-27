import type { ReactNode } from 'react'
import Link from 'next/link'

const nav = [
  { href: '/dashboard', label: '🏠 Overview' },
  { href: '/dashboard/agents', label: '🤖 Agents' },
  { href: '/dashboard/policies', label: '📋 Policies' },
  { href: '/dashboard/approvals', label: '✅ Approvals' },
  { href: '/dashboard/audit', label: '🔍 Audit Log' },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="text-white font-bold text-sm">Action Guard</div>
              <div className="text-indigo-400 text-xs">by Zenphry</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="text-xs text-gray-600">Zenphry IT Services LLC</div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
