import '../styles/globals.css'

import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YNXJ28RW49"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YNXJ28RW49');
        `}
      </Script>

      <Component {...pageProps} />

    </>
  )
};
