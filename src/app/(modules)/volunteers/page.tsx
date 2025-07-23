import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'
import { Sidebar } from '@/components/layout/Sidebar'
import { PlusIcon, UserGroupIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Volunteers - CIB',
  description: 'Volunteer management and coordination',
}

const sidebarItems = [
  { name: 'All Volunteers', href: '/volunteers', current: true },
  { name: 'Active', href: '/volunteers?status=active', badge: '234' },
  { name: 'Pending', href: '/volunteers?status=pending', badge: '12' },
  { name: 'Inactive', href: '/volunteers?status=inactive', badge: '56' },
  { name: 'Skills', href: '/volunteers/skills' },
  { name: 'Schedules', href: '/volunteers/schedules' },
  { name: 'Reports', href: '/volunteers/reports' },
]

const volunteers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    skills: ['Phone Banking', 'Data Entry'],
    status: 'active',
    joinDate: '2024-01-15',
    lastActivity: '2024-01-20',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    skills: ['Canvassing', 'Event Planning'],
    status: 'active',
    joinDate: '2024-01-10',
    lastActivity: '2024-01-22',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '(555) 456-7890',
    skills: ['Social Media', 'Design'],
    status: 'pending',
    joinDate: '2024-01-22',
    lastActivity: '2024-01-22',
  },
]

export default function VolunteersPage() {
  const breadcrumbs = [
    { name: 'Volunteers', current: true }
  ]

  const actions = (
    <div className="flex space-x-3">
      <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
        Export
      </button>
      <button className="bg-blue-600 border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 inline-flex items-center">
        <PlusIcon className="h-4 w-4 mr-2" />
        Add Volunteer
      </button>
    </div>
  )

  const sidebar = (
    <Sidebar 
      title="Volunteer Management" 
      items={sidebarItems}
    />
  )

  return (
    <BaseLayout
      title="Volunteers"
      description="Manage and coordinate your volunteer network"
      breadcrumbs={breadcrumbs}
      actions={actions}
      sidebar={sidebar}
    >
      <div className="space-y-6">
        {/* Statistics */}
        <GridLayout columns={3} gap="md">
          <ContentSection className="text-center">
            <UserGroupIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">302</div>
            <div className="text-sm text-gray-600">Total Volunteers</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">234</div>
            <div className="text-sm text-gray-600">Active Volunteers</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <ClockIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Pending Approval</div>
          </ContentSection>
        </GridLayout>

        {/* Volunteer List */}
        <ContentSection title="Volunteer Directory">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volunteer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skills
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Activity
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {volunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {volunteer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {volunteer.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{volunteer.email}</div>
                      <div className="text-sm text-gray-500">{volunteer.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {volunteer.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          volunteer.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : volunteer.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {volunteer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {volunteer.lastActivity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>
      </div>
    </BaseLayout>
  )
} 