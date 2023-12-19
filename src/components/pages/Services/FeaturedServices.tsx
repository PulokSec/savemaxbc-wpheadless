import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
  featuredTitle: any;
};

export default function FeaturedServices(props: MyProps) {
  const { featuredData, featuredTitle } = props;
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='py-10 md:py-20'>
          <h1
            className='text-center text-lg md:text-5xl'
            dangerouslySetInnerHTML={{
              __html: featuredTitle,
            }}
          ></h1>
          <div className='mx-auto w-full'>
            {featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-between gap-4 md:mt-20 md:gap-4 lg:mx-0 lg:max-w-none'
                >
                  <div className='ml-5 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <h2 className='w-full text-2xl leading-8 text-[#061632] md:w-[500px] md:text-5xl'>
                        <span className='text-[#515151]'>
                          {item?.title?.split(/ (.*)/)[0]}
                        </span>{' '}
                        {item?.title?.split(/ (.*)/)[1]}
                      </h2>
                      <div
                        className='mt-5 text-xs md:w-[600px] md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className='mt-10 text-start'>
                        <a
                          href='/properties-listing'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
                        >
                          See More
                        </a>
                      </div>
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
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-between gap-4 md:mt-20 lg:mx-0 lg:max-w-none'
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
                    <div className='lg:w-full'>
                      <h2 className='w-full text-2xl leading-8 text-[#061632] md:w-[500px] md:text-5xl'>
                        <span className='text-[#515151]'>
                          {item?.title?.split(/ (.*)/)[0]}
                        </span>{' '}
                        {item?.title?.split(/ (.*)/)[1]}
                      </h2>
                      <div
                        className='mt-5 text-xs md:w-[600px] md:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className='mt-10 text-start'>
                        <a
                          href='/properties-listing'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
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
