import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  aboutData: any;
};
export default function AboutSection(props: MyProps) {
  const { aboutData } = props;
  return (
    <div className='mt-10 bg-white'>
      <div className='px-5 text-center md:px-5 lg:w-full lg:px-10'>
        <h2 className='text-center text-2xl md:text-3xl lg:px-10 lg:text-4xl'>
          {aboutData?.aboutTitle}
        </h2>
        <div
          className='md:text-md mt-5  px-5 text-center text-xs md:px-5 lg:px-10    lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: aboutData?.aboutDescription,
          }}
        ></div>
      </div>
      <div className=' mt-5 grid grid-cols-12 gap-4 lg:mx-0 lg:max-w-none lg:gap-0'>
        <div className='container col-span-12 mx-auto px-5 md:col-span-12 md:px-10 lg:col-span-5 lg:col-start-2 lg:mt-20'>
          <div className='w-full'>
            <div
              className='mt-5 text-start text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: aboutData?.aboutDescriptionBottom,
              }}
            ></div>
            <div className='mt-10 py-10 text-start'>
              <a
                href='#'
                className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className='relative col-span-4 col-start-8 col-end-12 md:col-span-4  md:col-start-10 md:col-end-12 lg:col-span-3 lg:col-start-10'>
          <NextImage
            useSkeleton
            className='md:w-100 w-40 lg:mt-[400px] lg:h-[100%] lg:w-[100%]'
            src={aboutData?.aboutImage?.sourceUrl}
            width='500'
            height='400'
            alt={aboutData?.aboutImage?.altText}
          />
        </div>
      </div>
    </div>
  );
}
