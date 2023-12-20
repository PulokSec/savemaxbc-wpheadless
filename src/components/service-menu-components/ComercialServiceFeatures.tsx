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
      </div>

      <div className=''>
        <div className=''>
          <div className='lg:mt-20'>
            <div className='mt-5 pb-10'>
              {featuredData?.featuredDivRight?.map(
                (item: any, i: number, { length }: { length: number }) => (
                  <li key={i} className='mb-10 list-none text-left'>
                    <div className='flex flex-col items-center justify-center md:flex-row'>
                      <div className='cover relative col-span-12 mx-auto h-[200px] w-full md:w-2/4 lg:h-[300px] xl:w-full'>
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
