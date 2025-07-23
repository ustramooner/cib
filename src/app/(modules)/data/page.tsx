import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'
import { Sidebar } from '@/components/layout/Sidebar'
import { 
  ChartBarIcon, 
  DocumentArrowUpIcon, 
  DocumentArrowDownIcon, 
  TableCellsIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Data - CIB',
  description: 'Data management and analytics',
}

const sidebarItems = [
  { name: 'Overview', href: '/data', current: true },
  { name: 'Import Data', href: '/data/import' },
  { name: 'Export Data', href: '/data/export' },
  { name: 'Reports', href: '/data/reports', badge: '8' },
  { name: 'Analytics', href: '/data/analytics' },
  { name: 'Data Sources', href: '/data/sources' },
]

export default function DataPage() {
  const breadcrumbs = [
    { name: 'Data', current: true }
  ]

  const sidebar = (
    <Sidebar 
      title="Data Management" 
      items={sidebarItems}
    />
  )

  const actions = (
    <div className="flex space-x-3">
      <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex items-center">
        <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
        Export
      </button>
      <button className="bg-blue-600 border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 inline-flex items-center">
        <DocumentArrowUpIcon className="h-4 w-4 mr-2" />
        Import Data
      </button>
    </div>
  )

  return (
    <BaseLayout
      title="Data Management"
      description="Import, export, and analyze your campaign data"
      breadcrumbs={breadcrumbs}
      actions={actions}
      sidebar={sidebar}
    >
      <div className="space-y-6">
        {/* Data Statistics */}
        <GridLayout columns={4} gap="md">
          <ContentSection className="text-center">
            <TableCellsIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">45,678</div>
            <div className="text-sm text-gray-600">Total Records</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <DocumentArrowUpIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Imports This Week</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <ChartBarIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Active Reports</div>
          </ContentSection>
          
          <ContentSection className="text-center">
            <ArrowPathIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Syncing Sources</div>
          </ContentSection>
        </GridLayout>

        {/* Data Sources */}
        <ContentSection title="Data Sources" description="Connected data sources and their status">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-green-800">NationBuilder</p>
                  <p className="text-xs text-green-600">Last sync: 2 hours ago</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">Connected</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-blue-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-blue-800">Google Sheets</p>
                  <p className="text-xs text-blue-600">Auto-sync enabled</p>
                </div>
              </div>
              <span className="text-blue-600 text-sm font-medium">Active</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-gray-400 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Facebook Ads</p>
                  <p className="text-xs text-gray-600">Not configured</p>
                </div>
              </div>
              <span className="text-gray-600 text-sm font-medium">Disconnected</span>
            </div>
          </div>
        </ContentSection>

        {/* Recent Reports */}
        <ContentSection title="Recent Reports">
          <div className="space-y-4">
            {[
              { name: 'Volunteer Engagement Report', date: '2024-01-22', type: 'Volunteers' },
              { name: 'Donor Analytics Q1', date: '2024-01-20', type: 'Fundraising' },
              { name: 'Campaign Performance', date: '2024-01-18', type: 'Campaigns' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{report.name}</p>
                  <p className="text-xs text-gray-500">{report.type} • {report.date}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                  View
                </button>
              </div>
            ))}
          </div>
        </ContentSection>
      </div>
    </BaseLayout>
  )
} 