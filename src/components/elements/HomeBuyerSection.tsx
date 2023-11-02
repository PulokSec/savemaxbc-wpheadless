'use client';
import React from 'react';

type MyProps = {
  featuredData: any;
};
export default function HomeBuyerSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='container mx-auto bg-white '>
      <div className='col-span-12 ml-5 md:col-span-8 md:col-start-1 md:ml-40 md:px-10 lg:mt-20'>
        <h2 className='text-center text-2xl md:text-5xl'>
          {featuredData?.featureTitle}
        </h2>
        <div
          className='mt-5 text-center text-xs md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.featureDescription,
          }}
        ></div>
        <div className='mt-20 px-5 md:px-10'>
          <ul className=''>
            {featuredData?.featuredDiv?.map((item: any, i: number) => (
              <li key={i} className='mb-10 text-left'>
                <div className='flex flex-row items-start'>
                  <div className='mr-5 flex flex-col items-center justify-center'>
                    <div className='flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#051532] text-xl font-semibold text-white'>
                      {i + 1}
                    </div>
                  </div>
                  <div className='bg-[#051532] p-5 pb-10 '>
                    <h3 className='text-lg font-semibold leading-6 text-white'>
                      {item?.title}
                    </h3>
                    <div
                      className='mt-5 text-start text-xs text-white md:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
