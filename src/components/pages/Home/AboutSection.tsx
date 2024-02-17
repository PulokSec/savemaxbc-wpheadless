import Image from 'next/image';
import React from 'react';

import '../../../styles/button.css';

type MyProps = {
  aboutData: any;
};
export default function AboutSection(props: MyProps) {
  const { aboutData } = props;
  return (
    <div className='mt-10 bg-white'>
      <div className='mx-auto my-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'>
        <div className='mx-auto flex w-full flex-col items-start md:w-1/2 xl:w-4/6'>
          <div className='mx-auto w-3/4 xl:w-3/5'>
            <h2 className='text-start text-2xl md:text-3xl xl:text-5xl'>
              {aboutData?.aboutTitle}
            </h2>
            <div className='w-full'>
              <div
                className='mt-5 text-start text-xs xl:text-xl'
                dangerouslySetInnerHTML={{
                  __html: aboutData?.aboutDescription,
                }}
              ></div>
              <div className='mt-2 py-10 text-start'>
                <a href='/about-us' className='custom-button'>
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full items-end justify-end md:w-1/2 xl:w-1/3'>
          <Image
            className='hidden md:block md:w-[500px] 2xl:w-[650px]'
            src={aboutData?.aboutImage?.node?.sourceUrl}
            width={500}
            height={500}
            alt={aboutData?.aboutImage?.node?.altText}
          />
          <Image
            className='md:hidden'
            src={aboutData?.aboutImage?.node?.sourceUrl}
            width={250}
            height={250}
            alt={aboutData?.aboutImage?.node?.altText}
          />
        </div>
      </div>
    </div>
  );
}
