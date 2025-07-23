'use client'

import { ReactNode } from 'react'

interface PageHeaderProps {
  title?: string
  description?: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({ 
  title, 
  description, 
  actions, 
  className = '' 
}: PageHeaderProps) {
  if (!title && !description && !actions) {
    return null
  }

  return (
    <div className={`border-b border-gray-200 pb-5 mb-8 ${className}`}>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          {title && (
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:truncate sm:text-4xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="mt-2 text-sm text-gray-700 sm:text-base">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="mt-4 flex-shrink-0 sm:ml-4 sm:mt-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
} 