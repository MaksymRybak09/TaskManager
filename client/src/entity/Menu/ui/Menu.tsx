'use client'

import MenuItem from '@/shared/components/menuItem/MenuItem'
import { menuConfig } from '../config/menu-config'
import styles from './menu.module.scss'

function Menu() {
  return (
    <menu className={styles.menu}>
      {menuConfig.map((menuItem) => (
        <MenuItem
          key={menuItem.key}
          label={menuItem.label}
          icon={menuItem.icon}
          path={menuItem.path}
        />
      ))}
    </menu>
  )
}

export default Menu
