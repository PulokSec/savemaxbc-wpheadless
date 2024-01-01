'use client';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/npprogress.css';

import { ApolloWrapper } from '@/lib/ApolloWrapper';

import { AuthProvider } from '@/components/custom-hooks/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return (
    <html>
      <body className='font-primary'>
        <ApolloWrapper>
          <AuthProvider>
            {children}
            <SpeedInsights />
          </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
