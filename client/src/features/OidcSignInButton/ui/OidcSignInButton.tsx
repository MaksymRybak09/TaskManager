import Button from '@/shared/components/button/Button'
import { BuiltInProviderType } from 'next-auth/providers/index'
import { signIn } from 'next-auth/react'
import { ReactNode } from 'react'

type OidcSignInButtonProps = {
  children: ReactNode
  provider: BuiltInProviderType
}

function OidcSignInButton(props: OidcSignInButtonProps) {
  return (
    <Button onClick={() => signIn(props.provider)} variant="border">
      {props.children}
    </Button>
  )
}

export default OidcSignInButton
