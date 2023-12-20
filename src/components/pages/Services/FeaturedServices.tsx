import Image from 'next/image';
import React from 'react';

type MyProps = {
  featuredData: any;
  featuredTitle: any;
};

export default function FeaturedServices(props: MyProps) {
  const { featuredData, featuredTitle } = props;
  return (
    <div className='max-w-screen mb-20 overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='py-10 md:py-20 '>
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
                  className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'
                >
                  <div className='hidden w-full items-start justify-start md:flex md:w-1/2 xl:w-2/5'>
                    <Image
                      className='md:w-[500px] 2xl:w-[650px]'
                      src={item?.image?.sourceUrl}
                      width={500}
                      height={500}
                      alt={item?.image?.altText}
                    />
                  </div>
                  <div className='mx-auto flex w-full flex-col items-end md:w-1/2 xl:w-3/5'>
                    <div className='mx-auto w-3/4 xl:w-2/3'>
                      <h2 className='w-full text-2xl leading-8 text-sky-950  md:text-5xl'>
                        <span className='text-[#525659]'>
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
                  <div className='flex w-full items-start justify-start md:hidden md:w-1/2 xl:w-2/5'>
                    <Image
                      className=''
                      src={item?.image?.sourceUrl}
                      width={250}
                      height={250}
                      alt={item?.image?.altText}
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'
                >
                  <div className='mx-auto flex w-full flex-col items-start md:w-1/2 xl:w-4/6'>
                    <div className='mx-auto w-3/4 xl:w-3/5'>
                      <h2 className='w-full text-2xl leading-8 text-sky-950  md:text-5xl'>
                        <span className='text-[#525659]'>
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
                  <div className='flex w-full items-end justify-end md:w-1/2 xl:w-1/3'>
                    <Image
                      className='hidden md:block md:w-[500px] 2xl:w-[650px]'
                      src={item?.image?.sourceUrl}
                      width={500}
                      height={500}
                      alt={item?.image?.altText}
                    />
                    <Image
                      className='md:hidden'
                      src={item?.image?.sourceUrl}
                      width={250}
                      height={250}
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
