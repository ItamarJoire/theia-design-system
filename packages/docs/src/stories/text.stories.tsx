import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@tdeepv/react'

export default {
  title: 'Typography/Text',
  component: Text,
  size: 'md',
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, et perferendis consectetur quisquam non, tempora reiciendis cupiditate dolore ipsum commodi dolor perspiciatis, iusto sed. Dolorum sequi totam distinctio dolorem quam!'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
