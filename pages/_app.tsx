import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // Additional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
