import { ComponentProps } from 'react'
import { Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export function TextInput({ ...props }: TextInputProps) {
  return <Input {...props} />
}

TextInput.displayName = 'TextInput'
