import TimeBlockPage from '@/pages/TimeBlockPage'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time block',
  ...NO_INDEX_PAGE,
}

export default TimeBlockPage
