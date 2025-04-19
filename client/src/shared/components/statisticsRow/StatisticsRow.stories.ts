import type { Meta, StoryObj } from '@storybook/react'
import StatisticsRow from './StatisticsRow'

const meta: Meta<typeof StatisticsRow> = {
  title: 'Shared components/StatisticsRow',
  component: StatisticsRow,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof StatisticsRow>

export const Default: Story = {
  args: {
    data: [
      {
        label: 'Label 1',
        value: 1,
      },
      {
        label: 'Label 2',
        value: 2,
      },
      {
        label: 'Label 3',
        value: 3,
      },
      {
        label: 'Label 4',
        value: 4,
      },
    ],
  },
}
