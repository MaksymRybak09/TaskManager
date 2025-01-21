import { useOutside } from '@/shared/hooks/general/use-outside.hook'
import { useState } from 'react'

export const useDatePicker = (onChange: (value: string) => void) => {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)

  const handleDaySelect = (data: any) => {
    const ISODate = data?.toISOString()

    setSelected(ISODate)
    if (ISODate) {
      onChange(ISODate)
      setIsShow(false)
    } else {
      onChange('')
    }
  }

  return { selected, isShow, setIsShow, ref, handleDaySelect }
}
