import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles'

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '48rem',
  padding: '7.2rem 4.8rem 4.8rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '3.2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
    flex: 1,
    overflowY: 'auto',
  },
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '2.8rem',
  right: '2.8rem',
})
