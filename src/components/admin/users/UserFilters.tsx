interface UserFiltersProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function UserFilters({
  selectedRole,
  onRoleChange,
  searchQuery,
  onSearchChange,
}: UserFiltersProps) {
  const roles = [
    { value: 'all', label: 'All Users' },
    { value: 'player', label: 'Players' },
    { value: 'scout', label: 'Scouts' },
    { value: 'club', label: 'Clubs' },
    { value: 'assessor', label: 'Assessors' },
    { value: 'admin', label: 'Admins' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Search users</label>
          <input
            type="search"
            id="search"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="flex-1 sm:max-w-xs">
          <label htmlFor="role" className="sr-only">Filter by role</label>
          <select
            id="role"
            value={selectedRole}
            onChange={(e) => onRoleChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}