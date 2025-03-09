import { TIME_BLOCK_DEFAUL_COLOR } from '../constants/time-block-colors'
import { SelectOptions } from '../types/select.types'

export const getColor = (data: SelectOptions, value: string) =>
  data.find((item) => item.value === value)?.label ??
  TIME_BLOCK_DEFAUL_COLOR.label
