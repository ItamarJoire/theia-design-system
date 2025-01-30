import { styled } from '../../styles'

export const Input = styled('input', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',

  width: '100%',

  padding: '$3 $3',

  fontFamily: '$default',
  fontSize: '$sm',

  borderRadius: '$xxs',
  border: '1px solid $zinc800',
  outline: 'none',

  boxSizing: 'border-box',

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
