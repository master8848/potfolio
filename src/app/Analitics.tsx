"use client";
import React from "react";
import Head from "next/head";
import Script from "next/script";

const Analitics = ({ children }) => {
  return (
    <>
      <Head>
        <Script strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-C3BQSF93S0');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C3BQSF93S0"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-C3BQSF93S0');`}
        </Script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-C3BQSF93S0"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {children}
    </>
  );
};

export default Analitics;
