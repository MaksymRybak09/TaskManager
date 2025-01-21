import { getPriority } from '@/shared/helpers/get-priority'
import { useOutside } from '@/shared/hooks/general/use-outside.hook'
import { PriorityOption } from '@/shared/types/task.types'

export const usePrioritySelect = (data: PriorityOption[], value: string) => {
  const { ref, isShow, setIsShow } = useOutside(false)

  const showPrioritiesList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsShow(!isShow)
  }

  const priority = getPriority(data, value)

  return { ref, isShow, setIsShow, showPrioritiesList, priority }
}
