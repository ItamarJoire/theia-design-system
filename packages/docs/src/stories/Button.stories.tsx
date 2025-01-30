import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@tdv/react'
import { ArrowRightIcon } from 'lucide-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Click me'
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
        <ArrowRightIcon strokeWidth={2} />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
