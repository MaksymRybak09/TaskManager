import { RegisterLogInPage } from '@/pages/RegisterLogInPage'
import { NO_INDEX_PAGE } from '@/shared/constants/colors.constants'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE,
}

export default function AuthPage() {
  return <RegisterLogInPage />
}
