import React from 'react';

import Header from '@/components/shared/Header';

export default function ListingBanner() {
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage:
          "url('https://savemaxbc.com/wp-content/uploads/2023/10/banner.jpg')",
      }}
    >
      <Header />
      <div className='mx-auto py-16'>
        <div className='mx-auto mt-[50%] flex w-full flex-col items-center justify-center text-center md:mt-[10%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl'>
            ALL PROPERTIES
          </p>
        </div>
      </div>
    </div>
  );
}
