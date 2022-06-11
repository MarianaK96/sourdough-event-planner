import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-signin-client_id"
          content="22523177138-96gmm07is48cqongebtd00l4cetah3sp.apps.googleusercontent.com"
        />
      </Head>
      <Script
        src="https://apis.google.com/js/api.js"
        // strategy="beforeInteractive"
      />
      <Script src="https://apis.google.com/js/platform.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
