import { Header } from '@/components'
import { CartContextProvider } from '@/context/CartContext'
import { globalStyles } from '@/styles/global'
import { AppContainer } from '@/styles/pages/app'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <AppContainer>
        <Header />

        <Component {...pageProps} />
      </AppContainer>
    </CartContextProvider>
  )
}
