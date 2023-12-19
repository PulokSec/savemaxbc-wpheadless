import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function ExploreSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-10 px-5 md:px-10 lg:px-10'>
      <div className='text-center lg:w-full lg:px-10'>
        <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
          {featuredData?.topHead}
        </h2>
        {featuredData?.topDescription && (
          <div
            className='mt-5 text-xs lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: featuredData?.topDescription,
            }}
          ></div>
        )}
      </div>
      <div className='py-10 md:py-10 lg:-mt-32 lg:py-20 2xl:-mt-24'>
        <div className='mx-auto w-full'>
          <div className='mx-auto mt-10 flex flex-col items-center justify-around gap-4 md:mt-10 md:flex-col lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:px-10 lg:pr-4'>
            <div className='flex flex-col items-start justify-center'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-start text-xl md:text-2xl lg:text-4xl'>
                  {featuredData?.featureTitle}
                </h2>
                <div
                  className='md:text-md mt-5 text-xs lg:text-lg'
                  dangerouslySetInnerHTML={{
                    __html: featuredData?.featureDescription,
                  }}
                ></div>
                <div className='mt-2 py-10 text-start'>
                  <a
                    href='/services'
                    className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className=''>
              <NextImage
                useSkeleton
                className='md:w-100 w-40 lg:w-[500px]'
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
