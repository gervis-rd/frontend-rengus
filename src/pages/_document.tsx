import { Html, Head, Main, NextScript } from "next/document";
import { siteConfig } from "@/config/site";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="author" content={siteConfig.author} />
        {/* Inter - Police recommandée pour agence digitale high-tech (doc. Choix De La Police) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
