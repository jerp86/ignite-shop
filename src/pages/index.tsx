import useEmblaCarousel from 'embla-carousel-react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { Footer } from '@/components/Footer'
import { ProductProps } from '@/context/CartContext'
import { stripe } from '@/lib/stripe'
import { HomeContainer, Product, SliderContainer } from '@/styles/pages/home'
import { formattedPrice } from '@/util/formattedPrice'
import { useCart } from '@/hooks/useCart'
import { MouseEvent, useCallback } from 'react'
import { CartButton } from '@/components/CartButton'
import { timerToRevalidate } from '@/util/timerToRevalidate'

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  const handleAddToCart = useCallback(
    (event: MouseEvent<HTMLButtonElement>, product: ProductProps) => {
      event.preventDefault()
      addToCart(product)
    },
    [addToCart],
  )

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

                    <Footer name={prod.name} price={prod.price}>
                      <CartButton
                        color="green"
                        size="large"
                        type="button"
                        disabled={checkIfItemAlreadyExists(prod.id)}
                        onClick={(evt) => handleAddToCart(evt, prod)}
                      />
                    </Footer>
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

  const products: Omit<ProductProps, 'description'>[] = response.data.map(
    (product) => {
      const price = product.default_price as Stripe.Price
      const unitAmount = (price.unit_amount ?? 0) / 100
      const hasFormattedPrice = formattedPrice.format(unitAmount)

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: hasFormattedPrice,
        numberPrice: unitAmount,
        defaultPriceId: price.id,
      }
    },
  )

  return {
    props: {
      products,
    } as HomeProps,
    revalidate: timerToRevalidate({}),
  }
}
