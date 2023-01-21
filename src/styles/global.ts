import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'button, a': {
    cursor: 'pointer',
  },

  'button:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
  },

  'body, input, textarea, button': {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    fontSize: '$md',
  },

  'a, body, button, h1, h2, h3, footer, main, p, span, strong': {
    lineHeight: 1.6,
  },

  a: {
    textDecoration: 'none',
  },
})
