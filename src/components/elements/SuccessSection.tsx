import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function SuccessSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-0 px-5 md:px-10'>
      <div className='-mt-20 pb-5 pt-0 md:-mt-10 lg:-mt-20 xl:-mt-10 md:py-10 md:pb-10'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='flex flex-col items-center justify-center gap-4 md:mt-10 md:px-10 lg:mx-0 lg:flex-row xl:mt-20'>
            <div className='flex flex-col items-start justify-center lg:w-1/2'>
              <div className='text-start lg:w-full'>
                <h2 className='mx-auto w-full text-start text-xl md:text-4xl lg:text-[42px]'>
                  {featuredData?.featureTitle}
                </h2>
                <div
                  className='mt-5 text-xs md:text-lg'
                  dangerouslySetInnerHTML={{
                    __html: featuredData?.featureDescription,
                  }}
                ></div>
              </div>
              <div className='mt-5 text-start md:mt-10'>
                <a
                  href='/apply-now'
                  className='text-uppercase rounded-bl-[20px] border border-solid px-2 py-1 text-xs  font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className='mx-auto lg:w-1/2'>
              <NextImage
                useSkeleton
                className='flex w-64 items-end justify-end md:w-[100%] '
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
