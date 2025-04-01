import { DASHBOARD_PAGES } from '@/shared/config/pages-url.config'
import {
  Clock,
  Home,
  ListChecks,
  LucideIcon,
  Settings,
  Timer,
} from 'lucide-react'

type MenuConfig = {
  key: string
  label: string
  icon?: LucideIcon
  path: string
}[]

export const menuConfig: MenuConfig = [
  { key: 'home', label: 'Home', icon: Home, path: DASHBOARD_PAGES.HOME },
  {
    key: 'tasks',
    label: 'Tasks',
    icon: ListChecks,
    path: DASHBOARD_PAGES.TASKS,
  },
  { key: 'timer', label: 'Timer', icon: Timer, path: DASHBOARD_PAGES.TIMER },
  {
    key: 'time-block',
    label: 'Time block',
    icon: Clock,
    path: DASHBOARD_PAGES.TIME_BLOCK,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: Settings,
    path: DASHBOARD_PAGES.SETTINGS,
  },
]
