import Head from 'next/head';
import React from 'react';

import FeaturedServices from '@/components/pages/Services/FeaturedServices';
import ServiceBanner from '@/components/pages/Services/ServiceBanner';

export default function ServicePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <ServiceBanner />
        <FeaturedServices />
      </section>
    </main>
  );
}
