import Image from 'next/image';
import React from 'react';

type MyProps = {
  featuredData: any;
  featuredTitle: string;
  featuredSubtitle: string;
};

const NewFeatureSection = (props: MyProps) => {
  const { featuredData, featuredTitle, featuredSubtitle } = props;
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='mx-auto py-10 lg:py-20'>
          <h1 className='text-leading-3 text-center text-[22px] font-bold md:text-5xl'>
            {featuredTitle} <br />
            <span className='text-leading-3 text-lg mt-5 text-center text-[#585858] md:text-3xl'>
              {featuredSubtitle}
            </span>
          </h1>
          <div className='w-full'>
            {featuredData?.featuredDiv?.map((item: any, i: number) =>
              i % 2 === 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'
                >
                  <div className='mx-auto flex w-full flex-col items-start md:w-1/2 xl:w-4/6'>
                    <div className='mx-auto w-3/4 xl:w-3/5'>
                      <h2 className='text-xl text-[#061632] md:text-3xl xl:text-6xl'>
                        {item?.title}
                      </h2>
                      <div
                        className='md:text-md  mt-5  text-justify text-xs lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className=' mt-2  py-10 text-start'>
                        <a
                          href='/properties-listing'
                          className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
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
              ) : (
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
                      <h2 className='text-xl text-[#061632] md:text-3xl xl:text-6xl'>
                        {item?.title}
                      </h2>
                      <div
                        className='md:text-md  mt-5  text-justify text-xs lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                      <div className=' mt-2  py-10 text-start'>
                        <a
                          href='/properties-listing'
                          className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632]'
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
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFeatureSection;
