import { ProfileBlock } from '@/entity/ProfileBlock'
import { ReactNode } from 'react'
import styles from './header.module.scss'

type HeaderProps = {
  actions: ReactNode[]
}

function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <ProfileBlock />
      <div className={styles['header__actions']}>{props.actions}</div>
    </div>
  )
}

export default Header
