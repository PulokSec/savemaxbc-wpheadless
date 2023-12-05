import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function CommercialServiceFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen mt-10 bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat'>
      <div className=''>
        <div className='flex flex-col items-center justify-center gap-4'>
          {featuredData?.featuredDivLeft?.map(
            (item: any, i: number, { length }: { length: number }) => (
              <li key={i} className='mb-10 list-none text-left'>
                <div className='flex items-center justify-center md:h-[200px] lg:h-[300px]'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='relative mr-[-40px] flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-semibold text-[#051532]'>
                      {item?.tabNo}
                    </div>
                  </div>
                  <div
                    className={
                      i == 0
                        ? 'h-full w-full rounded-tl-3xl bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
                        : i === length - 1
                        ? 'h-full w-full rounded-bl-3xl bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
                        : 'h-full w-full bg-[#051532] py-10 pl-14 pr-3 text-gray-200 shadow'
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
                  <div className='cover relative col-span-12 mx-auto h-full w-11/12 md:w-2/4 xl:w-full'>
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
      </div>

      <div className=''>
        <div className=''>
          <div className='lg:mt-20'>
            <div className='mt-5 pb-10'>
              {featuredData?.featuredDivRight?.map(
                (item: any, i: number, { length }: { length: number }) => (
                  <li key={i} className='mb-10 list-none text-left'>
                    <div className='flex items-center justify-center md:h-[200px] lg:h-[300px]'>
                      <div className='cover relative col-span-12 mx-auto h-full w-11/12 md:w-2/4 xl:w-full'>
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
                            ? 'h-full w-full rounded-tr-3xl bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
                            : i === length - 1
                            ? 'h-full w-full rounded-br-3xl bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
                            : 'h-full w-full bg-[#051532] py-10 pl-3 pr-14 text-gray-200 shadow'
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
