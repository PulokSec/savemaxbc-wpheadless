import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function WhoWeAre(props: MyProps) {
  const { featuredData } = props;

  return (
    <section className='mt-14 lg:container md:px-10 lg:mx-auto lg:mt-52 2xl:mt-40'>
      <div className='text-center md:px-10 lg:w-full'>
        <h1 className='px-5 text-center text-lg leading-[36px] text-[#515151] md:text-5xl md:leading-[60px]'>
          {featuredData?.topHead} <br />{' '}
          <span className='font-normal text-black md:text-[32px]'>
            {featuredData?.topHeadCopy}
          </span>
        </h1>
        <div
          className='mx-5 mt-5 text-xs leading-7 md:mx-0 md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.topDescription,
          }}
        ></div>
        <div
          className='mx-5 mt-2 text-justify text-xs md:mx-0 md:text-center md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.description,
          }}
        ></div>
      </div>
      <div className='py-10 md:py-20'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-10 px-10 md:mt-20 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-4'>
            <div className='lg:w-1/2 '>
              <NextImage
                useSkeleton
                className='w-64 md:w-[100%]'
                src={featuredData?.image?.node?.sourceUrl}
                alt={featuredData?.image?.node?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className='flex flex-col items-end justify-end md:mb-20 lg:mb-0 lg:w-1/2'>
              <div className='text-end lg:w-full'>
                <h2 className='w-full text-end text-2xl md:text-4xl lg:text-[42px]'>
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
