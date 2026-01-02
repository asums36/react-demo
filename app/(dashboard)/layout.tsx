import React from 'react'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold">Admin</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
              >
                <span className="mr-3">📊</span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/users"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
              >
                <span className="mr-3">👥</span>
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
              >
                <span className="mr-3">⚙️</span>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <span>☰</span>
            </button>
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-primary/10">
              <span>🔍</span>
            </button>
            <button className="rounded-full p-2 hover:bg-primary/10">
              <span>🔔</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-medium">AD</span>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  )
}