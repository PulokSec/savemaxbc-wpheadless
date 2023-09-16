'use client';

import Head from 'next/head';

import HomeLanding from '@/components/pages/Home/HomeLanding';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className=''>
          <div>
            <HomeLanding />
          </div>
        </div>
      </section>
    </main>
  );
}
