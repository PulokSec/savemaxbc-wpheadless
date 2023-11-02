import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function PointFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <div className=''>
        <div className='w-full'>
          <div className='grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:gap-0 lg:mx-0 lg:max-w-none'>
            <div className='col-span-12 px-5 md:col-span-8 md:col-start-1 md:px-10 lg:mt-20'>
              <h2 className='px-5 text-center text-2xl md:text-start md:text-4xl'>
                {featuredData?.featureTitle}
              </h2>
              <div
                className='mt-5 px-2 text-start text-xs md:text-lg'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featureDescription,
                }}
              ></div>
              {featuredData?.featuredDivLeft?.map((item: any, i: number) => (
                <div className='container mt-5 px-2' key={i}>
                  <h3 className='w-full text-xl leading-5 text-sky-950 md:w-[500px] md:text-2xl'>
                    {item?.title}
                  </h3>
                  <div
                    className='text-xs md:w-[600px] md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className='col-span-4 col-start-8 col-end-12  md:col-span-4 md:col-start-10'>
              <NextImage
                useSkeleton
                className='w-40 md:w-[100%]'
                width='600'
                height='200'
                src={featuredData?.imageRight?.sourceUrl}
                alt={featuredData?.imageRight?.altText}
              />
            </div>
          </div>

          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 lg:mx-0 lg:max-w-none'>
            <div className='cols-end-12 md:col-span-5 md:col-start-1 md:col-end-5'>
              <NextImage
                useSkeleton
                className='w-40 md:w-[100%]'
                src={featuredData?.imageLeft?.sourceUrl}
                alt={featuredData?.imageLeft?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className='col-span-12 ml-5 mt-5 pr-5 md:col-span-4 md:col-start-7'>
              <div className='mx-auto md:px-10 lg:mt-20'>
                <div className='mt-5'>
                  {featuredData?.featuredDivRight?.map(
                    (item: any, i: number) => (
                      <div className='container mt-5' key={i}>
                        <h3 className='w-full text-xl leading-5 text-sky-950 md:w-[500px] md:text-2xl'>
                          {item?.title}
                        </h3>
                        <div
                          className='text-xs md:w-[600px] md:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
