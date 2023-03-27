import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import apolloClient from '../../lib/apollo'
import { NextPageWithLayout } from './page'
interface AppPropsLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}
