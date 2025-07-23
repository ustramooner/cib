'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'
import { hasPermission, getUserRoleFromSession } from '@/lib/auth/roles'

interface ProtectedRouteProps {
  children: ReactNode
  requiredModule: string
  requiredAction?: string
  fallbackPath?: string
}

export function ProtectedRoute({
  children,
  requiredModule,
  requiredAction = 'view',
  fallbackPath = '/'
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if (status === 'loading') return
    
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }
    
    const userRole = getUserRoleFromSession(session)
    const hasAccess = hasPermission(userRole, requiredModule, requiredAction)
    
    if (!hasAccess) {
      router.push(fallbackPath)
      return
    }
  }, [session, status, router, requiredModule, requiredAction, fallbackPath])
  
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }
  
  if (status === 'unauthenticated') {
    return null
  }
  
  const userRole = getUserRoleFromSession(session)
  const hasAccess = hasPermission(userRole, requiredModule, requiredAction)
  
  if (!hasAccess) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            You don't have permission to access this module.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }
  
  return <>{children}</>
} 