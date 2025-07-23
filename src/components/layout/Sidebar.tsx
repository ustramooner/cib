'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface SidebarItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  current?: boolean
  badge?: string | number
}

interface SidebarProps {
  title?: string
  items?: SidebarItem[]
  children?: ReactNode
  className?: string
}

export function Sidebar({ title, items, children, className = '' }: SidebarProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-3">
          {title}
        </h3>
      )}
      
      {items && (
        <nav className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                item.current
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } flex items-center justify-between border-l-4 py-2 pl-3 pr-4 text-sm font-medium`}
            >
              <div className="flex items-center">
                {item.icon && (
                  <item.icon
                    className={`${
                      item.current ? 'text-blue-500' : 'text-gray-400'
                    } mr-3 h-5 w-5 flex-shrink-0`}
                  />
                )}
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className={`${
                  item.current
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      )}
      
      {children}
    </div>
  )
} 