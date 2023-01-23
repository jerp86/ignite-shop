import { globalStyles } from '@/styles/global'
import { AppContainer, AppHeader } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <AppHeader>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>
      </AppHeader>

      <Component {...pageProps} />
    </AppContainer>
  )
}
