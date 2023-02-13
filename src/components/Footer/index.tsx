import { ReactNode } from 'react'
import { FooterContainer } from './styles'

interface FooterProps {
  name: string
  price: string
  children?: ReactNode
}

export const Footer = ({ name, price, children }: FooterProps) => (
  <FooterContainer>
    <div>
      <strong>{name}</strong>
      <span>{price}</span>
    </div>

    {children}
  </FooterContainer>
)
