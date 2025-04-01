'use client'

import Link from 'next/link'
import styles from './menu-item.module.scss'
import { usePathname } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

type MenuItemProps = {
  label: string
  path: string
  icon?: LucideIcon
}

function MenuItem({ icon: Icon, ...props }: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === props.path

  const stylesString = `${styles['menu__item']} ${
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
