import Button from '@/shared/components/button/Button'
import { useLogOut } from '@/shared/hooks/users/use-log-out.hook'

function LogOutButton() {
  const { mutate } = useLogOut()
  return <Button onClick={() => mutate()}>Log-out</Button>
}

export default LogOutButton
