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
    <div className='container mx-auto w-11/12 bg-white px-5 py-3 text-center shadow-md my-5'>
      <div
        className='md:text-md mt-5 leading-6 lg:text-lg'
        dangerouslySetInnerHTML={{
          __html: topDesc,
        }}
      ></div>
      <p
        onClick={() => router.push('/properties-listing')}
        className='mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
      >
        {topTitle}
      </p>
    </div>
  );
};

export default HomeSurreyTopText;
