'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  topTitle: any;
  topDesc: any;
};

const HomeSurreyTopText = (props: Props) => {
  const { topTitle, topDesc } = props;
  const router = useRouter();
  return (
    <div className='container mx-auto my-5 w-11/12 bg-white px-5 py-3 text-center shadow-md'>
      <div
        className='md:text-md mt-5 leading-6 lg:text-lg'
        dangerouslySetInnerHTML={{
          __html: topDesc,
        }}
      ></div>
      <h1
        onClick={() => router.push('/properties-listing')}
        className='mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
      >
        {topTitle}
      </h1>
    </div>
  );
};

export default HomeSurreyTopText;
