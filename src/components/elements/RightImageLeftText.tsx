import React from 'react';

import NextImage from '@/components/NextImage';

type Props = {
  featuredData: any;
};

const RightImageLeftText = (props: Props) => {
  const { featuredData } = props;
  return (
    <div className='max-w-screen overflow-x-hidden '>
      <section>
        <div
          className={`${
            featuredData?.title ? 'py-10 lg:py-20' : ''
          } mx-auto `}
        >
          <div className={`mx-auto max-w-[1400px] `}>
            <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
              {featuredData?.title}
            </h1>
            <div
              className='md:text-md mb-28 mt-5 px-10 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.description,
              }}
            ></div>
          </div>

          <div className='w-full lg:-mt-56 xl:-mt-48 2xl:-mt-36'>
            <div className='mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-auto lg:mx-0 lg:mt-20 lg:max-w-none lg:gap-0'>
              <div className='col-span-12 ml-5 md:col-span-12 md:ml-5 lg:col-span-5 lg:col-start-1 lg:mt-20 lg:pl-10 2xl:col-start-2'>
                <div className=''>
                  <div
                    className='md:text-md mt-5 text-xs lg:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: featuredData?.rightText,
                    }}
                  ></div>
                </div>
              </div>
              <div className='col-span-4 col-start-8 col-end-12 md:col-span-3 md:col-start-11 md:col-end-12 lg:col-span-5 lg:col-start-7 2xl:col-start-8'>
                <NextImage
                  useSkeleton
                  className='md:w-100 w-40 lg:w-[100%]'
                  src={featuredData?.leftImage?.sourceUrl}
                  alt={featuredData?.leftImage?.altText}
                  width='600'
                  height='200'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightImageLeftText;
