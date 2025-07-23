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

// Simple role system for demo
type UserRole = 'admin' | 'volunteer' | 'user' | 'sysadmin'

const rolePermissions = {
  admin: ['dashboard', 'volunteers', 'admin', 'data', 'tools', 'nationbuilder', 'sysadmin'],
  sysadmin: ['dashboard', 'volunteers', 'admin', 'data', 'tools', 'sysadmin'],
  volunteer: ['dashboard', 'volunteers', 'tools', 'data'],
  user: ['dashboard', 'tools'],
}

const allNavigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, module: 'dashboard' },
  { name: 'Volunteers', href: '/volunteers', icon: UsersIcon, module: 'volunteers' },
  { name: 'Admin', href: '/admin', icon: CogIcon, module: 'admin' },
  { name: 'Data', href: '/data', icon: DocumentChartBarIcon, module: 'data' },
  { name: 'Tools', href: '/tools', icon: WrenchScrewdriverIcon, module: 'tools' },
  { name: 'NationBuilder', href: '/nationbuilder', icon: UserGroupIcon, module: 'nationbuilder' },
  { name: 'SysAdmin', href: '/sysadmin', icon: ChartBarIcon, module: 'sysadmin' },
]

function RoleSelector({ currentRole, onRoleChange }: { currentRole: UserRole, onRoleChange: (role: UserRole) => void }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {Object.keys(rolePermissions).map((role) => (
        <button
          key={role}
          onClick={() => onRoleChange(role as UserRole)}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            currentRole === role
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {role}
        </button>
      ))}
    </div>
  )
}

function Navigation({ userRole }: { userRole: UserRole }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  
  const accessibleItems = allNavigationItems.filter(item => 
    rolePermissions[userRole]?.includes(item.module)
  )

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="CIB"
                  width={64}
                  height={32}
                  className="h-8 w-16"
                />
              </Link>
              <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {userRole}
              </span>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {accessibleItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm inline-flex items-center group"
                >
                  <item.icon className="h-4 w-4 mr-2 group-hover:text-blue-600" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {status === 'authenticated' && session?.user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    {session.user.email || 'Demo User'}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
              >
                <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-1" />
                Sign In
              </button>
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

export default function HomePage() {
  const { data: session, status } = useSession()
  const [currentRole, setCurrentRole] = useState<UserRole>('user')
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userRole={currentRole} />
      
      <div className="max-w-4xl mx-auto pt-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hello{session?.user?.email && `, ${session.user.email.split('@')[0]}`}!
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Welcome to the Campaign in a Box
          </p>

          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Demo: Role-Based Navigation</h2>
            <p className="text-gray-600 mb-4">
              Try different roles to see how the navigation menu changes based on permissions:
            </p>
            <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
            
            <div className="text-sm text-gray-500 bg-gray-50 rounded p-4">
              <h3 className="font-medium mb-2">Current permissions for "{currentRole}" role:</h3>
              <div className="flex flex-wrap gap-2">
                {rolePermissions[currentRole].map(module => (
                  <span key={module} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {session ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                ✅ You are signed in! The navigation shows modules available to your role.
              </p>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                ⚠️ Sign in to see role-based navigation and access protected modules.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
