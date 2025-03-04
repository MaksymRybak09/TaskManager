import type { PriorityOption } from '../types/task.types'

export const getPriority = (data: PriorityOption[], value: string) =>
  data.find((item) => item.value === value)?.value
