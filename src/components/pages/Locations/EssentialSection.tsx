import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function EssentialSection(props: MyProps) {
  const { featuredData } = props;
  console.log(featuredData);
  return (
    <div
      className='min-w-screen relative w-full bg-auto bg-center py-10 duration-500 group-hover:rotate-3 group-hover:scale-125'
      style={{
        backgroundImage: `url(${featuredData?.backgroundImage?.sourceUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section>
        <div className='container mx-auto py-10 md:py-20'>
          <div className=' flex w-full flex-col items-center justify-center text-center md:px-10'>
            <h2 className='w-full text-center text-xl leading-7 md:text-2xl lg:text-3xl'>
              {' '}
              <span className='mb-5 text-2xl leading-5 md:text-3xl lg:text-5xl'>
                {featuredData?.featureTitle}
              </span>{' '}
              <br />
              {featuredData?.featureSubtitle}
            </h2>
            <div
              className='mt-10 text-center text-xs  md:w-[1000px] md:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.featureDescription,
              }}
            ></div>
          </div>
          <div className='mx-auto mt-20 grid w-full grid-cols-1 items-center justify-center  gap-4 md:mt-40 md:grid-cols-2 lg:grid-cols-3'>
            {featuredData?.featuredData?.map((item: any, i: number) => (
              <div
                key={i}
                className='max-w-md border border-gray-200 bg-white shadow dark:border-gray-700'
              >
                <div className='cover relative h-60 w-[100%]'>
                  <NextImage
                    layout='fill'
                    className='cover'
                    src={item?.image?.sourceUrl}
                    alt={item?.image?.altText}
                  />
                </div>
                <div className='p-5'>
                  <h3 className='mb-2 text-center text-2xl font-bold tracking-tight text-gray-900'>
                    {item?.title}
                  </h3>
                  <div
                    className='mb-3 font-normal text-gray-700 dark:text-gray-400'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='container mx-auto mt-5 pb-10 text-center md:mt-20 lg:pb-20'>
        <div
          className='mt-10 text-center text-xs md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.bottomDescription,
          }}
        ></div>
      </div>
    </div>
  );
}
