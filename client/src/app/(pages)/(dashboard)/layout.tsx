import { ReactNode } from 'react'
import styles from '@/shared/layout/HomeLayout/home-layout.module.scss'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'
import { Sidebar } from '@/entity/Sidebar'

type layoutProps = {
  children: ReactNode
}

function layout(props: layoutProps) {
  return (
    <div className={styles.layout}>
      <HeaderWithLogOut />
      <div className={styles.container}>
        <aside className={styles.asside}>
          <Sidebar />
        </aside>
        <main className={styles.main}>{props.children}</main>
      </div>
    </div>
  )
}

export default layout
