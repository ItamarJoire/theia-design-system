import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@tdeepv/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://avatars.githubusercontent.com/u/4726922',
    alt: 'Avatar'
  },
  argTypes: {
    src: {
      control: { type: 'text' }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
