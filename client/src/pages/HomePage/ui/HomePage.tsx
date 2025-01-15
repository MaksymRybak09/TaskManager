import { Sidebar } from '@/entity/Sidebar'
import { Statistics } from '@/entity/Statistics'
import Heading from '@/shared/components/heading/Heading'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function HomePage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <Heading title="Statistics" />
      <Statistics />
    </HomeLayout>
  )
}

export default HomePage
