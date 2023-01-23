import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  console.log(query)

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
          ratione nam odio ducimus id accusamus unde voluptatem sit perspiciatis
          eos, ea sunt blanditiis molestias, nulla aperiam aspernatur fugiat
          delectus maiores.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
