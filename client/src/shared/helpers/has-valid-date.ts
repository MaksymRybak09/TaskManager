import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import type { ITask } from '../types/task.types'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const hasValidDate = (item: ITask) =>
  item.createdAt && dayjs(item.createdAt).isValid()
