import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timer',
  ...NO_INDEX_PAGE,
}
