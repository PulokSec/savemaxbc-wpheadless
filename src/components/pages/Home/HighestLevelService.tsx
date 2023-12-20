'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type MyProps = {
  serviceData: any;
};

const HighestLevelService = (props: MyProps) => {
  const { serviceData } = props;
  const [selectedDiv, setSelectedDiv] = useState(0);
  return (
    <div className='max-w-screen relative h-[120vh] overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/ensure-highest-level-of-services.png")] bg-cover bg-center bg-no-repeat'>
      <h2 className='z-2 mb-8 mt-20 px-3 text-center uppercase text-white md:mb-16 lg:mt-56'>
        {serviceData?.heading}
      </h2>

      <div className='hidden md:block'>
        <div className='mx-auto flex w-11/12 items-center justify-center gap-5 lg:w-11/12 lg:gap-10 2xl:w-3/4 '>
          {serviceData?.gallery?.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? ' w-[500px] flex-col items-center justify-center'
                  : 'w-[150px] items-center justify-center text-center'
              } ${
                idx === 1
                  ? ' overflow-hidden rounded-bl-2xl rounded-tl-2xl'
                  : idx === serviceData?.gallery?.length - 1
                  ? 'overflow-hidden rounded-br-2xl rounded-tr-2xl'
                  : 'overflow-hidden rounded-2xl'
              } relative flex h-96 cursor-pointer  p-2 md:h-[535px] lg:h-[500px] xl:h-[360px] 2xl:h-80`}
              onClick={() => setSelectedDiv(idx)}
            >
              <h3
                className={`${
                  selectedDiv === idx
                    ? 'mb-1'
                    : 'rotate-180 [writing-mode:vertical-rl]'
                } text-center text-xl text-slate-200 xl:text-[22px]`}
              >
                {item?.title}
              </h3>
              {selectedDiv === idx && (
                <p
                  className='text-center text-slate-200 lg:px-2 2xl:px-5'
                  dangerouslySetInnerHTML={{
                    __html: item?.desc,
                  }}
                ></p>
              )}
              <Image
                src={item?.image?.sourceUrl}
                fill={true}
                className='object-cover opacity-50'
                alt={item?.image?.altText}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='py-5 md:hidden'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {serviceData?.gallery?.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? 'h-[315px] flex-col items-center justify-center '
                  : 'h-[50px] items-center justify-center text-center'
              } relative flex w-[320px] cursor-pointer p-2`}
              onClick={() => setSelectedDiv(idx)}
            >
              <h3
                className={`${
                  selectedDiv === idx ? 'mb-1' : ''
                } text-center text-lg text-slate-200 `}
              >
                {item.title}
              </h3>
              {selectedDiv === idx && (
                <p
                  className='text-center text-[15px] text-slate-200'
                  dangerouslySetInnerHTML={{
                    __html: item?.desc,
                  }}
                ></p>
              )}
              <Image
                src={item?.image?.sourceUrl}
                fill={true}
                className='rounded-2xl object-cover opacity-50'
                alt={item?.image?.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighestLevelService;
