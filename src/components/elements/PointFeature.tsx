import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function PointFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen pt-10 overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <div className=''>
        <div className='w-full'>
          <div className='grid grid-cols-12 items-center justify-center gap-4 md:gap-4 lg:mx-0 lg:max-w-none lg:gap-0'>
            <div className='col-span-12 px-5 md:col-span-12 md:px-5 lg:col-span-8 lg:col-start-2 lg:mt-20 lg:px-10'>
              <h2 className='px-5 text-center text-2xl md:text-center md:text-3xl lg:text-start lg:text-4xl'>
                {featuredData?.featureTitle}
              </h2>
              <div
                className='md:text-md mt-5 px-2 text-start text-xs md:text-center lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featureDescription,
                }}
              ></div>
              {featuredData?.featuredDivLeft?.map((item: any, i: number) => (
                <div className='mt-5 px-2 md:px-5' key={i}>
                  <h3 className='w-full text-xl leading-5 text-sky-950 md:w-full md:text-xl lg:w-[500px] lg:text-2xl'>
                    {item?.title}
                  </h3>
                  <div
                    className='text-xs lg:w-[600px] lg:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className='col-span-4 col-start-8 col-end-12  md:col-start-10 lg:col-span-4 lg:col-start-10'>
              <NextImage
                useSkeleton
                className='md:w-100 w-40 lg:w-[100%]'
                width='600'
                height='200'
                src={featuredData?.imageRight?.sourceUrl}
                alt={featuredData?.imageRight?.altText}
              />
            </div>
          </div>

          <div className='mt-10 grid grid-cols-12 items-center justify-center gap-4 lg:mx-0 lg:mt-20 lg:max-w-none'>
            <div className='cols-end-12 lg:col-span-5 lg:col-start-1 lg:col-end-5'>
              <NextImage
                useSkeleton
                className='w-100 w-40 lg:w-[100%]'
                src={featuredData?.imageLeft?.sourceUrl}
                alt={featuredData?.imageLeft?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className='col-span-12 ml-5 mt-5 pr-5 lg:col-span-4 lg:col-start-7'>
              <div className='mx-auto lg:mt-20 lg:px-10'>
                <div className='mt-5 pb-10 md:px-5'>
                  {featuredData?.featuredDivRight?.map(
                    (item: any, i: number) => (
                      <div className='container mt-5' key={i}>
                        <h3 className='w-full text-xl leading-5 text-sky-950 lg:w-[500px] lg:text-2xl'>
                          {item?.title}
                        </h3>
                        <div
                          className='md:text-md text-xs md:w-full lg:w-[500px] lg:text-lg 2xl:w-[600px]'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                    )
                  )}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
