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
    <section className=' bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/why-choose-savemax-background.png")] bg-cover bg-no-repeat md:px-10'>
      <div className='col-span-12 mt-10 px-5 md:col-span-8 md:col-start-1 md:mt-20 md:px-10'>
        <h2 className='text-center text-2xl md:text-4xl'>
          {featuredData?.featureTitle}
        </h2>
        <div
          className='mt-5 text-center text-xs md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.featureDescription,
          }}
        ></div>
      </div>
      <div className='px-10 py-10 md:py-20'>
        <div className='relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-900 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
          {featuredData?.featuredDiv?.map((item: any, i: number) =>
            i % 2 == 0 ? (
              <div className='is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
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
                  className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'
                  onClick={() => setActive(i)}
                >
                  <div className='text-start lg:w-full'>
                    <h2
                      className={
                        active == i
                          ? 'text-sky-950'
                          : 'text-[#585858]' +
                            'w-full text-xl leading-5 md:w-[500px] md:text-2xl'
                      }
                    >
                      {item?.title}
                    </h2>
                    <div
                      className='mt-5 text-xs md:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='is-active group relative flex items-start justify-between md:items-center md:justify-normal md:odd:flex-row-reverse'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
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
                  className='w-[calc(100%-4rem)] bg-white p-4 text-end md:w-[calc(50%-2.5rem)]'
                  onClick={() => setActive(i)}
                >
                  <div className='flex flex-col items-start md:items-end lg:w-full'>
                    <h2
                      className={
                        active == i
                          ? 'text-sky-950'
                          : 'text-[#585858]' +
                            'w-full text-start text-xl leading-5 md:w-[500px] md:text-end md:text-2xl'
                      }
                    >
                      {item?.title}
                    </h2>
                    <div
                      className='mt-5 text-start text-xs md:text-end md:text-lg'
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
