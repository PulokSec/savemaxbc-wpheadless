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
      {/* <div className='mt-5 grid grid-cols-12 gap-4 xl:mx-0 xl:-mt-10 xl:max-w-none xl:gap-0 2xl:-mt-10'>
        <div className='container col-span-12 mx-auto px-5 md:col-span-12 md:px-10 xl:col-span-5 xl:col-start-2 xl:mt-20'>
          <h2 className='text-start text-2xl md:text-3xl xl:text-4xl'>
            {aboutData?.aboutTitle}
          </h2>
          <div className='w-full'>
            <div
              className='mt-5 text-start text-xs xl:text-xl'
              dangerouslySetInnerHTML={{
                __html: aboutData?.aboutDescription,
              }}
            ></div>
            <div className='mt-10 py-10 text-start'>
              <a
                href='/about-us'
                className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className='relative col-span-4 col-start-8 col-end-12 md:col-span-4 md:col-start-10 md:col-end-12 xl:col-span-4 xl:col-start-9'>
          <NextImage
            useSkeleton
            className='md:w-100 w-40 xl:mt-[400px] xl:h-[100%] xl:w-[100%] 2xl:mt-[200px]'
            src={aboutData?.aboutImage?.sourceUrl}
            width='500'
            height='400'
            alt={aboutData?.aboutImage?.altText}
          />
        </div>
      </div> */}
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
            src={aboutData?.aboutImage?.sourceUrl}
            width={500}
            height={500}
            alt={aboutData?.aboutImage?.altText}
          />
          <Image
            className='md:hidden'
            src={aboutData?.aboutImage?.sourceUrl}
            width={250}
            height={250}
            alt={aboutData?.aboutImage?.altText}
          />
        </div>
      </div>
    </div>
  );
}
