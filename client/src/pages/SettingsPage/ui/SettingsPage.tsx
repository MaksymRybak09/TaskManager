import { SettingsUpdateForm } from '@/features/SettingsUpdateForm'
import Heading from '@/shared/components/heading/Heading'

function SettingsPage() {
  return (
    <>
      <Heading size="4">Settings</Heading>
      <SettingsUpdateForm />
    </>
  )
}

export default SettingsPage
