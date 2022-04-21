import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Style } from "../src/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>
          {process.env["WEBPAGENAME"] || "Personal Lightning Payment"}
        </title>
      </Head>
      <Style />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
