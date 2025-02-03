import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  width: '100%',
  minHeight: 80,

  padding: '$3 $3',

  fontFamily: '$default',
  fontSize: '$sm',

  borderRadius: '$xxs',
  border: '1px solid $zinc800',
  outline: 'none',

  boxSizing: 'border-box',
  resize: 'vertical',

  color: '$zinc200',
  backgroundColor: '$dark900',

  '&:hover': {
    borderColor: '$zinc700'
  },

  '&:focus': {
    borderColor: '$theiaPrimary'
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '&:disabled:hover': {
    borderColor: '$zinc800'
  }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
