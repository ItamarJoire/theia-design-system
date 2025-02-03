import { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps, Label } from '@tdv/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  args: {},
  decorators: [
    Story => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {Story()}
          <Label>Accept terms of use</Label>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
}
