import type { AppProps } from "next/app";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
