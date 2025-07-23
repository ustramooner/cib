'use client'

import { UserGroupIcon, DocumentTextIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total Volunteers',
    value: '1,234',
    change: '+12%',
    changeType: 'positive',
    icon: UserGroupIcon,
  },
  {
    name: 'Active Campaigns',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: DocumentTextIcon,
  },
  {
    name: 'Data Records',
    value: '45,678',
    change: '+5.2%',
    changeType: 'positive',
    icon: ChartBarIcon,
  },
  {
    name: 'System Health',
    value: '99.9%',
    change: '-0.1%',
    changeType: 'negative',
    icon: CogIcon,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'positive'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 