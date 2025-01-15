import Link from 'next/link'
import styles from './menu-item.module.scss'

type MenuItemProps = {
  label: string
  path: string
}

function MenuItem(props: MenuItemProps) {
  return (
    <Link className={styles['menu__item']} href={props.path}>
      {props.label}
    </Link>
  )
}

export default MenuItem
