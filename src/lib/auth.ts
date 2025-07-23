import bcrypt from 'bcryptjs'
import { prisma } from './prisma'
import { Role } from '@prisma/client'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createUser(
  email: string,
  password: string,
  fullName?: string,
  role: Role = Role.USER
) {
  const hashedPassword = await hashPassword(password)
  
  return prisma.profile.create({
    data: {
      email,
      password: hashedPassword,
      fullName,
      role,
    },
  })
}

export async function getUserByEmail(email: string) {
  return prisma.profile.findUnique({
    where: { email },
  })
}

export async function getUserById(id: string) {
  return prisma.profile.findUnique({
    where: { id },
  })
} 