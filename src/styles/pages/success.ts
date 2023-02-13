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
    marginTop: '2.4rem',
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

export const SuccessSectionImage = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4.8rem',

  'div + div': {
    marginLeft: '-5.2rem',
  },
})

export const SuccessImageContainer = styled('div', {
  width: '14rem',
  height: '14rem',
  background: '$backgroundGradient',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    aspectRatio: 1.09,
    objectFit: 'cover',
  },
})
