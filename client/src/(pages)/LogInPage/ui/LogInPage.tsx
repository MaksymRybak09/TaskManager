'use client'

import { LogInForm } from '@/features/RegisterLogInForm'
import { SessionProvider } from 'next-auth/react'

function LogInPage() {
  return (
    <SessionProvider>
      <LogInForm />
    </SessionProvider>
  )
}

export default LogInPage
