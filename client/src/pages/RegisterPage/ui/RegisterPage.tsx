'use client'

import { RegisterForm } from '@/features/RegisterLogInForm'
import { SessionProvider } from 'next-auth/react'

function RegisterPage() {
  return (
    <SessionProvider>
      <RegisterForm />
    </SessionProvider>
  )
}

export default RegisterPage
