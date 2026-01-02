export default function UsersPage() {
  // Sample user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Active' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your users, roles, and permissions
          </p>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90">
          Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="rounded-lg bg-card shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Email</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Role</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-muted/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded-md p-1 text-sm text-muted-foreground hover:bg-primary/10">
                      Edit
                    </button>
                    <button className="rounded-md p-1 text-sm text-red-600 hover:bg-red-100">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">124</span> users
        </p>
        <div className="flex items-center gap-2">
          <button disabled className="rounded-md border px-3 py-1 text-sm font-medium text-muted-foreground cursor-not-allowed">
            Previous
          </button>
          <button className="rounded-md border px-3 py-1 text-sm font-medium bg-primary text-primary-foreground">
            1
          </button>
          <button className="rounded-md border px-3 py-1 text-sm font-medium hover:bg-primary/10">
            2
          </button>
          <button className="rounded-md border px-3 py-1 text-sm font-medium hover:bg-primary/10">
            3
          </button>
          <button className="rounded-md border px-3 py-1 text-sm font-medium hover:bg-primary/10">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}