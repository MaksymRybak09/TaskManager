import type { Meta, StoryObj } from '@storybook/react'
import Linking from './Linking'

const meta: Meta<typeof Linking> = {
  title: 'Shared components/Link',
  component: Linking,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Linking>

export const Default: Story = {
  args: {
    children: 'Link',
    href: '/',
  },
}
