import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: 4,

  height: '42px',

  fontWeight: '$bold',

  outline: 'none',
  border: 'none',
  borderRadius: '$xs',

  fontFamily: '$default',
  backgroundColor: '$theiaPrimary',
  color: '$zinc200',

  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$theiaDark',
    cursor: 'pointer'
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        minWidth: '150px'
      },
      big: {
        fontSize: 16,
        minWidth: '180px'
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export type ButtonProps = ComponentProps<typeof Button>
