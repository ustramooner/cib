'use client'

import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

function AuthGuard({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  
  // Define paths that don't require authentication
  const publicPaths = ['/auth/signin', '/auth/signup']
  const isPublicPath = publicPaths.includes(pathname)
  
  useEffect(() => {
    // Don't redirect while loading
    if (status === 'loading') return
    
    // Don't redirect if user is on a public path
    if (isPublicPath) return
    
    // Redirect to signin if user is not authenticated
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
      return
    }
  }, [status, router, pathname, isPublicPath])
  
  // Show loading spinner while checking authentication
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
  
  // For public paths, always show content
  if (isPublicPath) {
    return <>{children}</>
  }
  
  // For protected paths, only show content if authenticated
  if (status === 'authenticated') {
    return <>{children}</>
  }
  
  // Don't render anything while redirecting
  return null
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider>
      <AuthGuard>
        {children}
      </AuthGuard>
    </SessionProvider>
  )
} 