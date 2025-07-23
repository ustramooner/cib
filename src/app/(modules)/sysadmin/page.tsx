import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'
import { Sidebar } from '@/components/layout/Sidebar'
import { 
  ServerIcon, 
  CircleStackIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'SysAdmin - CIB',
  description: 'System administration and monitoring',
}

const sidebarItems = [
  { name: 'Overview', href: '/sysadmin', current: true },
  { name: 'Server Status', href: '/sysadmin/servers' },
  { name: 'Database', href: '/sysadmin/database' },
  { name: 'Monitoring', href: '/sysadmin/monitoring' },
  { name: 'Logs', href: '/sysadmin/logs', badge: '142' },
  { name: 'Performance', href: '/sysadmin/performance' },
  { name: 'Alerts', href: '/sysadmin/alerts', badge: '3' },
]

export default function SysAdminPage() {
  const breadcrumbs = [
    { name: 'SysAdmin', current: true }
  ]

  const sidebar = (
    <Sidebar 
      title="System Administration" 
      items={sidebarItems}
    />
  )

  return (
    <BaseLayout
      title="System Administration"
      description="Monitor and manage system infrastructure"
      breadcrumbs={breadcrumbs}
      sidebar={sidebar}
    >
      <div className="space-y-6">
        {/* System Health */}
        <GridLayout columns={4} gap="md">
          <ContentSection className="text-center">
            <ServerIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <CircleStackIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2.4GB</div>
            <div className="text-sm text-gray-600">Database Size</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <ChartBarIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">120ms</div>
            <div className="text-sm text-gray-600">Avg Response</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <ClockIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Active Alerts</div>
          </ContentSection>
        </GridLayout>

        {/* Server Status */}
        <ContentSection title="Server Infrastructure">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-green-800">Web Server (Production)</p>
                  <p className="text-xs text-green-600">CPU: 45% | Memory: 62% | Disk: 78%</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">Healthy</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-green-800">Database Server</p>
                  <p className="text-xs text-green-600">CPU: 32% | Memory: 58% | Disk: 45%</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">Healthy</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-yellow-800">Redis Cache</p>
                  <p className="text-xs text-yellow-600">CPU: 78% | Memory: 92% | High usage detected</p>
                </div>
              </div>
              <span className="text-yellow-600 text-sm font-medium">Warning</span>
            </div>
          </div>
        </ContentSection>

        {/* Recent Alerts */}
        <ContentSection title="Recent System Alerts">
          <div className="space-y-3">
            {[
              {
                type: 'warning',
                message: 'High memory usage on Redis server',
                time: '5 minutes ago',
                icon: ExclamationTriangleIcon,
                color: 'text-yellow-600'
              },
              {
                type: 'info',
                message: 'Database backup completed successfully',
                time: '2 hours ago',
                icon: CircleStackIcon,
                color: 'text-blue-600'
              },
              {
                type: 'success',
                message: 'SSL certificates renewed',
                time: '1 day ago',
                icon: ShieldCheckIcon,
                color: 'text-green-600'
              },
            ].map((alert, index) => (
              <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                <alert.icon className={`h-5 w-5 ${alert.color} mr-3 flex-shrink-0`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Performance Charts Placeholder */}
        <ContentSection title="Performance Metrics">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Performance charts would be displayed here</p>
              <p className="text-sm text-gray-400">Integration with monitoring tools needed</p>
            </div>
          </div>
        </ContentSection>
      </div>
    </BaseLayout>
  )
} 