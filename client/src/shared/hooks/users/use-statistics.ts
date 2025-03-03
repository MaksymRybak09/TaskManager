import { statisticsService } from '@/shared/services/user/statistics.service'
import { useQuery } from '@tanstack/react-query'

export const useStatistics = () => {
  const { data: statistics, isLoading: isStatisticsLoading } = useQuery({
    queryKey: ['statistics'],
    queryFn: () => statisticsService.getFullStats(),
  })

  return { statistics, isStatisticsLoading }
}
