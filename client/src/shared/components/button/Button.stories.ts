import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { Home } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Shared components/Button',
  component: Button,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
}

export const WithChildren: Story = {
  args: {
    children: 'Button',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    variant: 'filled',
    icon: Home,
  },
}

export const IconOnly: Story = {
  args: {
    icon: Home,
  },
}
