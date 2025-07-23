'use client'

import { UserIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline'

const activities = [
  {
    id: 1,
    type: 'volunteer',
    person: { name: 'John Doe' },
    action: 'registered as a volunteer',
    time: '2 hours ago',
    icon: UserIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 2,
    type: 'campaign',
    person: { name: 'Jane Smith' },
    action: 'created new campaign "Get Out The Vote"',
    time: '4 hours ago',
    icon: DocumentTextIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 3,
    type: 'system',
    person: { name: 'System' },
    action: 'completed data sync with NationBuilder',
    time: '6 hours ago',
    icon: CogIcon,
    iconBackground: 'bg-yellow-500',
  },
  {
    id: 4,
    type: 'volunteer',
    person: { name: 'Mike Johnson' },
    action: 'updated volunteer profile',
    time: '8 hours ago',
    icon: UserIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    type: 'data',
    person: { name: 'Sarah Wilson' },
    action: 'exported voter data report',
    time: '1 day ago',
    icon: DocumentTextIcon,
    iconBackground: 'bg-purple-500',
  },
]

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activities.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={`${activityItem.iconBackground} h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
                    >
                      <activityItem.icon className="h-4 w-4 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">{activityItem.person.name}</span>{' '}
                        {activityItem.action}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time>{activityItem.time}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-500">
          View all activity
        </button>
      </div>
    </div>
  )
} 