import StatisticsRow from '@/shared/components/statisticsRow/StatisticsRow'
import { useStatistics } from '@/shared/hooks/users/use-statistics'

export default function Statistics() {
  const { statistics, isStatisticsLoading } = useStatistics()

  if (isStatisticsLoading) {
    return <div>Loading...</div>
  }

  if (!statistics) {
    return <div>Statistics not found</div>
  }

  return <StatisticsRow data={statistics} />
}
