import type { Meta, StoryObj } from '@storybook/react'
import { TransparentField } from './TransparentField'

const meta: Meta<typeof TransparentField> = {
  title: 'Shared components/TransparentField',
  component: TransparentField,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TransparentField>

export const Default: Story = {
  args: {},
}
