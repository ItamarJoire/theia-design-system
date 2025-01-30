import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      md: {
        width: '$6',
        height: '$6'
      },
      lg: {
        width: '$8',
        height: '$8'
      },
      xl: {
        width: '$10',
        height: '$10'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
})

export const AvatarFallback = styled(Avatar.AvatarFallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$zinc600',
  color: '$zinc800',

  svg: {
    width: '$6',
    height: '$6'
  }
})
