import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function SuccessSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-10 px-5 md:px-10'>
      <div className='py-10 md:py-20'>
        <div className='mx-auto w-full'>
          <div className=';lg:mt-20 mx-auto mt-10 flex flex-col items-center justify-around gap-4 md:mt-10 md:flex-col md:px-10 lg:mx-0 lg:max-w-none lg:flex-row'>
            <div className='flex flex-col items-start justify-center'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-start text-xl md:text-4xl'>
                  {featuredData?.featureTitle}
                </h2>
                <div
                  className='mt-5 text-xs md:text-lg'
                  dangerouslySetInnerHTML={{
                    __html: featuredData?.featureDescription,
                  }}
                ></div>
              </div>
              <div className='mt-5 text-start  md:mt-10'>
                <a
                  href='#'
                  className='text-uppercase rounded-bl-[20px] border border-solid px-2 py-1 text-xs  font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Learn More
                </a>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
