import { NextRequest, NextResponse } from 'next/server'
import { createUser, getUserByEmail } from '@/lib/auth'
import { Role } from '@prisma/client'

export async function POST(request: NextRequest) {
  try {
    const { email, password, fullName, role = 'USER' } = await request.json()

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Create user
    const user = await createUser(
      email,
      password,
      fullName,
      role.toUpperCase() as Role
    )

    // Return success (don't include password in response)
    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 