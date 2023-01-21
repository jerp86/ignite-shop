import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4C4',
      gray100: '#E1E1E6',

      green500: '#00875F',
      green300: '#00B37E',

      backgroundGradient: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    },

    fontSizes: {
      md: '1.8rem',
      lg: '2rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
    },
  },
})
