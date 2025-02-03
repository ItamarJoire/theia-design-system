import { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Button, Label } from '@tdv/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}
        >
          <Label>Description</Label>
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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
