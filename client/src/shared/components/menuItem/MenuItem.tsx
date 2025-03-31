'use client'

import Link from 'next/link'
import styles from './menu-item.module.scss'
import { usePathname } from 'next/navigation'

type MenuItemProps = {
  label: string
  path: string
}

function MenuItem(props: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === props.path

  const stylesString = `${styles['menu__item']} ${
    isActive ? styles.active : ''
  }`

  return (
    <Link className={stylesString} href={props.path}>
      {props.label}
    </Link>
  )
}

export default MenuItem
