'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { 
  HomeIcon, 
  UsersIcon, 
  CogIcon, 
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'
import { hasPermission, getUserRoleFromSession, type UserRole } from '@/lib/auth/roles'

const allNavigationItems = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: HomeIcon, 
    module: 'dashboard',
    description: 'Overview and quick actions'
  },
  { 
    name: 'Volunteers', 
    href: '/volunteers', 
    icon: UsersIcon, 
    module: 'volunteers',
    description: 'Manage volunteer network'
  },
  { 
    name: 'Admin', 
    href: '/admin', 
    icon: CogIcon, 
    module: 'admin',
    description: 'User and system management'
  },
  { 
    name: 'Data', 
    href: '/data', 
    icon: DocumentChartBarIcon, 
    module: 'data',
    description: 'Data import, export, and analytics'
  },
  { 
    name: 'Tools', 
    href: '/tools', 
    icon: WrenchScrewdriverIcon, 
    module: 'tools',
    description: 'Campaign tools and utilities'
  },
  { 
    name: 'NationBuilder', 
    href: '/nationbuilder', 
    icon: UserGroupIcon, 
    module: 'nationbuilder',
    description: 'NationBuilder integration'
  },
  { 
    name: 'SysAdmin', 
    href: '/sysadmin', 
    icon: ChartBarIcon, 
    module: 'sysadmin',
    description: 'System administration'
  },
]

interface RoleBasedNavigationProps {
  className?: string
}

export function RoleBasedNavigation({ className = '' }: RoleBasedNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  
  const userRole = getUserRoleFromSession(session)
  
  // Filter navigation items based on user role
  const accessibleItems = allNavigationItems.filter(item => 
    hasPermission(userRole, item.module)
  )

  const handleSignIn = () => {
    signIn()
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <nav className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="CIB"
                  width={64}
                  height={32}
                  className="h-8 w-8"
                />
              </Link>
              {userRole && (
                <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {userRole}
                </span>
              )}
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {accessibleItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm inline-flex items-center group"
                  title={item.description}
                >
                  <item.icon className="h-4 w-4 mr-2 group-hover:text-blue-600" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* User menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {status === 'loading' && (
              <div className="text-sm text-gray-500">Loading...</div>
            )}
            
            {status === 'authenticated' && session?.user && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    {session.user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </div>
            )}
            
            {status === 'unauthenticated' && (
              <button
                onClick={handleSignIn}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
              >
                <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-1" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-gray-50">
            {accessibleItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-transparent text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3" />
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Mobile user section */}
          <div className="pt-4 pb-3 border-t border-gray-200 bg-gray-50">
            {status === 'authenticated' && session?.user && (
              <div className="px-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {session.user.email}
                    </div>
                    {userRole && (
                      <div className="text-xs text-gray-500 capitalize">
                        {userRole} Role
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </div>
            )}
            
            {status === 'unauthenticated' && (
              <div className="px-4">
                <button
                  onClick={handleSignIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center"
                >
                  <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-1" />
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
} 