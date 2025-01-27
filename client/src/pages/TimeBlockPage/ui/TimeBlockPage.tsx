import { Sidebar } from '@/entity/Sidebar'
import { TimeBlockBoard } from '@/features/TimeBlockBoard'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function TimeBlockPage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <TimeBlockBoard />
    </HomeLayout>
  )
}

export default TimeBlockPage
