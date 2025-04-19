import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Shared components/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    value: 'default',
    data: [
      {
        label: 'option 1',
        value: 'optionOne',
      },
      {
        label: 'option 2',
        value: 'optionTwo',
      },
      {
        label: 'option 3',
        value: 'optionThree',
      },
    ],
  },
}
