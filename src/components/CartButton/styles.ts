import { styled } from '@/styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  backgroundColor: '$gray800',
  color: '$gray500',

  width: '4.8rem',
  height: '4.8rem',

  svg: {
    fontSize: '2.4rem',
  },
})
