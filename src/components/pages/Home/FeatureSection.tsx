import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function FeatureSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("http://savemaxheadlessdemo-com.us.webmyway.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='py-10 md:py-20'>
          <div className='mx-auto w-full'>
            {featuredData?.featuredDiv?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 md:gap-0 lg:mx-0 lg:max-w-none'
                >
                  <div className='col-span-12 ml-5 md:col-span-4 md:col-start-1 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <h2 className='w-full text-2xl md:w-[500px] md:text-4xl'>
                        {item?.title}
                      </h2>
                      <div
                        className='mt-5 text-xs md:w-[500px] md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className='mt-10 text-start'>
                        <a
                          href='#'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-4 col-start-8 col-end-12  md:col-span-4 md:col-start-10'>
                    <NextImage
                      useSkeleton
                      className='w-40 md:w-[100%]'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width='500'
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
                      className='w-40 md:w-[400px]'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                      width='500'
                      height='200'
                    />
                  </div>
                  <div className='col-span-12 ml-5 mt-5 pr-5 md:col-span-4 md:col-start-7'>
                    <div className='lg:w-full'>
                      <h2 className='w-full text-2xl md:w-[500px] md:text-4xl'>
                        {item?.title}
                      </h2>
                      <div
                        className='mt-5 text-xs md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className='mt-10 text-start'>
                        <a
                          href='#'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                        >
                          See More
                        </a>
                      </div>
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
