import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import Head from 'next/head'
import { useCart } from '@/hooks/useCart'
import { ProductProps } from '@/context/CartContext'
import { formattedPrice } from '@/util/formattedPrice'
import { timerToRevalidate } from '@/util/timerToRevalidate'

interface IProduct {
  product: ProductProps
}

export default function Product({ product }: IProduct) {
  const { isFallback } = useRouter()
  const { addToCart, checkIfItemAlreadyExists } = useCart()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)
  const buttonText = itemAlreadyInCart
    ? 'Produto já está no carrinho'
    : 'Colocar na sacola'

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={520}
            height={480}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={itemAlreadyInCart}
          >
            {buttonText}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NDK13rdz1C3LcA' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id || ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const unitAmount = (price.unit_amount ?? 0) / 100
  const hasFormattedPrice = formattedPrice.format(unitAmount)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: hasFormattedPrice,
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: unitAmount,
      },
    } as IProduct,
    revalidate: timerToRevalidate({}),
  }
}
