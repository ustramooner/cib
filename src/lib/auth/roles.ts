export type UserRole = 'admin' | 'volunteer' | 'user' | 'sysadmin'

export interface Permission {
  module: string
  actions: string[]
}

export const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    { module: 'dashboard', actions: ['view'] },
    { module: 'volunteers', actions: ['view', 'create', 'edit', 'delete'] },
    { module: 'admin', actions: ['view', 'create', 'edit', 'delete'] },
    { module: 'data', actions: ['view', 'import', 'export', 'delete'] },
    { module: 'tools', actions: ['view', 'use'] },
    { module: 'nationbuilder', actions: ['view', 'sync', 'configure'] },
    { module: 'sysadmin', actions: ['view'] },
  ],
  sysadmin: [
    { module: 'dashboard', actions: ['view'] },
    { module: 'volunteers', actions: ['view'] },
    { module: 'admin', actions: ['view', 'create', 'edit'] },
    { module: 'data', actions: ['view', 'export'] },
    { module: 'tools', actions: ['view', 'use'] },
    { module: 'sysadmin', actions: ['view', 'manage', 'configure'] },
  ],
  volunteer: [
    { module: 'dashboard', actions: ['view'] },
    { module: 'volunteers', actions: ['view'] },
    { module: 'tools', actions: ['view', 'use'] },
    { module: 'data', actions: ['view'] },
  ],
  user: [
    { module: 'dashboard', actions: ['view'] },
    { module: 'tools', actions: ['view'] },
  ],
}

export function hasPermission(
  userRole: UserRole | undefined,
  module: string,
  action: string = 'view'
): boolean {
  if (!userRole) return false
  
  const permissions = rolePermissions[userRole]
  const modulePermission = permissions.find(p => p.module === module)
  
  return modulePermission?.actions.includes(action) || false
}

export function getAccessibleModules(userRole: UserRole | undefined): string[] {
  if (!userRole) return []
  
  return rolePermissions[userRole].map(p => p.module)
}

export function getUserRoleFromSession(session: any): UserRole | undefined {
  // This would typically come from your database/session
  // For demo purposes, we'll use a default role or check session data
  if (!session?.user) return undefined
  
  // Check if user has a role in their profile
  return session.user.role || 'user'
} 