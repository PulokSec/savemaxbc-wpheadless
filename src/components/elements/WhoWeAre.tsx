import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function WhoWeAre(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-14 lg:mt-28 2xl:mt-40 lg:container md:px-10 lg:mx-auto'>
      <div className='text-center md:px-10 lg:w-full'>
        <h1 className='px-5 text-center text-lg leading-7 text-[#525659] md:text-5xl'>
          {featuredData?.topHead}
        </h1>
        <div
          className='mt-5 text-xs leading-7 md:text-lg mx-5 md:mx-0'
          dangerouslySetInnerHTML={{
            __html: featuredData?.topDescription,
          }}
        ></div>
      </div>
      <div className='py-10 md:py-20'>
        <div className='mx-auto w-full'>
          <div className='mx-auto mt-10 flex flex-col items-center justify-around gap-4 px-10 md:mt-20 md:flex-row lg:mx-0 lg:max-w-none'>
            <div className=''>
              <NextImage
                useSkeleton
                className='w-40 md:w-[400px]'
                src={featuredData?.image?.sourceUrl}
                alt={featuredData?.image?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className='flex flex-col items-end justify-end'>
              <div className='text-end lg:w-full'>
                <h2 className='w-full text-end text-2xl md:text-4xl'>
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
          </div>
        </div>
      </div>
    </section>
  );
}
