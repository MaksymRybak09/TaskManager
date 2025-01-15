import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { DASHBOARD_PAGES } from '../config/pages-url.config'
import { authService } from '../services/auth/auth.service'

export const useLogOut = () => {
  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['log-out'],
    mutationFn: () => authService.logOut(),
    onSuccess: () => push(DASHBOARD_PAGES.LOG_IN),
  })

  return { mutate }
}
