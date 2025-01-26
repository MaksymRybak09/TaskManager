'use client'

import { SettingsPage } from '@/pages/SettingsPage'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE,
}

export default function Page() {
  return <SettingsPage />
}
