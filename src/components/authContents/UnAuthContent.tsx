'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import useAuth from '@/components/custom-hooks/useAuth';

export default function UnAuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  // Navigate authenticated users to Members page.
  useEffect(() => {
    if (!loading && loggedIn) {
      router.push('/');
    }
  }, [loggedIn, loading, router]);

  if (!loggedIn) {
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
