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
          className={`${featuredData?.title ? 'py-10 lg:py-20' : 'lg:-mt-10'} mx-auto `}
        >
          <div className={`mx-auto max-w-[1400px] px-3 lg:px-6 2xl:px-3 `}>
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
              {featuredData?.title}
            </h2>
            {featuredData?.description && (
              <div
                className='md:text-md mb-10 mt-5 text-center text-xs lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.description,
                }}
              ></div>
            )}
          </div>

          
          <div className='mx-auto max-w-[1500px]'>
            <div className=' flex flex-col items-center justify-center gap-4 px-5 md:mt-10 md:px-10  lg:mx-0 lg:mt-20 lg:flex-row '>
              <div className='flex flex-col items-start justify-center lg:w-1/2'>
                <div className='lg:w-full'>
                  <div
                    className='text-xs md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: featuredData?.rightText,
                    }}
                  ></div>
                </div>
              </div>
              <div className='mx-auto lg:w-1/2'>
                <NextImage
                  useSkeleton
                  className='flex w-64 items-end justify-end md:w-[100%] '
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
