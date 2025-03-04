import { SettingsUpdateForm } from '@/features/SettingsUpdateForm'
import Heading from '@/shared/components/heading/Heading'

function SettingsPage() {
  return (
    <>
      <Heading title={'Settings'} />
      <SettingsUpdateForm />
    </>
  )
}

export default SettingsPage
