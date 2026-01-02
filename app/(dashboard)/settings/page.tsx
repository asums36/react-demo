export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Configure your account and application settings
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-card shadow-sm border">
            <nav className="p-4 space-y-1">
              {[
                { name: 'General', href: '#general', active: true },
                { name: 'Security', href: '#security', active: false },
                { name: 'Notifications', href: '#notifications', active: false },
                { name: 'Appearance', href: '#appearance', active: false },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${item.active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-primary/10'}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <div id="general" className="rounded-lg bg-card p-6 shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Application Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin Dashboard"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Tech Corp"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Description
                </label>
                <textarea
                  defaultValue="A modern admin dashboard built with Next.js and shadcn/ui"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div id="security" className="rounded-lg bg-card p-6 shadow-sm border">
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <button className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Password Policy</h3>
                  <p className="text-xs text-muted-foreground">Set requirements for user passwords</p>
                </div>
                <button className="rounded-md border px-3 py-1 text-sm font-medium hover:bg-primary/10">
                  Configure
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Session Timeout</h3>
                  <p className="text-xs text-muted-foreground">Automatically log out inactive users</p>
                </div>
                <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>4 hours</option>
                  <option>8 hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}