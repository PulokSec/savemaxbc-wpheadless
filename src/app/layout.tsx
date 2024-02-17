// import { FaustProvider } from '@faustwp/experimental-app-router/ssr';
import { GoogleTagManager } from '@next/third-parties/google';
import * as React from 'react';
import '../../faust.config';

import '@/styles/colors.css';
import '@/styles/globals.css';
import '@/styles/npprogress.css';

import { ApolloWrapper } from '@/lib/ApolloWrapper';

import { AuthProvider } from '@/components/custom-hooks/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-US'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='google-site-verification'
          content='kEB7qhEmjjCSBCXIyBGgeq4Fvg7DpYeGUYRz-zGwtbQ'
        />
        <meta
          name='google-site-verification'
          content='HiFknIDYrk-Cy_O6aPNzw_5ja6544H2LvXTCyFPdH-g'
        />
        <link rel="preload" href="/fonts/Alamia-Regular.woff2" as="font" type="font/woff2" crossOrigin='' />
        <link rel="preload" href="/fonts/Alamia-Medium.woff2" as="font" type="font/woff2" crossOrigin='' />
      </head>
      <body className='font-primary'>
        <ApolloWrapper>
          <AuthProvider>
            <GoogleTagManager
              gtmId={`${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />
            {children}
          </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
