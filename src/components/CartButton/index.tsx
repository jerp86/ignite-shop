import { Handbag } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CartButtonContainer } from './styles'

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  quantity?: number
}

export const CartButton = ({ quantity = 0, ...rest }: CartButtonProps) => (
  <CartButtonContainer {...rest}>
    {quantity > 0 && <span>{quantity}</span>}
    <Handbag weight="bold" />
  </CartButtonContainer>
)
