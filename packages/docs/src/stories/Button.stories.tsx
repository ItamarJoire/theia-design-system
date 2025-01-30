import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@tdv/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Save'
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}
