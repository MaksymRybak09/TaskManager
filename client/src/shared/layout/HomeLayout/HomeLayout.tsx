import { ReactNode } from 'react'
import styles from './home-layout.module.scss'

type HomeLayoutProps = {
  header?: ReactNode
  sidebar?: ReactNode
  children: ReactNode
}

function HomeLayout(props: HomeLayoutProps) {
  return (
    <div className={styles.layout}>
      <header>{props.header}</header>
      <div className={styles.container}>
        <aside className={styles.asside}>{props.sidebar}</aside>
        <main className={styles.main}>{props.children}</main>
      </div>
    </div>
  )
}

export default HomeLayout
