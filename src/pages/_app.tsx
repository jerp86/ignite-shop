import { globalStyles } from '@/styles/global'
import { AppContainer, AppHeader } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <AppHeader>
        <Image src={logoImg} alt="" />
      </AppHeader>

      <Component {...pageProps} />
    </AppContainer>
  )
}
