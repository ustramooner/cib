'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { 
  HomeIcon, 
  UsersIcon, 
  CogIcon, 
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  DocumentChartBarIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'NationBuilder', href: '/nationbuilder', icon: UserGroupIcon },
  { name: 'Admin', href: '/admin', icon: CogIcon },
  { name: 'Volunteers', href: '/volunteers', icon: UsersIcon },
  { name: 'Data', href: '/data', icon: DocumentChartBarIcon },
  { name: 'Tools', href: '/tools', icon: WrenchScrewdriverIcon },
  { name: 'SysAdmin', href: '/sysadmin', icon: ChartBarIcon },
]

export function ModuleNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="CIB"
                  width={96}
                  height={48}
                  className="h-12 w-24"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm inline-flex items-center"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {status === 'loading' && (
              <div className="text-sm text-gray-500">Loading...</div>
            )}
            {status === 'authenticated' && session?.user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {session.user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            )}
            {status === 'unauthenticated' && (
              <Link
                href="/auth/signin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
            )}
          </div>

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

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 