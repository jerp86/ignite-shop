import { SuccessImageContainer, SuccessContainer } from '@/styles/pages/success'
import Image from 'next/image'
import Link from 'next/link'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <SuccessImageContainer>
        <Image src="" alt="" width={120} height={110} />
      </SuccessImageContainer>

      <p>
        Uhuul <strong>José Eduardo</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
