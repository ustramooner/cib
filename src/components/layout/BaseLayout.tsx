'use client'

import { ReactNode } from 'react'
import { ModuleNavigation } from './ModuleNavigation'
import { Breadcrumbs } from './Breadcrumbs'
import { PageHeader } from './PageHeader'

export interface BaseLayoutProps {
  children: ReactNode
  title?: string
  description?: string
  breadcrumbs?: Array<{ name: string; href?: string }>
  actions?: ReactNode
  sidebar?: ReactNode
  className?: string
  showBreadcrumbs?: boolean
  showHeader?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full'
}

export function BaseLayout({
  children,
  title,
  description,
  breadcrumbs,
  actions,
  sidebar,
  className = '',
  showBreadcrumbs = true,
  showHeader = true,
  maxWidth = '7xl'
}: BaseLayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ModuleNavigation />
      
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} px-4 sm:px-6 lg:px-8`}>
        {showBreadcrumbs && breadcrumbs && (
          <div className="py-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        
        {showHeader && (title || description || actions) && (
          <PageHeader 
            title={title}
            description={description}
            actions={actions}
          />
        )}
        
        {sidebar ? (
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0">
              {sidebar}
            </aside>
            <main className={`flex-1 ${className}`}>
              {children}
            </main>
          </div>
        ) : (
          <main className={`pb-8 ${className}`}>
            {children}
          </main>
        )}
      </div>
    </div>
  )
} 