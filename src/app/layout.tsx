import { SpeedInsights } from '@vercel/speed-insights/next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { ApolloWrapper } from '@/lib/ApolloWrapper';

import { AuthProvider } from '@/components/custom-hooks/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
