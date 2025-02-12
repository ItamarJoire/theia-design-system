import { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Button, Label } from '@tdeepv/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}
        >
          <Label>Email or username</Label>
          {Story()}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '8px',
              marginTop: '16px'
            }}
          >
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </div>
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}
