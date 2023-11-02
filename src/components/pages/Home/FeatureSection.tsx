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
        <div className='mx-auto py-10 md:py-20'>
          <h1 className='px-10 text-center text-2xl md:text-4xl'>
            {featuredData?.featureTitle}
          </h1>
          <div
            className='mt-5 px-10 text-center text-xs  md:text-lg'
            dangerouslySetInnerHTML={{
              __html: featuredData?.featureDescription,
            }}
          ></div>
          <div className='w-full'>
            {featuredData?.featuredDiv?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 md:gap-0 lg:mx-0 lg:max-w-none'
                >
                  <div className='col-span-12 ml-5 md:col-span-5 md:col-start-2 md:pl-10  lg:mt-20'>
                    <div className=''>
                      <div
                        className='mt-5 text-xs  md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='col-span-4 col-start-8 col-end-12  md:col-span-5 md:col-start-10'>
                    <NextImage
                      useSkeleton
                      className='w-40 md:w-[100%]'
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
                  className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 lg:mx-0 lg:max-w-none'
                >
                  <div className='cols-end-12 md:col-span-5 md:col-start-1 md:col-end-5'>
                    <NextImage
                      useSkeleton
                      className='w-40 md:w-[100%]'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width='500'
                      height='200'
                    />
                  </div>
                  <div className='col-span-12 ml-5 mt-5 pr-5 md:col-span-5 md:col-start-7'>
                    <div className='lg:w-full'>
                      <div
                        className='mt-5 text-xs md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
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
