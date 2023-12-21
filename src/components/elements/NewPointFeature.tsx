import { Circle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type MyProps = {
  featuredData: any;
};
export default function NewPointFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='max-w-screen overflow-x-hidden pb-14 pt-10 md:pt-20 2xl:pt-40'>
      <div className=''>
        <div className='mx-auto px-2 md:px-10'>
          <h2
            className=' px-2 pt-5 text-center text-2xl md:mb-20 md:text-3xl lg:text-5xl'
            dangerouslySetInnerHTML={{
              __html: featuredData?.featureTitle,
            }}
          ></h2>
        </div>
        <div className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'>
          <div className='mx-auto flex w-full flex-col items-start md:w-1/2 xl:w-4/6'>
            <div className='mx-auto w-3/4 xl:w-3/5'>
              <p
                className='md:text-md mb-4 w-full text-justify text-xs lg:mb-10 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featureDescription,
                }}
              ></p>
              {featuredData?.featuredDivLeft?.map((item: any, i: number) => (
                <div className='mt-7 flex items-start' key={i}>
                  <div className='mr-4 mt-1'>
                    <Circle className='h-4 w-4 rounded-[50%] bg-black' />
                  </div>
                  <div className=''>
                    <h3 className='mb-2 text-xl leading-5 text-[#061632] md:text-xl lg:text-2xl'>
                      {item?.title}
                    </h3>
                    <div
                      className='text-justify text-xs text-[#515151] lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full items-end justify-end md:w-1/2 xl:w-1/3'>
            <Image
              className='hidden md:block md:w-[500px] 2xl:w-[650px]'
              src={featuredData?.imageRight?.sourceUrl}
              width={500}
              height={500}
              alt={featuredData?.imageRight?.altText}
            />
            <Image
              className='md:hidden'
              src={featuredData?.imageRight?.sourceUrl}
              width={250}
              height={250}
              alt={featuredData?.imageRight?.altText}
            />
          </div>
        </div>
        <div className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0 2xl:mt-32'>
          <div className='hidden w-full items-start justify-start md:flex md:w-1/2 xl:w-2/5'>
            <Image
              className='md:w-[500px] 2xl:w-[650px]'
              src={featuredData?.imageLeft?.sourceUrl}
              width={500}
              height={500}
              alt={featuredData?.imageLeft?.altText}
            />
          </div>
          <div className='mx-auto flex w-full flex-col items-end md:w-1/2 xl:w-3/5'>
            <div className='mx-auto w-3/4 xl:w-2/3'>
              {featuredData?.featuredDivRight?.map((item: any, i: number) => (
                <div className='mt-7 flex items-start' key={i}>
                  <div className=''>
                    <h3 className='mb-2 text-end text-xl leading-5 text-[#061632] md:text-xl lg:text-2xl'>
                      {item?.title}
                    </h3>
                    <div
                      className='text-justify text-xs text-[#515151] lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                  <div className='ml-4 mt-2'>
                    <Circle className='h-4 w-4 rounded-full bg-black' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full items-start justify-start md:hidden md:w-1/2 xl:w-2/5'>
            <Image
              className=''
              src={featuredData?.imageLeft?.sourceUrl}
              width={250}
              height={250}
              alt={featuredData?.imageLeft?.altText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
