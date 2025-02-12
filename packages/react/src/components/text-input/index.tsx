import { forwardRef, ComponentRef } from 'react'
import { Input } from './styles'
import type { ComponentPropsWithoutRef } from 'react'

export interface TextInputProps
  extends ComponentPropsWithoutRef<typeof Input> {}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  (props, ref) => {
    return <Input {...props} ref={ref} />
  }
)

TextInput.displayName = 'TextInput'
