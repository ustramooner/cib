import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'
import { Sidebar } from '@/components/layout/Sidebar'
import { ProtectedRoute } from '@/components/layout/ProtectedRoute'
import { 
  UsersIcon, 
  CogIcon, 
  ShieldCheckIcon, 
  CircleStackIcon,
  ServerIcon,
  KeyIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Admin - CIB',
  description: 'System administration and user management',
}

const sidebarItems = [
  { name: 'Overview', href: '/admin', current: true },
  { name: 'Users', href: '/admin/users', badge: '45' },
  { name: 'Roles & Permissions', href: '/admin/roles' },
  { name: 'System Settings', href: '/admin/settings' },
  { name: 'Security', href: '/admin/security' },
  { name: 'Backups', href: '/admin/backups' },
  { name: 'Logs', href: '/admin/logs' },
]

const adminStats = [
  {
    name: 'Total Users',
    value: '45',
    change: '+3 this week',
    icon: UsersIcon,
    color: 'text-blue-600',
  },
  {
    name: 'Active Sessions',
    value: '23',
    change: 'Real-time',
    icon: ServerIcon,
    color: 'text-green-600',
  },
  {
    name: 'Security Events',
    value: '12',
    change: 'Last 24h',
    icon: ShieldCheckIcon,
    color: 'text-yellow-600',
  },
  {
    name: 'Database Size',
    value: '2.4GB',
    change: '+12MB today',
    icon: CircleStackIcon,
    color: 'text-purple-600',
  },
]

const quickActions = [
  {
    name: 'Add New User',
    description: 'Create a new user account',
    href: '/admin/users/new',
    icon: UsersIcon,
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'System Backup',
    description: 'Create a full system backup',
    href: '/admin/backups/new',
    icon: CircleStackIcon,
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    name: 'Security Audit',
    description: 'Run security audit check',
    href: '/admin/security/audit',
    icon: ShieldCheckIcon,
    color: 'bg-red-600 hover:bg-red-700',
  },
  {
    name: 'System Settings',
    description: 'Configure system parameters',
    href: '/admin/settings',
    icon: CogIcon,
    color: 'bg-gray-600 hover:bg-gray-700',
  },
]

export default function AdminPage() {
  const breadcrumbs = [
    { name: 'Admin', current: true }
  ]

  const sidebar = (
    <Sidebar 
      title="Administration" 
      items={sidebarItems}
    />
  )

  return (
    <ProtectedRoute requiredModule="admin">
      <BaseLayout
        title="System Administration"
        description="Manage users, settings, and system configuration"
        breadcrumbs={breadcrumbs}
        sidebar={sidebar}
      >
        <div className="space-y-6">
          {/* Admin Statistics */}
          <GridLayout columns={2} responsive={{ lg: 4 }} gap="md">
            {adminStats.map((stat) => (
              <ContentSection key={stat.name} className="text-center">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.name}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.change}</div>
              </ContentSection>
            ))}
          </GridLayout>

          {/* Quick Actions */}
          <ContentSection title="Quick Actions" description="Common administrative tasks">
            <GridLayout columns={2} gap="md">
              {quickActions.map((action) => (
                <a
                  key={action.name}
                  href={action.href}
                  className="relative rounded-lg p-6 hover:bg-gray-50 flex items-start space-x-4 group border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <div className={`rounded-lg p-3 ${action.color} text-white group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium text-gray-900">
                      {action.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </a>
              ))}
            </GridLayout>
          </ContentSection>

          {/* System Status */}
          <ContentSection title="System Status">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-green-800">Database</p>
                    <p className="text-xs text-green-600">All systems operational</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm font-medium">Online</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-green-800">API Services</p>
                    <p className="text-xs text-green-600">Response time: 120ms</p>
                  </div>
                </div>
                <span className="text-green-600 text-sm font-medium">Healthy</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-yellow-400 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">External Integrations</p>
                    <p className="text-xs text-yellow-600">NationBuilder sync pending</p>
                  </div>
                </div>
                <span className="text-yellow-600 text-sm font-medium">Warning</span>
              </div>
            </div>
          </ContentSection>
        </div>
      </BaseLayout>
    </ProtectedRoute>
  )
} 