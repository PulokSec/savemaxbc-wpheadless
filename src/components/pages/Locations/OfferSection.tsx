import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function OfferSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div className='max-w-screen'>
      <section>
        <div className='py-10 md:py-20'>
          <div className='mx-auto w-full'>
            {featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-center gap-5 md:mt-20 lg:mx-0 lg:max-w-none'
                >
                  <div className=''>
                    <NextImage
                      useSkeleton
                      className='cover w-50 md:w-["100%"]'
                      width='500'
                      height='200'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                    />
                  </div>
                  <div className='mt-5 pr-5 md:pr-40'>
                    <div className='ml-5 lg:ml-10 lg:w-full'>
                      <h3 className='text-md w-full leading-5 text-sky-950 md:w-[500px] md:text-lg lg:text-3xl'>
                        <span className='text-[#525659]'>{item?.title}</span>{' '}
                      </h3>
                      <div
                        className='mt-5 text-xs md:w-[600px] md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-center gap-4 md:mt-20 md:gap-4 lg:mx-0 lg:max-w-none'
                >
                  <div className='ml-5 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <h3 className='text-md w-full leading-5 text-sky-950 md:w-[500px] md:text-lg lg:text-3xl'>
                        <span className='text-[#525659]'>{item?.title}</span>{' '}
                      </h3>
                      <div
                        className='md:text-md mt-5 text-xs md:w-[600px] lg:text-lg '
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className=''>
                    <NextImage
                      useSkeleton
                      className='cover w-50 md:w-["100%"]'
                      width='500'
                      height='200'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                    />
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
