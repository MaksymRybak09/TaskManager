'use client'

import { useBreakPoints } from '@/shared/hooks/general/use-break-points'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './menu-item.module.scss'

type MenuItemProps = {
  label: string
  path: string
  icon?: LucideIcon
}

function MenuItem({ icon: Icon, ...props }: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === props.path

  const { isTablet } = useBreakPoints()
  const stylesString = `${styles[isTablet ? 'tab' : 'menu__item']} ${
    isActive ? styles.active : ''
  }`

  return (
    <Link className={stylesString} href={props.path}>
      {Icon && <Icon className={styles.icon} />}
      {props.label}
    </Link>
  )
}

export default MenuItem
