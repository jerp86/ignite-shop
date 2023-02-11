import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer } from './styles'

export const Header = () => (
  <HeaderContainer>
    <Link href="/" prefetch={false}>
      <Image src={logoImg} alt="" width={130} height={52} />
    </Link>
  </HeaderContainer>
)
