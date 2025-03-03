import { useProfile } from './use-profile'

export const useLoadSettings = () => {
  const { user } = useProfile()

  const workInterval = user?.workInterval ?? 50
  const breakInterval = user?.breakInterval ?? 10

  return {
    workInterval,
    breakInterval,
  }
}
