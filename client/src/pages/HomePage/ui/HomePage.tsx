import { Sidebar } from '@/entity/Sidebar'
import { Statistics } from '@/entity/Statistics'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function HomePage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <Statistics />
    </HomeLayout>
  )
}

export default HomePage
