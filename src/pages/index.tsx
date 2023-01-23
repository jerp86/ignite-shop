import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'
import 'keen-slider/keen-slider.min.css'

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((prod) => (
        <Link href={`/product/${prod.id}`} key={prod.id}>
          <Product className="keen-slider__slide">
            <Image
              src={prod.imageUrl}
              alt={prod.name}
              width={520}
              height={480}
            />

            <footer>
              <strong>{prod.name}</strong>
              <span>{prod.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: ProductProps[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount ?? 0) / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    }
  })

  const seconds = 60
  const minutes = 60
  const hours = 168

  return {
    props: {
      products,
    } as HomeProps,
    revalidate: seconds * minutes * hours,
  }
}
