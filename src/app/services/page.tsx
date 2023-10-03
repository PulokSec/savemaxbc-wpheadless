import Head from 'next/head';
import React from 'react';

import BottomFeature from '@/components/pages/Services/BottomFeature';
import FeaturedServices from '@/components/pages/Services/FeaturedServices';
import ServiceBanner from '@/components/pages/Services/ServiceBanner';
import Footer from '@/components/shared/Footer';

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
      <BottomFeature />
      <Footer />
    </main>
  );
}
