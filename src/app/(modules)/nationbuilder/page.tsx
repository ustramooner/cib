import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { ContentSection } from '@/components/layout/ContentSection'
import { GridLayout } from '@/components/layout/GridLayout'

export const metadata: Metadata = {
  title: 'NationBuilder - CIB',
  description: 'NationBuilder integration and management',
}

export default function NationBuilderPage() {
  const breadcrumbs = [
    { name: 'NationBuilder', current: true }
  ]

  return (
    <BaseLayout
      title="NationBuilder"
      description="Manage your NationBuilder integration and sync data"
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-6">
        <ContentSection title="Integration Status">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-yellow-800">NationBuilder API</p>
                <p className="text-xs text-yellow-600">Configuration needed</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-yellow-200 text-yellow-800 rounded-full">
                Pending
              </span>
            </div>
          </div>
        </ContentSection>
        
        <ContentSection title="Quick Actions">
          <GridLayout columns={3} gap="md">
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium">Sync Contacts</h4>
              <p className="text-sm text-gray-600 mt-1">Import contacts from NationBuilder</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium">Export Data</h4>
              <p className="text-sm text-gray-600 mt-1">Export data to NationBuilder</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              <h4 className="font-medium">Settings</h4>
              <p className="text-sm text-gray-600 mt-1">Configure API settings</p>
            </button>
          </GridLayout>
        </ContentSection>
      </div>
    </BaseLayout>
  )
} 