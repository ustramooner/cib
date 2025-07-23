'use client'

import { ReactNode } from 'react'

interface ContentSectionProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  background?: 'white' | 'gray' | 'transparent'
  border?: boolean
  shadow?: boolean
}

export function ContentSection({
  title,
  description,
  children,
  className = '',
  padding = 'md',
  background = 'white',
  border = true,
  shadow = true
}: ContentSectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent'
  }

  const classes = [
    backgroundClasses[background],
    paddingClasses[padding],
    border && background !== 'transparent' ? 'border border-gray-200' : '',
    shadow && background !== 'transparent' ? 'shadow-sm' : '',
    'rounded-lg',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {(title || description) && (
        <div className="border-b border-gray-200 pb-4 mb-6">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
} 