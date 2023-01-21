import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '@/assets/logo.svg'
import { AppContainer, AppHeader } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <AppHeader>
        <img src={logoImg.src} alt="" />
      </AppHeader>

      <Component {...pageProps} />
    </AppContainer>
  )
}
