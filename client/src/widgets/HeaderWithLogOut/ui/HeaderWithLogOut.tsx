import { Header } from '@/entity/Header'
import { LogOutButton } from '@/features/LogOutButton'

function HeaderWithLogOut() {
  return <Header actions={[<LogOutButton key={'log-out'} />]} />
}

export default HeaderWithLogOut
