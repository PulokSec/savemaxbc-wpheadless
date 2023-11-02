import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  aboutData: any;
};
export default function AboutSection(props: MyProps) {
  const { aboutData } = props;
  return (
    <div className='mt-10 overflow-x-hidden bg-white'>
      <div className='px-5 text-center md:px-10 lg:w-full'>
        <h2 className='text-center text-2xl md:px-10 md:text-4xl'>
          {aboutData?.aboutTitle}
        </h2>
        <div
          className='mt-5 px-5 text-center text-xs md:px-10  md:text-lg'
          dangerouslySetInnerHTML={{
            __html: aboutData?.aboutDescription,
          }}
        ></div>
      </div>
      <div className='mx-auto mt-5 grid max-w-2xl grid-cols-12 gap-4 overflow-x-hidden md:gap-0 lg:mx-0 lg:max-w-none'>
        <div className='col-span-12 px-5 md:col-span-5 md:col-start-2 lg:mt-20'>
          <div className='w-full'>
            <div
              className='mt-5 text-start text-xs md:text-lg'
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
        <div className='relative col-span-4 col-start-8 col-end-12 overflow-x-hidden md:col-span-3 md:col-start-10'>
          <NextImage
            useSkeleton
            className='w-40 md:mt-[400px] md:h-[100%] md:w-[100%]'
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
