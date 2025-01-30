import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Label = styled('label', {
  fontFamily: '$default',
  fontSize: '$xs',
  lineHeight: '$base',
  fontWeight: '$medium',

  margin: 0,
  color: '$zinc500'
})

export interface LabelProps extends ComponentProps<typeof Label> {
  children: string
  as?: ElementType
}
