import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function CommercialServiceFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <>
      <section className='max-w-screen mt-10 bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat lg:hidden'>
        <div className='flex flex-col items-center justify-center gap-4'>
          {featuredData?.featuredDivLeft?.map(
            (item: any, i: number, { length }: { length: number }) => (
              <li key={i} className='mb-10 list-none text-left'>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='relative hidden h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#061632] md:mr-[-40px] md:flex'>
                      {item?.tabNo}
                    </div>
                  </div>
                  <div
                    className={
                      i == 0
                        ? 'w-full bg-[#061632] py-10 pr-3 text-gray-200 shadow md:h-[200px] md:rounded-tl-3xl md:pl-14 lg:h-[300px]'
                        : i === length - 1
                        ? 'w-full bg-[#061632] py-10 pr-3 text-gray-200 shadow md:h-[200px] md:rounded-bl-3xl md:pl-14 lg:h-[300px]'
                        : 'w-full bg-[#061632] py-10 pr-3 text-gray-200 shadow md:h-[200px] md:pl-14 lg:h-[300px]'
                    }
                  >
                    <h3 className='text-center text-lg font-semibold leading-6 md:text-start'>
                      {item?.title}
                    </h3>
                    <div
                      className='md:text-md mt-5 text-center text-xs md:text-start lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                  <div className='cover relative col-span-12 mx-auto h-[200px] w-full md:w-2/4 lg:h-[300px] xl:w-full'>
                    <NextImage
                      useSkeleton
                      className='cover'
                      layout='fill'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                    />
                  </div>
                </div>
              </li>
            )
          )}
        </div>

        <div className='lg:mt-20'>
          <div className='mt-5 pb-10'>
            {featuredData?.featuredDivRight?.map(
              (item: any, i: number, { length }: { length: number }) => (
                <li key={i} className='mb-10 list-none text-left'>
                  <div className='flex flex-col items-center justify-center md:flex-row'>
                    <div className='cover relative col-span-12 mx-auto hidden h-[200px] w-full md:block md:w-2/4 lg:h-[300px] xl:w-full'>
                      <NextImage
                        useSkeleton
                        src={item?.image?.sourceUrl}
                        alt={item?.image?.altText}
                        className='cover'
                        layout='fill'
                      />
                    </div>
                    <div
                      className={
                        i == 0
                          ? 'w-full bg-[#061632] py-10 pl-3 text-gray-200 shadow md:h-[200px] md:rounded-tr-3xl md:pr-14 lg:h-[300px]'
                          : i === length - 1
                          ? 'w-full bg-[#061632] py-10 pl-3 text-gray-200 shadow md:h-[200px] md:rounded-br-3xl md:pr-14 lg:h-[300px]'
                          : 'w-full bg-[#061632] py-10 pl-3 text-gray-200 shadow md:h-[200px] md:pr-14 lg:h-[300px]'
                      }
                    >
                      <h3 className='text-center text-lg font-semibold leading-6 md:text-end'>
                        {item?.title}
                      </h3>
                      <div
                        className='md:text-md mt-5 text-center text-xs md:text-end lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>

                    <div className='hidden flex-col items-center justify-center md:flex'>
                      <div className='relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#061632] md:ml-[-40px]'>
                        {item?.tabNo}
                      </div>
                    </div>
                    <div className='cover relative col-span-12 mx-auto h-[200px] w-full md:hidden md:w-2/4 lg:h-[300px] xl:w-full'>
                      <NextImage
                        useSkeleton
                        src={item?.image?.sourceUrl}
                        alt={item?.image?.altText}
                        className='cover'
                        layout='fill'
                      />
                    </div>
                  </div>
                </li>
              )
            )}
          </div>
        </div>
      </section>
      <section className='max-w-screen mt-10 hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat lg:block'>
        <div className='grid grid-cols-12 items-center justify-center gap-4 md:gap-4 lg:mx-0 lg:max-w-none lg:gap-0 xl:gap-5 2xl:gap-0'>
          <div className='xl:col-start-0 col-span-12 px-5 md:col-span-12 md:px-5 lg:mt-20 lg:px-2 xl:col-span-6 xl:px-0 2xl:col-span-7 2xl:col-start-2 2xl:px-10'>
            {featuredData?.featuredDivLeft?.map(
              (item: any, i: number, { length }: { length: number }) => (
                <li key={i} className='mb-10 list-none text-left'>
                  <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='relative mr-[-40px] flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#061632]'>
                        {item?.tabNo}
                      </div>
                    </div>
                    <div
                      className={
                        i == 0
                          ? 'w-full rounded-tl-3xl bg-[#061632] py-10 pl-14 pr-3 text-gray-200 shadow'
                          : i === length - 1
                          ? 'w-full rounded-bl-3xl bg-[#061632] py-10 pl-14 pr-3 text-gray-200 shadow'
                          : 'w-full bg-[#061632] py-10 pl-14 pr-3 text-gray-200 shadow'
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
          <div className='cover relative col-span-12 mx-auto mt-5 h-[400px] w-11/12 md:h-[500px] md:w-3/4 lg:h-[850px] xl:col-span-6 xl:col-start-7 xl:h-[90%] xl:w-full 2xl:col-span-4'>
            <NextImage
              useSkeleton
              className='cover'
              layout='fill'
              src={featuredData?.featuredRightImage?.sourceUrl}
              alt={featuredData?.featuredRightImage?.altText}
            />
          </div>
        </div>

        <div className='lg:max-w-screen mt-10 grid grid-cols-12 items-center justify-center lg:mx-0 lg:mt-20 lg:gap-5'>
          <div className='cover relative col-span-12 mx-auto mt-5 hidden h-[400px] w-11/12 md:h-[500px] md:w-3/4 lg:h-[600px] xl:col-span-6 xl:col-end-7 xl:block xl:h-[90%] xl:w-[100%] 2xl:col-span-4 2xl:col-end-5'>
            <NextImage
              useSkeleton
              src={featuredData?.featuredLeftImage?.sourceUrl}
              alt={featuredData?.featuredLeftImage?.altText}
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
                              ? 'w-full rounded-tr-3xl bg-[#061632] py-10 pl-3 pr-14 text-gray-200 shadow'
                              : i === length - 1
                              ? 'w-full rounded-br-3xl bg-[#061632] py-10 pl-3 pr-14 text-gray-200 shadow'
                              : 'w-full bg-[#061632] py-10 pl-3 pr-14 text-gray-200 shadow'
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
                          <div className='relative ml-[-40px] flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#061632]'>
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
          <div className='cover relative col-span-12 mx-auto mt-5 block h-[400px] w-11/12 md:h-[500px] md:w-3/4 lg:h-[850px] xl:col-span-6 xl:col-end-7 xl:hidden xl:h-[85%] xl:w-[100%] 2xl:col-span-4 2xl:col-end-5'>
            <NextImage
              useSkeleton
              src={featuredData?.featuredLeftImage?.sourceUrl}
              alt={featuredData?.featuredLeftImage?.altText}
              className='cover'
              layout='fill'
            />
          </div>
        </div>
      </section>
    </>
  );
}
