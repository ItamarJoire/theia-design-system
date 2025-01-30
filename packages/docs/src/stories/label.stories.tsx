import { StoryObj, Meta } from '@storybook/react'
import { Label, LabelProps } from '@tdv/react'

export default {
  title: 'Typography/Label',
  component: Label,

  args: {
    children: 'Label'
  }
} as Meta<LabelProps>

export const Primary: StoryObj<LabelProps> = {}
