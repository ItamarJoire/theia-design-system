import { Check } from 'lucide-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
