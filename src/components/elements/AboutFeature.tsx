import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featureSection: any;
};
export default function AboutFeature(props: MyProps) {
  const { featureSection } = props;
  return (
    <div className='max-w-screen'>
      <section>
        <div className='py-10 md:py-20'>
          <div className=' flex w-full flex-col items-center justify-center text-center md:px-10'>
            <h1 className='w-full text-center lg:w-[1000px]'>
              <span className='text-2xl leading-5 text-[#525659] md:text-5xl'>
                {featureSection?.topHead}
              </span>
            </h1>
            <h1 className='mt-2 px-2 text-xl md:text-3xl'>
              {featureSection?.subHead}
            </h1>
          </div>
          <div className='mx-auto -mt-10 w-full md:mt-40 lg:mt-0'>
            {featureSection?.featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  className='mt-20 bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/grey-bg.png")] bg-cover bg-no-repeat px-5 md:mt-60 md:px-20'
                  key={i}
                >
                  <div className='hidden md:block'>
                    <div className='mx-auto flex flex-col items-center justify-between md:flex-row lg:mx-0 lg:max-w-none'>
                      <div className='mt-[-15%] md:mt-[-8%]'>
                        <NextImage
                          useSkeleton
                          className='cover w-50 md:w-[400px]'
                          width='400'
                          height='600'
                          src={item?.aboutImage?.sourceUrl}
                          alt={item?.aboutImage?.altText}
                        />
                      </div>
                      <div className='mt-5 flex flex-col items-end md:mt-0 md:pr-5'>
                        <h2 className='w-full text-end text-2xl font-bold leading-5 text-[#525659]  md:text-5xl '>
                          {item?.name}
                        </h2>
                        <p className='mt-5 text-end text-xl font-bold text-sky-950 md:w-[500px] md:text-3xl'>
                          {item?.designation}
                        </p>
                        <div
                          className='mt-10 text-xs md:text-2xl'
                          dangerouslySetInnerHTML={{
                            __html: item?.subDesignation,
                          }}
                        ></div>
                        <div
                          className='mt-10 text-justify text-xs md:ml-10 md:text-lg xl:ml-20'
                          dangerouslySetInnerHTML={{
                            __html: item?.shortDescription,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div className='mx-auto flex flex-col items-center justify-between md:flex-row lg:mx-0 lg:max-w-none'>
                      <div className='mt-5 flex flex-col items-end md:mt-0 md:pr-5'>
                        <h2 className='w-full text-end text-2xl font-bold leading-5 text-[#525659]  md:text-5xl '>
                          {item?.name}
                        </h2>
                        <p className='mt-5 text-end text-xl font-bold text-sky-950 md:w-[500px] md:text-3xl'>
                          {item?.designation}
                        </p>
                        <div
                          className='mt-10 text-xs md:text-2xl'
                          dangerouslySetInnerHTML={{
                            __html: item?.subDesignation,
                          }}
                        ></div>
                        <div
                          className='mb-2 mt-10 text-justify text-xs md:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.shortDescription,
                          }}
                        ></div>
                      </div>
                      <div className=''>
                        <NextImage
                          useSkeleton
                          className='cover w-50 md:w-[400px]'
                          width='400'
                          height='600'
                          src={item?.aboutImage?.sourceUrl}
                          alt={item?.aboutImage?.altText}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className='mt-10 pb-20 text-justify text-xs md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              ) : (
                <div className='mt-10 md:mt-20 md:px-10 md:py-10' key={i}>
                  <div className='hidden md:block'>
                    <div className='mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10 lg:mx-0 lg:max-w-none'>
                      <div className='flex flex-col items-start'>
                        <h2 className='w-full text-2xl font-bold leading-5  text-[#525659] md:text-5xl'>
                          {item?.name}
                        </h2>
                        <p className='mt-5 text-xl font-bold text-sky-950 md:w-[500px] md:text-3xl'>
                          {item?.designation}
                        </p>
                        <div
                          className='mt-10 text-xs md:text-2xl'
                          dangerouslySetInnerHTML={{
                            __html: item?.subDesignation,
                          }}
                        ></div>
                        <div
                          className='mt-10 text-justify text-xs md:mr-10 md:text-lg xl:mr-20'
                          dangerouslySetInnerHTML={{
                            __html: item?.shortDescription,
                          }}
                        ></div>
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <NextImage
                          useSkeleton
                          className='cover w-50 md:w-[400px]'
                          width='400'
                          height='600'
                          src={item?.aboutImage?.sourceUrl}
                          alt={item?.aboutImage?.altText}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div className='mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10 lg:mx-0 lg:max-w-none'>
                      <div className='flex flex-col items-start'>
                        <h2 className='w-full text-2xl font-bold leading-5  text-[#525659] md:text-5xl'>
                          {item?.name}
                        </h2>
                        <p className='mt-5 text-xl font-bold text-sky-950 md:w-[500px] md:text-3xl'>
                          {item?.designation}
                        </p>
                        <div
                          className='mt-10 text-xs md:text-2xl'
                          dangerouslySetInnerHTML={{
                            __html: item?.subDesignation,
                          }}
                        ></div>
                        <div
                          className='mb-2 mt-10 text-justify text-xs md:text-lg'
                          dangerouslySetInnerHTML={{
                            __html: item?.shortDescription,
                          }}
                        ></div>
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <NextImage
                          useSkeleton
                          className='cover w-50 md:w-[400px]'
                          width='400'
                          height='600'
                          src={item?.aboutImage?.sourceUrl}
                          alt={item?.aboutImage?.altText}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className='mt-10 px-5 text-justify text-xs md:px-10 md:text-lg'
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
