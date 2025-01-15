import { Sidebar } from '@/entity/Sidebar'
import { SettingsUpdateForm } from '@/features/SettingsUpdateForm'
import Heading from '@/shared/components/heading/Heading'
import HomeLayout from '@/shared/layout/HomeLayout/HomeLayout'
import { HeaderWithLogOut } from '@/widgets/HeaderWithLogOut'

function SettingsPage() {
  return (
    <HomeLayout header={<HeaderWithLogOut />} sidebar={<Sidebar />}>
      <Heading title={'Settings'} />
      <SettingsUpdateForm />
    </HomeLayout>
  )
}

export default SettingsPage
