import { Header } from '@/entity/Header'
import { Menu } from '@/entity/Menu'
import { LogOutButton } from '@/features/LogOutButton'

function HeaderWithMenuAndLogOut() {
  return (
    <Header actions={[<Menu key="menu" />, <LogOutButton key={'log-out'} />]} />
  )
}

export default HeaderWithMenuAndLogOut
