import { LogInPage } from '@/pages/LogInPage'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE,
}

export default LogInPage
