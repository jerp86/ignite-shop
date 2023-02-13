import produce from 'immer'
import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: ProductProps[]
  cartTotal: number
  addToCart: (product: ProductProps) => void
  removeCartItem: (productId: string) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([])

  const cartTotal = cartItems.reduce(
    (total, prod) => (total += prod.numberPrice),
    0,
  )

  const checkIfItemAlreadyExists = useCallback(
    (productId: string) => cartItems.some((prod) => prod.id === productId),
    [cartItems],
  )

  const addToCart = useCallback(
    (product: ProductProps) => {
      const hasItemInCart = checkIfItemAlreadyExists(product.id)

      const newCart = produce(cartItems, (draft) => {
        if (!hasItemInCart) {
          draft.push(product)
        }
      })

      setCartItems(newCart)
    },
    [cartItems, checkIfItemAlreadyExists],
  )

  const removeCartItem = useCallback(
    (productId: string) => {
      const newCart = produce(cartItems, (draft) => {
        const hasItemInCart = checkIfItemAlreadyExists(productId)

        if (hasItemInCart) {
          const indexItem = cartItems.findIndex(({ id }) => id === productId)
          draft.splice(indexItem, 1)
        }
      })

      setCartItems(newCart)
    },
    [cartItems, checkIfItemAlreadyExists],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeCartItem,
        checkIfItemAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
