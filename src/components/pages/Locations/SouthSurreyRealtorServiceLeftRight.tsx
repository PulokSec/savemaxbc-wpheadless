import React from 'react';

import NextImage from '@/components/NextImage';

type Props = {
  data: any;
};

const SouthSurreyRealtorServiceLeftRight = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <div className='py-10 lg:py-20'>
        <h2 className='px-5 text-center text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold'>
          {data?.title}
        </h2>
        <div
          className='md:text-md mx-auto mt-5 max-w-[1400px] px-5 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        ></div>
      </div>
      <div className='mx-auto max-w-[1400px] p-5'>
        <div className='flex flex-col items-center justify-center gap-12'>
          {data?.servicesDiv?.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
              } flex flex-col items-center justify-center gap-7 md:flex-row`}
            >
              <div
                className='mx-auto md:w-1/2'
                dangerouslySetInnerHTML={{
                  __html: item?.description,
                }}
              ></div>
              <div className={`mx-auto md:w-1/2 `}>
                <NextImage
                  useSkeleton
                  className='w-full md:w-[100%]'
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  width='600'
                  height='200'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SouthSurreyRealtorServiceLeftRight;
