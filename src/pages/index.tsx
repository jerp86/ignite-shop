import useEmblaCarousel from 'embla-carousel-react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Footer } from '@/components/Footer'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product, SliderContainer } from '@/styles/pages/home'

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
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/product/${prod.id}`}
                  prefetch={false}
                  passHref
                >
                  <Product className="embla__slide">
                    <Image
                      src={prod.imageUrl}
                      alt={prod.name}
                      width={520}
                      height={480}
                    />

                    <Footer name={prod.name} price={prod.price} />
                  </Product>
                </Link>
              ))}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
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
