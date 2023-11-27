import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function FeatureSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='mx-auto py-10 lg:py-20'>
          <div>
            <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
              {featuredData?.featureTitle}
            </h2>
            <div
              className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.featureDescription,
              }}
            ></div>
          </div>
          <div className='w-full lg:-mt-24 xl:-mt-16 2xl:-mt-4'>
            {featuredData?.featuredDiv?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-auto lg:mx-0 lg:mt-20 lg:max-w-none lg:gap-0'
                >
                  <div className='col-span-12 ml-5 md:col-span-12 md:ml-5 lg:col-span-5 lg:col-start-2 lg:mt-20 2xl:col-start-2'>
                    <div className=''>
                      <div
                        className='md:text-md mt-5 text-xs lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='col-span-4 col-start-8 col-end-12 md:col-span-3 md:col-start-11 md:col-end-12 lg:col-span-5 lg:col-start-8 2xl:col-start-8'>
                    <NextImage
                      useSkeleton
                      className='md:w-100 w-40 lg:w-[100%]'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width='600'
                      height='200'
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-0 md:mt-10 lg:mx-0 lg:mt-20 lg:max-w-none'
                >
                  <div className='cols-end-12 md:col-start-1 lg:col-span-7 lg:col-start-2 lg:col-end-7 lg:-ml-10 2xl:col-start-2 2xl:col-end-7 2xl:ml-10'>
                    <NextImage
                      useSkeleton
                      className='md:w-100 w-40 lg:w-[100%]'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width='600'
                      height='200'
                    />
                  </div>
                  <div className='col-span-12 ml-5 mt-5 pr-5 md:ml-14 lg:col-span-5 lg:col-start-7'>
                    <div className='lg:w-full'>
                      <div
                        className='mt-5 text-xs lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>
                    <div className='mt-2 py-10 text-start'>
                      <a
                        href='/services'
                        className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                      >
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
