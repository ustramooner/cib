'use client'

import Link from 'next/link'
import { 
  PlusIcon, 
  UsersIcon, 
  DocumentPlusIcon, 
  ArrowUpTrayIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const actions = [
  {
    name: 'Add Volunteer',
    description: 'Register a new volunteer',
    href: '/volunteers/new',
    icon: PlusIcon,
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Manage Users',
    description: 'View and manage system users',
    href: '/admin/users',
    icon: UsersIcon,
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    name: 'Create Campaign',
    description: 'Start a new campaign',
    href: '/campaigns/new',
    icon: DocumentPlusIcon,
    color: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    name: 'Import Data',
    description: 'Import data from external sources',
    href: '/data/import',
    icon: ArrowUpTrayIcon,
    color: 'bg-yellow-600 hover:bg-yellow-700',
  },
  {
    name: 'System Tools',
    description: 'Access system administration tools',
    href: '/tools',
    icon: WrenchScrewdriverIcon,
    color: 'bg-red-600 hover:bg-red-700',
  },
  {
    name: 'View Reports',
    description: 'Generate and view reports',
    href: '/data/reports',
    icon: ChartBarIcon,
    color: 'bg-indigo-600 hover:bg-indigo-700',
  },
]

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="relative rounded-lg p-4 hover:bg-gray-50 flex items-start space-x-4 group"
          >
            <div className={`rounded-lg p-2 ${action.color} text-white group-hover:scale-110 transition-transform`}>
              <action.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {action.name}
              </p>
              <p className="text-sm text-gray-500">
                {action.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 