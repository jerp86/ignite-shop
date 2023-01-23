import { styled } from '..'

export const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  '@md': {
    paddingBottom: '2.4rem',
    paddingLeft: '3.2rem',
  },

  '@sm': {
    paddingBottom: '2.4rem',
    paddingLeft: '2.4rem',
  },
})

export const AppHeader = styled('header', {
  padding: '3.2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@md': {
    padding: '2.4rem 0',
  },

  '@sm': {
    padding: '1.6rem 0',
  },
})
