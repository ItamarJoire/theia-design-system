import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@tdv/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et perferendis consectetur quisquam non, tempora reiciendis cupiditate dolore ipsum commodi dolor perspiciatis, iusto sed. Dolorum sequi totam distinctio dolorem quam!'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
