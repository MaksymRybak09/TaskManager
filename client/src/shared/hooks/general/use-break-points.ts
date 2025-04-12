import { useMediaQuery } from 'react-responsive'

export const useBreakPoints = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const isTablet = useMediaQuery({ maxWidth: 920 })
  const isLaptop = useMediaQuery({ minWidth: 1000 })

  return { isMobile, isTablet, isLaptop }
}
