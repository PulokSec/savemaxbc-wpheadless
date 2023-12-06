import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function ServicePointFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen mt-10 bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat'>
      <div className='grid grid-cols-12 items-center justify-center gap-4 md:gap-4 lg:mx-0 lg:max-w-none lg:gap-0 xl:gap-5 2xl:gap-0'>
        <div className='xl:col-start-0 col-span-12 px-5 md:col-span-12 md:px-5 lg:mt-20 lg:px-2 xl:col-span-6 xl:px-0 2xl:col-span-7 2xl:col-start-2 2xl:px-10'>
          {featuredData?.featuredDivLeft?.map(
            (item: any, i: number, { length }: { length: number }) => (
              <li key={i} className='mb-10 list-none text-left'>
                <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='relative mr-[-40px] flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#051532]'>
                      {item?.tabNo}
                    </div>
                  </div>
                  <div
                    className={
                      i == 0
                        ? 'w-full rounded-tl-3xl bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
                        : i === length - 1
                        ? 'w-full rounded-bl-3xl bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
                        : 'w-full bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
                    }
                  >
                    <h3 className='text-lg font-semibold leading-6'>
                      {item?.title}
                    </h3>
                    <div
                      className='md:text-md mt-5 text-start text-xs lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            )
          )}
        </div>
        <div className='cover relative col-span-12 mx-auto mt-5 h-72 w-11/12 md:h-[500px] md:w-3/4 lg:h-[550px] xl:col-span-6 xl:col-start-7 xl:h-[85%] xl:w-full 2xl:col-span-4'>
          <NextImage
            useSkeleton
            className='cover'
            layout='fill'
            src={featuredData?.featuredImageRight?.sourceUrl}
            alt={featuredData?.featuredImageRight?.altText}
          />
        </div>
      </div>

      <div className='lg:max-w-screen mt-10 grid grid-cols-12 items-center justify-center lg:mx-0 lg:mt-20 lg:gap-5'>
        <div className='relative col-span-12 mx-auto mt-5 h-72 w-11/12 md:h-[500px] md:w-3/4 lg:h-[550px] xl:col-span-6 xl:col-end-7 xl:h-[85%] xl:w-[100%] 2xl:col-span-4 2xl:col-end-5'>
          <NextImage
            useSkeleton
            src={featuredData?.featuredImageLeft?.sourceUrl}
            alt={featuredData?.featuredImageLeft?.altText}
            className='cover'
            layout='fill'
          />
        </div>
        <div className='col-span-12 mt-5 px-5 md:px-5 xl:col-span-6 xl:col-start-7 xl:px-0 2xl:col-span-7 2xl:col-start-5 2xl:px-5'>
          <div className='lg:mt-20'>
            <div className='mt-5 pb-10'>
              {featuredData?.featuredDivRight?.map(
                (item: any, i: number, { length }: { length: number }) => (
                  <li key={i} className='mb-10 list-none text-left'>
                    <div className='flex items-center justify-center'>
                      <div
                        className={
                          i == 0
                            ? 'w-full rounded-tr-3xl bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
                            : i === length - 1
                            ? 'w-full rounded-br-3xl bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
                            : 'w-full bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
                        }
                      >
                        <h3 className='text-end text-lg font-semibold leading-6'>
                          {item?.title}
                        </h3>
                        <div
                          className='md:text-md mt-5 text-end text-xs lg:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <div className='relative ml-[-40px] flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#051532]'>
                          {item?.tabNo}
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
