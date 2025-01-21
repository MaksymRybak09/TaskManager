import StatisticsRow from '@/shared/components/statisticsRow/StatisticsRow'
import { useProfile } from '@/shared/hooks/users/use-profile.hook'

export default function Statistics() {
  const { profile, isLoading } = useProfile()

  if (isLoading) {
    return 'Loading...'
  }

  return profile?.statistics.length ? (
    <StatisticsRow data={profile.statistics} />
  ) : (
    <div>Statistics not found</div>
  )
}
