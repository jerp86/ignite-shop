import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: '65.6rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.4,
    color: '$gray300',
    textAlign: 'center',
    maxWidth: '56rem',
    marginTop: '3.2rem',
  },

  a: {
    display: 'block',
    marginTop: '8rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',

    '&:hover': {
      color: '$green300',
      transition: 'color ease-in-out 0.4s',
    },
  },
})

export const SuccessImageContainer = styled('div', {
  width: '100%',
  maxWidth: '13rem',
  height: '14.5rem',
  background: '$backgroundGradient',
  borderRadius: 8,
  padding: '0.4rem',
  marginTop: '6.4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
