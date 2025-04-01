'use client'

import Button from '@/shared/components/button/Button'
import { useLogOut } from '@/shared/hooks/users/use-log-out'
import { LogOut } from 'lucide-react'

function LogOutButton() {
  const { mutate } = useLogOut()
  return (
    <Button icon={LogOut} onClick={() => mutate()}>
      Log-out
    </Button>
  )
}

export default LogOutButton
