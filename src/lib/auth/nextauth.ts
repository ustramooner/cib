import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: 'dummy-client-id',
      clientSecret: 'dummy-client-secret',
    }),
  ],
  secret: 'dev-secret-key-change-in-production',
}

export default authOptions 