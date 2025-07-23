import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail, verifyPassword } from '@/lib/auth'

const { handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || 'dummy-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy-client-secret',
    }),
    Credentials({
      name: 'Email and Password',
      credentials: {
        email: { 
          label: 'Email', 
          type: 'email',
          placeholder: 'your@email.com'
        },
        password: { 
          label: 'Password', 
          type: 'password',
          placeholder: 'Your password'
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Get user by email from database
          const user = await getUserByEmail(credentials.email as string)
          
          if (!user) {
            console.log('User not found:', credentials.email)
            return null
          }

          // Verify password
          const isValid = await verifyPassword(
            credentials.password as string,
            user.password
          )

          if (!isValid) {
            console.log('Invalid password for user:', credentials.email)
            return null
          }

          // Return user object
          return {
            id: user.id,
            email: user.email,
            name: user.fullName || user.email?.split('@')[0],
            role: user.role,
          }
        } catch (error) {
          console.log('Auth error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || 'USER'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-key-change-in-production',
})

export const { GET, POST } = handlers 