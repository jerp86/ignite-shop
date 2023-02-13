import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  position: 'absolute',
  left: '0.4rem',
  right: '0.4rem',
  bottom: '0.4rem',
  padding: '2rem',
  paddingRight: '3.2rem',

  backgroundColor: 'rgba(32, 32, 32, 0.9)',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '0.4rem',

    strong: {
      fontSize: '$lg',
      color: '$gray100',

      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '1',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 700,
      color: '$green300',
      textAlign: 'right',
    },
  },
})
