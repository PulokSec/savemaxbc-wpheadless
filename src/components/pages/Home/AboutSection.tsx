import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  aboutData: any;
};
export default function AboutSection(props: MyProps) {
  const { aboutData } = props;
  return (
    <div className='overflow-x-hidden bg-white'>
      <div className='mx-auto mt-20 grid max-w-2xl grid-cols-12 gap-4 overflow-x-hidden md:gap-0 lg:mx-0 lg:max-w-none'>
        <div className='col-span-12 pl-5 md:col-span-5 md:col-start-2 lg:mt-20'>
          <div className='w-full'>
            <h2 className='w-full text-2xl md:text-4xl'>
              {aboutData?.aboutTitle}
            </h2>
            <div
              className='mt-5 text-xs md:text-lg'
              dangerouslySetInnerHTML={{
                __html: aboutData?.aboutDescription,
              }}
            ></div>
            <div className='mt-10 text-start'>
              <a
                href='#'
                className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-4 col-start-8 col-end-12 overflow-x-hidden md:col-span-3 md:col-start-10'>
          <NextImage
            useSkeleton
            className='w-40 md:mt-[250px] md:w-[100%]'
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
