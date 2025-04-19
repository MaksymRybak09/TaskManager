import type { Meta, StoryObj } from '@storybook/react'
import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'Shared components/Loader',
  component: Loader,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {},
}
