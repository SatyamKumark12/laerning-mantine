// _app.tsx

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'
import client from '../../client-header/client';



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
