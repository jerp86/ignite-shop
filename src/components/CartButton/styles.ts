import { styled } from '@/styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray500',

        '&:not(:disabled):hover': {
          opacity: 0.4,
          transition: 'all 0.4s',
        },
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
          transition: 'background-color 0.4s',
        },
      },
    },

    size: {
      medium: {
        width: '4.8rem',
        height: '4.8rem',

        svg: {
          fontSize: '2.4rem',
        },
      },

      large: {
        width: '5.6rem',
        height: '5.6rem',

        svg: {
          fontSize: '3.2rem',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
})
