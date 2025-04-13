import { Footer } from '@/entity/Footer'
import styles from '@/shared/layout/HomeLayout/home-layout.module.scss'
import { HeaderWithMenuAndLogOut } from '@/widgets/HeaderWithMenuAndLogOut'
import { ReactNode } from 'react'

type layoutProps = {
  children: ReactNode
}

function layout(props: layoutProps) {
  return (
    <div className={styles.layout}>
      <HeaderWithMenuAndLogOut />
      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default layout
