import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          name="description"
          content="Desde 1990 a Gessomar veem levando luxo, conforto e praticidade a milhares de casas."
        />
        <link rel="canonical" href="https://gessomar.com.br" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="Gesso, São Caetano do Sul, São Caetano, Gessomar"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gessomar.com.br/" />
        <meta property="og:title" content="Gessomar" />
        <meta
          property="og:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/gessomar.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gessomar.com.br/" />
        <meta property="twitter:title" content="Gessomar" />
        <meta
          property="twitter:image"
          content="https://imgs-readme.s3.sa-east-1.amazonaws.com/gessomar.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
