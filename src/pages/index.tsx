import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camiseta1 from '@/assets/camisetas/1.png'
import camiseta2 from '@/assets/camisetas/2.png'
import camiseta3 from '@/assets/camisetas/3.png'
import camiseta4 from '@/assets/camisetas/4.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta4} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
