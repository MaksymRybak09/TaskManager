import type { Meta, StoryObj } from '@storybook/react'
import ProfileImage from './ProfileImage'

const meta: Meta<typeof ProfileImage> = {
  title: 'Shared components/ProfileImage',
  component: ProfileImage,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof ProfileImage>

export const Default: Story = {
  args: {
    letter: 'A',
  },
}
