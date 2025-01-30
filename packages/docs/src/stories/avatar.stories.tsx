import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@tdv/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://avatars.githubusercontent.com/u/4726922',
    alt: 'Avatar'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
