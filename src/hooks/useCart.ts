import { CartContext } from '@/context/CartContext'
import { useContextSelector } from 'use-context-selector'

export const useCart = () =>
  useContextSelector(CartContext, (context) => context)
