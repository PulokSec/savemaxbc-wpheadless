import React from 'react';

import NextImage from '@/components/NextImage';

type Props = {
  featuredData: any;
};

const LeftImageRightText = (props: Props) => {
  const { featuredData } = props;
  return (
    <div className='max-w-screen overflow-x-hidden '>
      <section>
        <div className='mx-auto py-10 lg:py-20'>
          <div className='mx-auto max-w-[1400px] px-3 lg:px-6 2xl:px-3'>
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
              {featuredData?.title}
            </h2>
            <div
              className='md:text-md mt-5 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.description,
              }}
            ></div>
          </div>
          
          <div className='mx-auto max-w-[1500px]'>
            <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-10 px-5 md:mt-20 md:px-10 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-4'>
              <div className='lg:w-1/2'>
                <NextImage
                  useSkeleton
                  className='w-64 md:w-[100%]'
                  src={featuredData?.leftImage?.sourceUrl}
                  alt={featuredData?.leftImage?.altText}
                  width='600'
                  height='200'
                />
              </div>
              <div className='flex flex-col items-end justify-end lg:w-1/2'>
                <div className='lg:w-full'>
                  <div
                    className='text-xs md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: featuredData?.rightText,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftImageRightText;
