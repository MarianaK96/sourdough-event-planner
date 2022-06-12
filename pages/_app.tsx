import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

  const config = {
    clientId: clientId,
    apiKey: apiKey,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };
  useEffect(() => {
    const gapi = window.gapi;
    const initClient = () => {
      gapi.client.init({
        config,
      });
    };
    const handleClientLoad = () => {
      gapi.load("client:auth2", initClient);
    };
    console.log(" gapi : ", gapi);
  }, []);

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
        onLoad={() => console.log("gapi is loaded")}
        // strategy="beforeInteractive"
      />
      <Script src="https://apis.google.com/js/platform.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
