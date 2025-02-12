import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@tdeepv/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    onClick: {
      action: 'clicked'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Cancel'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        {/* <ArrowRightIcon /> */}
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
