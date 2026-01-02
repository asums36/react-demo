import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-card p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="mt-2 text-muted-foreground">A modern admin dashboard built with Next.js and shadcn/ui</p>
        </div>
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}