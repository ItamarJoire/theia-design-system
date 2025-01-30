import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$xs',
  backgroundColor: '$dark900',
  border: '1px solid $zinc800'
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as: ElementType
}
