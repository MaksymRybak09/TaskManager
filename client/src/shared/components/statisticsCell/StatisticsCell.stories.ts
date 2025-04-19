import type { Meta, StoryObj } from '@storybook/react'
import StatisticsCell from './StatisticsCell'

const meta: Meta<typeof StatisticsCell> = {
  title: 'Shared components/StatisticsCell',
  component: StatisticsCell,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof StatisticsCell>

export const Default: Story = {
  args: {
    label: 'Label',
    value: 1,
  },
}
