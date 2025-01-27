import { ITimeBlock } from '../types/time-block.types'

export const calcHoursLeft = (items: ITimeBlock[] | undefined) => {
  const totalMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0
  const totalHours = Math.floor(totalMinutes / 60)
  return 24 - totalHours
}
