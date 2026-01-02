export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back! Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Users', value: '12,456', change: '+2.5%', icon: '👥' },
          { title: 'Revenue', value: '$45,231', change: '+8.2%', icon: '💰' },
          { title: 'Active Sessions', value: '892', change: '-3.1%', icon: '🖥️' },
          { title: 'Conversion Rate', value: '4.8%', change: '+1.2%', icon: '📈' },
        ].map((stat, index) => (
          <div key={index} className="rounded-lg bg-card p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="mt-1 text-2xl font-bold">{stat.value}</h3>
                <p className={`mt-1 text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-card p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Revenue Trends</h3>
            <button className="text-sm text-primary hover:underline">View Details</button>
          </div>
          <div className="h-64 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">📊 Chart Placeholder</span>
          </div>
        </div>

        <div className="rounded-lg bg-card p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">User Activity</h3>
            <button className="text-sm text-primary hover:underline">View Details</button>
          </div>
          <div className="h-64 bg-muted rounded flex items-center justify-center">
            <span className="text-muted-foreground">📈 Chart Placeholder</span>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="rounded-lg bg-card p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent Activities</h3>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { user: 'John Doe', action: 'logged in', time: '2 minutes ago' },
            { user: 'Jane Smith', action: 'created a new project', time: '15 minutes ago' },
            { user: 'Mike Johnson', action: 'updated profile', time: '1 hour ago' },
            { user: 'Sarah Williams', action: 'reset password', time: '3 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium">{activity.user.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}