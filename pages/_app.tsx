import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AppProvider } from 'context/AppContext'

import '../styles.css'
import Layout from '@components/Layout/Layout'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </QueryClientProvider>
  )
}
