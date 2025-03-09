import type { ITask } from '../types/task.types'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { FILTERS } from '../constants/task-table-filters'
import { hasValidDate } from './has-valid-date'

dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

const taskFilters: any = {
  today: (tasks: ITask[] | undefined) =>
    tasks?.filter(
      (item) =>
        dayjs(item.createdAt).isSame(FILTERS.today, 'day') && !item.isCompleted,
    ),
  tomorrow: (tasks: ITask[] | undefined) =>
    tasks?.filter(
      (item) =>
        dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
        !item.isCompleted,
    ),
  ['on-this-week']: (tasks: ITask[] | undefined) =>
    tasks?.filter(
      (item) =>
        !dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
        !dayjs(item.createdAt).isSame(FILTERS.tomorrow) &&
        dayjs(item.createdAt).isSameOrBefore(FILTERS['on-this-week']) &&
        !item.isCompleted,
    ),
  later: (tasks: ITask[] | undefined) =>
    tasks?.filter(
      (item) =>
        (!item.createdAt ||
          (hasValidDate(item) &&
            dayjs(item.createdAt).isSameOrAfter(FILTERS['later']))) &&
        !item.isCompleted,
    ),
  completed: (tasks: ITask[] | undefined) =>
    tasks?.filter((item) => item.isCompleted),
}

export const filterTasks = (tasks: ITask[] | undefined, value: string) => {
  return taskFilters[value](tasks) ?? []
}
