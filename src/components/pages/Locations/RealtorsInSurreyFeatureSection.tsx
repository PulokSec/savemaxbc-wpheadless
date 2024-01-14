import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function RealtorsInSurreyFeatureSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='mx-auto py-10 lg:py-20'>
          <div className='mx-auto max-w-[1400px] px-3 pb-6 lg:px-6 lg:pb-0 2xl:px-3'>
            <h2 className=' text-center text-2xl md:text-3xl lg:text-4xl'>
              {featuredData?.featureTitle}
            </h2>
            <div
              className='md:text-md mt-5 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.featureDescription,
              }}
            ></div>
          </div>
          <div className='w-full '>
            {featuredData?.featuredDiv?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div key={i} className='mx-auto max-w-[1500px]'>
                  <div className=' flex flex-col items-center justify-center gap-4 px-5 md:mt-10 md:px-10 lg:mx-0 lg:mt-20 lg:flex-row '>
                    <div className='flex flex-col items-start justify-center lg:w-1/2'>
                      <div className='lg:w-full'>
                        <div
                          className='text-xs md:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className='mx-auto lg:w-1/2'>
                      <NextImage
                        useSkeleton
                        className='flex w-64 items-end justify-end md:w-[100%] '
                        src={item?.image?.sourceUrl}
                        alt={item?.image?.altText}
                        width='600'
                        height='200'
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={i} className='mx-auto max-w-[1500px]'>
                  <div className='mx-auto mt-10 flex flex-col-reverse items-center justify-center gap-4 px-5 md:mt-20 md:px-10 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-4'>
                    <div className='lg:w-1/2'>
                      <NextImage
                        useSkeleton
                        className='w-64 md:w-[100%]'
                        src={item?.image?.sourceUrl}
                        alt={item?.image?.altText}
                        width='600'
                        height='200'
                      />
                    </div>
                    <div className='flex flex-col items-end justify-end md:mb-20 lg:mb-0 lg:w-1/2'>
                      <div className='lg:w-full'>
                        <div
                          className='text-xs md:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                        <div className='mt-2 py-10 text-start'>
                          <a
                            href='/services'
                            className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          {featuredData?.bottomText && (
            <div
              dangerouslySetInnerHTML={{
                __html: featuredData?.bottomText,
              }}
              className='mx-auto max-w-[1500px] px-3 pt-10 text-center'
            ></div>
          )}
        </div>
      </section>
    </div>
  );
}
