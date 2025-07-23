import { Metadata } from 'next'
import { BaseLayout } from '@/components/layout/BaseLayout'
import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { GridLayout } from '@/components/layout/GridLayout'

export const metadata: Metadata = {
  title: 'Dashboard - CIB',
  description: 'Campaign in a Box Dashboard',
}

export default function DashboardPage() {
  return (
    <BaseLayout
      title="Dashboard"
      description="Welcome to your Campaign in a Box dashboard"
      showBreadcrumbs={false}
    >
      <div className="space-y-8">
        <DashboardStats />

        <GridLayout columns={2} gap="lg">
          <QuickActions />
          <RecentActivity />
        </GridLayout>
      </div>
    </BaseLayout>
  )
} 