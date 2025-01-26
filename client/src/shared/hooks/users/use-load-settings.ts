import { useProfile } from './use-profile.hook'

export const useLoadSettings = () => {
  const { profile } = useProfile()

  const workInterval = profile?.user.workInterval ?? 50
  const breakInterval = profile?.user.breakInterval ?? 10

  return {
    workInterval,
    breakInterval,
  }
}
