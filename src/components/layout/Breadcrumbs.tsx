'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  name: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  showHome?: boolean
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const allItems = showHome 
    ? [{ name: 'Dashboard', href: '/dashboard' }, ...items]
    : items

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {showHome && (
          <li>
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </li>
        )}
        
        {allItems.map((item, index) => (
          <li key={item.name} className="flex items-center">
            {(index > 0 || showHome) && (
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                aria-hidden="true"
              />
            )}
            
            <div className={`ml-4 ${index === 0 && !showHome ? '' : 'ml-4'}`}>
              {item.href && !item.current ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={`text-sm font-medium ${
                    item.current ? 'text-gray-900' : 'text-gray-500'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
} 