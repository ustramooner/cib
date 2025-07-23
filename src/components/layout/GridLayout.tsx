'use client'

import { ReactNode } from 'react'

interface GridLayoutProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 6 | 12
    md?: 1 | 2 | 3 | 4 | 6 | 12
    lg?: 1 | 2 | 3 | 4 | 6 | 12
    xl?: 1 | 2 | 3 | 4 | 6 | 12
  }
  className?: string
}

export function GridLayout({
  children,
  columns = 1,
  gap = 'md',
  responsive,
  className = ''
}: GridLayoutProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }

  const responsiveClasses = responsive ? [
    responsive.sm && `sm:grid-cols-${responsive.sm}`,
    responsive.md && `md:grid-cols-${responsive.md}`,
    responsive.lg && `lg:grid-cols-${responsive.lg}`,
    responsive.xl && `xl:grid-cols-${responsive.xl}`
  ].filter(Boolean).join(' ') : ''

  return (
    <div 
      className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${responsiveClasses} ${className}`}
    >
      {children}
    </div>
  )
} 