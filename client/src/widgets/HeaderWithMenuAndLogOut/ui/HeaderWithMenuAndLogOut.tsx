'use client'

import { Header } from '@/entity/Header'
import { Menu } from '@/entity/Menu'
import { LogOutButton } from '@/features/LogOutButton'
import { useBreakPoints } from '@/shared/hooks/general/use-break-points'

function HeaderWithMenuAndLogOut() {
  const { isTablet } = useBreakPoints()

  return (
    <Header
      actions={[
        !isTablet ? <Menu key="menu" /> : undefined,
        <LogOutButton key={'log-out'} />,
      ]}
    />
  )
}

export default HeaderWithMenuAndLogOut
