import { useQuery } from '@tanstack/react-query'
import { userService } from '../../services/user/user.service'

export const useProfile = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getProfile(),
  })

  return { user: data, isLoading, isSuccess }
}
