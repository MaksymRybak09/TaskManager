import { SelectOptions } from '../types/select.types'
import { capitalizeFirstLetter } from './capitalized-first-letter'

export const getPriority = (data: SelectOptions, value: string) =>
  capitalizeFirstLetter(
    data.find((item) => item.value === value)?.label ?? 'low',
  )
