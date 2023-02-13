import { CartButton } from '../CartButton'
import { FooterContainer } from './styles'

interface FooterProps {
  name: string
  price: string
}

export const Footer = ({ name, price }: FooterProps) => (
  <FooterContainer>
    <div>
      <strong>{name}</strong>
      <span>{price}</span>
    </div>

    <CartButton color="green" size="large" type="button" />
  </FooterContainer>
)
