import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'

type MenuConfig = {
  key: string
  label: string
  path: string
}[]

export const menuConfig: MenuConfig = [
  { key: 'home', label: 'Home', path: DASHBOARD_PAGES.HOME },
  { key: 'tasks', label: 'Tasks', path: DASHBOARD_PAGES.TASKS },
  { key: 'timer', label: 'Timer', path: DASHBOARD_PAGES.TIMER },
  {
    key: 'time-block',
    label: 'Time block',
    path: DASHBOARD_PAGES.TIME_BLOCK,
  },
  { key: 'settings', label: 'Settings', path: DASHBOARD_PAGES.SETTINGS },
]
