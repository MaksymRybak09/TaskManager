import Loader from '@/shared/components/loader/Loader'
import StatisticsRow from '@/shared/components/statisticsRow/StatisticsRow'
import { useStatistics } from '@/shared/hooks/users/use-statistics'

export default function Statistics() {
  const { statistics, isStatisticsLoading } = useStatistics()

  if (isStatisticsLoading) {
    return <Loader />
  }

  if (!statistics) {
    return <div>Statistics not found</div>
  }

  return <StatisticsRow data={statistics} />
}
