import { stripe } from '@/lib/stripe'
import {
  SuccessImageContainer,
  SuccessContainer,
  SuccessSectionImage,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface ProductImageProps {
  id: string
  imageUrl: string
}

interface SuccessProps {
  costumerName: string
  products: ProductImageProps[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  const shirtText = products?.length <= 1 ? 'camiseta' : 'camisetas'

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Compra efetuada | Ignite Shop</title>
      </Head>

      <SuccessContainer>
        <SuccessSectionImage>
          {products?.map((product, index) => (
            <SuccessImageContainer key={product.id} style={{ order: index }}>
              <Image src={product.imageUrl} alt="" width={120} height={110} />
            </SuccessImageContainer>
          ))}
        </SuccessSectionImage>

        <h1>Compra Efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de{' '}
          {products?.length} {shirtText} já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details?.name
  const products = session.line_items?.data.map((item) => {
    const prod = item.price?.product as Stripe.Product
    return { id: prod.id, imageUrl: prod.images[0] }
  })

  return {
    props: {
      costumerName,
      products,
    } as SuccessProps,
  }
}
