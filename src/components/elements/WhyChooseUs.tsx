'use client';
import React, { useState } from 'react';

import NextImage from '@/components/NextImage';

import homeImgGrey from '../../assets/elements/why choose home icon grey.png';
import homeImg from '../../assets/elements/why choose home icon.png';

type MyProps = {
  featuredData: any;
};
export default function WhyChooseUs(props: MyProps) {
  const { featuredData } = props;
  const [active, setActive] = useState(0);
  return (
    <section className=' bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/why-choose-savemax-background.png")] bg-cover bg-no-repeat md:px-10 -mt-40 lg:-mt-24'>
      <div className='h-64'></div>
      <div className='col-span-12 px-5 md:col-span-12 md:px-5 lg:col-span-8 lg:col-start-1 lg:px-10'>
        <h2 className='text-center text-2xl md:text-4xl'>
          {featuredData?.featureTitle}
        </h2>
        <div
          className='md:text-md mx-auto mt-5 max-w-[1400px] text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.featureDescription,
          }}
        ></div>
      </div>
      <div className='px-10 pt-20 pb-40 md:px-10 md:pt-20 md:pb-40 lg:py-40'>
        <div className='relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-900 before:to-transparent lg:before:mx-auto lg:before:translate-x-0'>
          {featuredData?.featuredDiv?.map((item: any, i: number) =>
            i % 2 == 0 ? (
              <div
                className='is-active group relative flex items-center justify-between md:justify-between lg:justify-normal lg:odd:flex-row-reverse'
                key={i}
              >
                <div className='flex h-10 w-10 shrink-0 items-center justify-center lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2'>
                  <NextImage
                    useSkeleton
                    className='mt-[-40px] h-[50px] w-[40px]'
                    src={active == i ? homeImg : homeImgGrey}
                    alt='{item?.image?.altText}'
                    width='50'
                    height='40'
                  />
                </div>

                <div
                  className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)]'
                  onClick={() => setActive(i)}
                >
                  <div className='text-start lg:w-full'>
                    <h3
                      className={
                        active == i
                          ? 'text-[#061632]'
                          : 'text-[#585858]' +
                            'w-full text-xl leading-5 md:w-full md:text-xl  lg:text-2xl'
                      }
                    >
                      {item?.title}
                    </h3>
                    <div
                      className='md:text-md mt-5 text-xs lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className='is-active group relative flex items-start justify-between md:justify-between lg:justify-normal lg:odd:flex-row-reverse'
                key={i}
              >
                <div className='flex h-10 w-10 shrink-0 items-center justify-center lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2'>
                  <NextImage
                    useSkeleton
                    className='h-[50px] w-[40px]'
                    src={active == i ? homeImg : homeImgGrey}
                    alt='{item?.image?.altText}'
                    width='50'
                    height='40'
                  />
                </div>

                <div
                  className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)]'
                  onClick={() => setActive(i)}
                >
                  <div className='flex flex-col items-start md:items-start lg:w-full lg:items-end'>
                    <h3
                      className={
                        active == i
                          ? 'text-[#061632]'
                          : 'text-[#585858]' +
                            'w-full text-xl leading-5 md:w-full md:text-xl lg:text-end lg:text-2xl'
                      }
                    >
                      {item?.title}
                    </h3>
                    <div
                      className='md:text-md mt-5 text-xs lg:text-lg lg:text-end'
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
  );
}
