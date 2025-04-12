'use client'

import Button from '@/shared/components/button/Button'
import { useBreakPoints } from '@/shared/hooks/general/use-break-points'
import { useLogOut } from '@/shared/hooks/users/use-log-out'
import { LogOut } from 'lucide-react'

function LogOutButton() {
  const { mutate } = useLogOut()
  const { isTablet } = useBreakPoints()

  return (
    <Button
      icon={LogOut}
      variant={isTablet ? 'border' : 'filled'}
      onClick={() => mutate()}
    >
      {isTablet ? undefined : 'Log-out'}
    </Button>
  )
}

export default LogOutButton
