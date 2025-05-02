import type { Meta, StoryObj } from '@storybook/react'
import TimeBlock from './TimeBlock'
import Button from '@/shared/components/button/Button'

const meta: Meta<typeof TimeBlock> = {
  title: 'Entities/TimeBlock',
  component: TimeBlock,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TimeBlock>

export const Default: Story = {
  args: {
    item: {
      id: '1',
      name: 'Work',
      duration: 180,
      color: '#fad4d2',
      order: 1,
    },
  },
}

export const withDelete: Story = {
  args: {
    item: {
      id: '1',
      name: 'Work',
      duration: 180,
      color: '#fad4d2',
      order: 1,
    },
    actions: [
      <Button key={'delete button'} variant="transparent">
        Delete
      </Button>,
    ],
  },
}
