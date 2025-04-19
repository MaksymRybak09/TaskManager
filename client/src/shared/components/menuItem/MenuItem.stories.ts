import type { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem'
import { Home } from 'lucide-react'

const meta: Meta<typeof MenuItem> = {
  title: 'Shared components/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MenuItem>

export const Default: Story = {
  args: {
    label: 'Menu item',
    path: '/',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Home',
    path: '/home',
    icon: Home,
  },
}
