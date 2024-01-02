'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import useAuth from '@/components/custom-hooks/useAuth';
import Loader from '@/components/utils/Loader';

export default function AuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  // Navigate unauthenticated users to Log In page.
  useEffect(() => {
    if (!loading && !loggedIn) {
      router.push('/log-in');
    }
  }, [loggedIn, loading, router]);

  if (loggedIn) {
    return <>{children}</>;
  }

  return <Loader />;
}
