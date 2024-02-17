import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function PointFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen overflow-x-hidden bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat pt-10'>
      <div className='mx-auto max-w-[1600px]'>
        <div className='mt-10 flex flex-col items-center justify-center px-5 md:px-10 lg:mt-20'>
          <div className=' flex flex-col items-center justify-center gap-4 lg:flex-row '>
            <div className='lg:w-1/2'>
              <h2 className='px-2 text-start text-2xl md:text-3xl lg:text-start lg:text-4xl'>
                {featuredData?.featureTitle}
              </h2>
              <div
                className='md:text-md mt-5 px-2 text-justify text-xs lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featureDescription,
                }}
              ></div>
              {featuredData?.featuredDivLeft?.map((item: any, i: number) => (
                <div className='mt-5 px-2' key={i}>
                  <h3 className='w-full text-xl leading-5 text-[#061632] md:w-full md:text-xl lg:text-2xl'>
                    {item?.title}
                  </h3>
                  <div
                    className='text-justify text-xs lg:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className='mx-auto lg:w-1/2'>
              <NextImage
                useSkeleton
                className='flex w-64 items-end justify-end md:w-[100%] '
                src={featuredData?.imageRight?.node?.sourceUrl}
                alt={featuredData?.imageRight?.node?.altText}
                width='600'
                height='200'
              />
            </div>
          </div>

          <div className='mx-auto w-full'>
            <div className='mx-auto mt-10 flex flex-col-reverse items-center justify-center gap-4 lg:mt-20 lg:flex-row lg:gap-4'>
              <div className='lg:w-1/2 '>
                <NextImage
                  useSkeleton
                  className='w-64 md:w-[100%]'
                  src={featuredData?.imageLeft?.node?.sourceUrl}
                  alt={featuredData?.imageLeft?.node?.altText}
                  width='600'
                  height='200'
                />
              </div>
              <div className='flex flex-col items-end justify-end md:mb-20 lg:mb-0 lg:w-1/2'>
                <div className='lg:w-full'>
                  {featuredData?.featuredDivRight?.map(
                    (item: any, i: number) => (
                      <div className='container mt-5' key={i}>
                        <h3 className='text-xl leading-5 text-[#061632] lg:text-2xl'>
                          {item?.title}
                        </h3>
                        <div
                          className='md:text-md text-justify text-xs lg:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                    )
                  )}
                  <div className='mt-2 py-10 text-start'>
                    <a
                      href='/properties-listing'
                      className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
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
