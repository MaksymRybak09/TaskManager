import type { Meta, StoryObj } from '@storybook/react'
import Field from './Field'

const meta: Meta<typeof Field> = {
  title: 'Shared components/Field',
  component: Field,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Field>

export const Default: Story = {
  args: {
    label: 'Field',
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: 'Field',
    placeholder: 'Placeholder',
  },
}

export const NumberType: Story = {
  args: {
    label: 'Field',
    type: 'number',
  },
}

export const WithError: Story = {
  args: {
    label: 'Field',
    error: {
      type: 'required',
      message: 'This field is required',
    },
  },
}
