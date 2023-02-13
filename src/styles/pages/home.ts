import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const SliderContainer = styled('div', {
  display: 'flex',
  gap: '4.8rem',
  margin: '0 auto',

  '.embla__slide': {
    minWidth: '69.9rem',
  },
})

export const Product = styled('div', {
  background: '$backgroundGradient',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '65.6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
