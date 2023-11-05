'use client';
import React from 'react';

type MyProps = {
  featuredData: any;
};
export default function HomeBuyerSection(props: MyProps) {
  const [active, setActive] = React.useState(0);
  const { featuredData } = props;
  return (
    <section className='bg-white '>
      <div className='col-span-12 ml-5 md:col-span-8 md:col-start-1 md:px-10 lg:mt-20'>
        <h2 className='text-center text-2xl md:text-4xl'>
          {featuredData?.featureTitle}
        </h2>
        <div
          className='mt-5 text-center text-xs md:px-5 md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.featureDescription,
          }}
        ></div>
        <div className='mt-20 px-5 md:px-10'>
          <ul className=''>
            {featuredData?.featuredDiv?.map((item: any, i: number) => (
              <li key={i} className='mb-10 text-left'>
                <div
                  className='flex cursor-pointer flex-row items-start'
                  onClick={() => setActive(i)}
                >
                  <div className='flex flex-col items-center justify-center md:pr-3'>
                    <div
                      className={
                        active == i
                          ? 'flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#051532] text-xl font-semibold text-white shadow'
                          : 'flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-200 text-xl font-semibold'
                      }
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div
                    className={
                      active == i
                        ? 'rounded bg-[#051532] p-5 py-10 text-white shadow'
                        : 'w-full rounded bg-gray-200 p-5 py-10 shadow'
                    }
                  >
                    <h3 className='text-lg font-semibold leading-6'>
                      {item?.title}
                    </h3>
                    <div
                      className={
                        active == i
                          ? 'mt-5 block text-start text-xs  md:text-lg'
                          : 'mt-5 hidden text-start text-xs  md:text-lg'
                      }
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
