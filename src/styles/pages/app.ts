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
