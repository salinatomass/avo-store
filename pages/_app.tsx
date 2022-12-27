import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'

import '../styles.css'
import { AppProvider } from 'context/AppContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}
