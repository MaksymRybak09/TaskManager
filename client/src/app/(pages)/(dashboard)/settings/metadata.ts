import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE,
}
