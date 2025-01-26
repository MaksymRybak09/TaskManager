import { Sidebar } from '@/entity/Sidebar'
import { Timer } from '@/features/Timer'
import Heading from '@/shared/components/heading/Heading'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function TimerPage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <Heading title="Timer" />
      <Timer />
    </HomeLayout>
  )
}

export default TimerPage
