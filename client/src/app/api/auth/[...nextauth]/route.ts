import { authService } from '@/shared/services/auth/auth.service'
import NextAuth, { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await authService.signIn({
          email: user.email ?? '',
          name: user.name ?? '',
        })
        return true
      } catch (error) {
        console.error('OIDC sign-in failed:', error)
        return false
      }
    },
    async jwt(params) {
      return params.token
    },
    async session(params) {
      return params.session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
