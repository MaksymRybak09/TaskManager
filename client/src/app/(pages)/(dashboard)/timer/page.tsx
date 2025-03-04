import { TimerPage } from '@/pages/TimerPage'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: 'Timer',
  ...NO_INDEX_PAGE,
}

export default TimerPage
