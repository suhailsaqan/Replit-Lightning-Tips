import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Style } from '../src/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Replit Lightning Payment</title>
      </Head>
      <Style />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
