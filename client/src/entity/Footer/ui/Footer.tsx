'use client'

import { Menu } from '@/entity/Menu'
import { useBreakPoints } from '@/shared/hooks/general/use-break-points'

function Footer() {
  const { isTablet } = useBreakPoints()

  return <div>{isTablet && <Menu />}</div>
}

export default Footer
