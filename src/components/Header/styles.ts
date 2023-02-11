import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  padding: '3.2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  img: {
    aspectRatio: 2.5,
    objectFit: 'cover',
  },

  '@md': {
    padding: '2.4rem 0',
  },

  '@sm': {
    padding: '1.6rem 0',
  },
})
