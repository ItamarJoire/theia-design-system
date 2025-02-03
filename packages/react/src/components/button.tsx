import { ComponentProps, ElementType, JSX } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  height: '$10',
  minWidth: '120px',

  fontFamily: '$default',
  fontWeight: '$medium',

  outline: 'none',
  border: 'none',
  borderRadius: '$xxs',
  padding: '$3 $4',

  boxSizing: 'border-box',
  cursor: 'pointer',

  transition: 'background-color 0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$zinc400'
  },

  svg: {
    width: '$4',
    height: '$4'
  },

  variants: {
    variant: {
      primary: {
        color: '$zinc200',
        backgroundColor: '$theiaPrimary',

        '&:not(:disabled):hover': {
          backgroundColor: '$theiaDark'
        }
      },
      secondary: {
        color: '$zinc200',
        backgroundColor: '$zinc800',

        '&:not(:disabled):hover': {
          backgroundColor: '$zinc900'
        }
      },

      tertiary: {
        color: '$zinc200',
        backgroundColor: 'transparent',
        border: '1px solid $zinc800',

        '&:not(:disabled):hover': {
          backgroundColor: '$zinc800'
        }
      }
    },

    size: {
      md: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$md'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  variant: 'primary' | 'secondary' | 'tertiary'
  children: string | JSX.Element,
  as?: ElementType
  disabled?: boolean,

}

Button.displayName = 'Button'
