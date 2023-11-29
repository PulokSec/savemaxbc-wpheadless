import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function FindSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-40 lg:mt-20 2xl:mt-40 lg:container md:px-10 lg:mx-auto'>
      <div className='text-center md:px-10 lg:w-full'>
        <h1 className='px-5 text-center text-lg leading-5 text-[#525659] md:text-5xl'>
          {featuredData?.topHead}
        </h1>
        <div
          className='mt-5 px-5 text-xs leading-5 md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.topDescription,
          }}
        ></div>
      </div>
      <div className='py-10 md:py-20 lg:pt-0 lg:pb-10'>
        <div className='mx-auto w-full'>
          <div className='mx-auto mt-10 flex flex-col items-center justify-around gap-4 px-10 md:mt-20 md:flex-row lg:mx-0 lg:max-w-none'>
            <div className='flex flex-col items-start justify-center'>
              <div className='text-start lg:w-[500px]'>
                <h2 className='w-full text-start text-2xl md:text-4xl'>
                  {featuredData?.featureTitle}
                </h2>
                <div
                  className='mt-5 text-xs md:text-lg'
                  dangerouslySetInnerHTML={{
                    __html: featuredData?.featureDescription,
                  }}
                ></div>
              </div>
            </div>
            <div className=''>
              <NextImage
                useSkeleton
                className='md:w-100 w-40 lg:h-[100%] lg:w-[100%]'
                src={featuredData?.image?.sourceUrl}
                alt={featuredData?.image?.altText}
                width='500'
                height='200'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
