import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            <Script
              src="https://apis.google.com/js/api.js"
              onLoad={() => console.log("gapi is loaded")}
              // strategy="beforeInteractive"
            />
            <Script src="https://apis.google.com/js/platform.js" />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
