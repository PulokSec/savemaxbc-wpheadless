import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function ChoiceSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div className='max-w-screen'>
      <section>
        <div className='py-10 md:py-10'>
          <div className='mx-auto w-full'>
            {featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex flex-col items-start justify-center gap-4 md:mt-20 md:gap-4 lg:mx-0 lg:max-w-none'
                >
                  <div className='ml-5 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <div className='flex items-center justify-center'>
                        <NextImage
                          useSkeleton
                          className='cover w-50 md:w-["100%"]'
                          width='250'
                          height='250'
                          src={item?.image?.sourceUrl}
                          alt={item?.image?.altText}
                        />
                        <h3 className='text-md w-full leading-5 text-sky-950 md:w-[500px] md:text-lg lg:text-3xl'>
                          <span className='text-[#525659]'>{item?.title}</span>{' '}
                        </h3>
                      </div>
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
                  className='mx-auto mt-10 flex flex-col items-end justify-end gap-4 md:mt-20 lg:mx-0 lg:max-w-none'
                >
                  <div className='flex items-center justify-center'>
                    <NextImage
                      useSkeleton
                      className='cover w-50 md:w-["100%"]'
                      width='250'
                      height='250'
                      src={item?.image?.sourceUrl}
                      alt={item?.image?.altText}
                    />
                    <h3 className='text-md w-full leading-5 text-sky-950 md:w-[500px] md:text-lg lg:text-3xl'>
                      <span className='text-[#525659]'>{item?.title}</span>{' '}
                    </h3>
                  </div>
                  <div className='mt-5 pr-5 md:pr-40'>
                    <div className='lg:w-full'>
                      <div
                        className='mt-5 text-xs md:w-[600px] md:text-lg'
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
