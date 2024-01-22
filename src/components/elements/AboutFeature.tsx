'use client';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

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
            <p className='w-full text-center font-bold lg:w-[1000px]'>
              <span className='text-2xl leading-5 text-[#515151] md:text-5xl'>
                {featureSection?.topHead}
              </span>
            </p>
            <p className='mt-2 px-2 text-lg font-bold md:text-3xl'>
              {featureSection?.subHead}
            </p>
          </div>
          <div className='mx-auto -mt-10 w-full md:mt-40 lg:mt-0'>
            {featureSection?.featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  className='mt-20 bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/grey-bg.png")] bg-cover bg-no-repeat px-5 md:mt-20 md:px-10 lg:mt-60 lg:px-20'
                  key={i}
                >
                  <div className='hidden md:block'>
                    <div className='mx-auto flex flex-col items-center justify-between md:flex-row lg:mx-0 lg:max-w-none'>
                      <div className='mt-[-15%] md:mt-[-8%]'>
                        <Fade
                          direction='left'
                          delay={0.5}
                          fraction={0.5}
                          triggerOnce
                        >
                          <NextImage
                            useSkeleton
                            className='cover w-50 md:w-[300px] lg:w-[400px]'
                            width='400'
                            height='600'
                            src={item?.aboutImage?.sourceUrl}
                            alt={item?.aboutImage?.altText}
                          />
                        </Fade>
                      </div>
                      <div className='mt-5 flex flex-col items-end md:mt-0 lg:pr-5'>
                        <Fade
                          cascade
                          damping={0.2}
                          direction='right'
                          triggerOnce
                        >
                          <h2 className='w-full text-end text-2xl font-bold leading-5 text-[#515151] md:text-4xl lg:text-5xl '>
                            {item?.name}
                          </h2>
                          <p className='mt-5 text-end text-xl font-bold text-[#061632] md:text-2xl lg:w-[500px] lg:text-3xl'>
                            {item?.designation}
                          </p>
                          <div
                            className='mt-10 text-xs md:text-xl lg:text-2xl'
                            dangerouslySetInnerHTML={{
                              __html: item?.subDesignation,
                            }}
                          ></div>

                          <div
                            className='mt-10 text-justify text-xs md:hidden md:text-lg lg:ml-10 lg:block xl:ml-20'
                            dangerouslySetInnerHTML={{
                              __html: item?.shortDescription,
                            }}
                          ></div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div className='mx-auto flex flex-col items-center justify-between md:flex-row lg:mx-0 lg:max-w-none'>
                      <div className='mt-5 flex flex-col items-end md:mt-0 md:pr-5'>
                        <Fade
                          cascade
                          damping={0.2}
                          direction='right'
                          triggerOnce
                        >
                          <h2 className='w-full text-end text-2xl font-bold leading-5 text-[#515151]  md:text-5xl '>
                            {item?.name}
                          </h2>
                          <p className='mt-5 text-end text-xl font-bold text-[#061632] md:w-[500px] md:text-3xl'>
                            {item?.designation}
                          </p>
                          <div
                            className={`${
                              item?.subDesignation ? 'mt-10' : ''
                            }  text-xs md:text-2xl`}
                            dangerouslySetInnerHTML={{
                              __html: item?.subDesignation,
                            }}
                          ></div>
                        </Fade>
                        <div className='mt-10'>
                          <Fade
                            direction='left'
                            delay={0.5}
                            fraction={0.5}
                            triggerOnce
                          >
                            <NextImage
                              useSkeleton
                              className='cover w-50 md:w-[400px]'
                              width='400'
                              height='600'
                              src={item?.aboutImage?.sourceUrl}
                              alt={item?.aboutImage?.altText}
                            />
                          </Fade>
                        </div>
                        <Fade delay={500} triggerOnce>
                          <div
                            className={`${
                              item?.shortDescription ? 'mt-10' : ''
                            } mb-2 text-justify text-xs md:text-lg`}
                            dangerouslySetInnerHTML={{
                              __html: item?.shortDescription,
                            }}
                          ></div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <Fade delay={500} triggerOnce>
                    <div
                      className='mt-10 hidden text-justify text-xs md:block md:text-lg lg:ml-10 lg:hidden xl:ml-20'
                      dangerouslySetInnerHTML={{
                        __html: item?.shortDescription,
                      }}
                    ></div>
                    <div
                      className='mt-10 pb-20 text-justify text-xs md:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </Fade>
                </div>
              ) : (
                <div
                  className='mt-10 md:mt-0 md:px-10 md:py-10 lg:mt-20'
                  key={i}
                >
                  <div className='hidden md:block'>
                    <div className='mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-0 lg:mx-0 lg:max-w-none lg:px-10'>
                      <div className='flex flex-col items-start'>
                        <Fade
                          cascade
                          damping={0.2}
                          direction='left'
                          triggerOnce
                        >
                          <h2 className='w-full text-2xl font-bold leading-5 text-[#515151] md:text-4xl lg:text-5xl'>
                            {item?.name}
                          </h2>
                          <p className='mt-5 text-xl font-bold text-[#061632] md:text-2xl lg:w-[500px] lg:text-3xl'>
                            {item?.designation}
                          </p>
                          <div
                            className='mt-10 text-xs md:text-xl lg:text-2xl'
                            dangerouslySetInnerHTML={{
                              __html: item?.subDesignation,
                            }}
                          ></div>
                          <div
                            className='mt-10 text-justify text-xs md:hidden md:text-lg lg:mr-10 lg:block xl:mr-20'
                            dangerouslySetInnerHTML={{
                              __html: item?.shortDescription,
                            }}
                          ></div>
                        </Fade>
                      </div>
                      <div className='mt-5 md:mt-0'>
                        <Slide
                          direction='right'
                          delay={0.5}
                          fraction={0.5}
                          triggerOnce
                        >
                          <NextImage
                            useSkeleton
                            className='cover w-50 w-[300px] lg:w-[400px]'
                            width='400'
                            height='600'
                            src={item?.aboutImage?.sourceUrl}
                            alt={item?.aboutImage?.altText}
                          />
                        </Slide>
                      </div>
                    </div>
                  </div>
                  <div className='md:hidden'>
                    <div className='mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-10 lg:mx-0 lg:max-w-none'>
                      <div className='flex flex-col items-start'>
                        <Fade
                          cascade
                          damping={0.2}
                          direction='left'
                          triggerOnce
                        >
                          <h2 className='w-full text-2xl font-bold leading-5  text-[#515151] md:text-5xl'>
                            {item?.name}
                          </h2>
                          <p className='mt-5 text-xl font-bold text-[#061632] md:w-[500px] md:text-3xl'>
                            {item?.designation}
                          </p>
                          <div
                            className={`${
                              item?.subDesignation ? 'mt-10' : ''
                            } text-xs md:text-2xl`}
                            dangerouslySetInnerHTML={{
                              __html: item?.subDesignation,
                            }}
                          ></div>
                        </Fade>
                        <div className='mt-10 md:mt-0'>
                          <Slide
                            direction='right'
                            delay={0.5}
                            fraction={0.5}
                            triggerOnce
                          >
                            <NextImage
                              useSkeleton
                              className='cover w-50 md:w-[400px]'
                              width='400'
                              height='600'
                              src={item?.aboutImage?.sourceUrl}
                              alt={item?.aboutImage?.altText}
                            />
                          </Slide>
                        </div>
                        <Fade delay={500} triggerOnce>
                          <div
                            className='mb-2 mt-10 text-justify text-xs md:text-lg'
                            dangerouslySetInnerHTML={{
                              __html: item?.shortDescription,
                            }}
                          ></div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  <Fade delay={500} triggerOnce>
                    <div
                      className='mt-10 hidden text-justify text-xs md:block md:text-lg lg:mr-10 lg:hidden xl:mr-20'
                      dangerouslySetInnerHTML={{
                        __html: item?.shortDescription,
                      }}
                    ></div>
                    <div
                      className='mt-10 px-5 text-justify text-xs md:px-0 md:text-lg lg:px-10'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </Fade>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
