import Image from 'next/image';
import React from 'react';

type MyProps = {
  featuredData: any;
};

export default function FindSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-16 md:mt-20 lg:mx-auto xl:mt-32'>
      <div className='pb-10 text-center md:px-10 lg:w-full lg:pb-20'>
        <h2 className='px-5 text-center text-lg font-semibold leading-5 text-gray-800 md:text-4xl'>
          {featuredData?.topHead}
        </h2>
        <div
          className='mx-auto mt-5 max-w-[1400px] px-5 text-xs leading-5 text-[#515151] md:text-lg'
          dangerouslySetInnerHTML={{
            __html: featuredData?.topDescription,
          }}
        ></div>
      </div>

      <div className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0 lg:mt-5'>
        <div className='hidden w-full items-start justify-start md:flex md:w-1/2 xl:w-2/5'>
          <Image
            className='md:w-[500px] 2xl:w-full'
            src={featuredData?.image?.node?.sourceUrl}
            width={500}
            height={500}
            alt={featuredData?.image?.node?.altText}
          />
        </div>
        <div className='flex w-full items-start justify-start md:hidden md:w-1/2 xl:w-2/5'>
          <Image
            className=''
            src={featuredData?.image?.node?.sourceUrl}
            width={300}
            height={300}
            alt={featuredData?.image?.node?.altText}
          />
        </div>
        <div className='mx-auto flex w-full flex-col items-end md:w-1/2 xl:w-3/5'>
          <div className='mx-auto px-5 md:w-3/4 md:px-0 xl:w-2/3'>
            <h3 className='w-full text-center text-2xl md:text-start md:text-4xl '>
              {featuredData?.featureTitle}
            </h3>
            <div
              className='mt-5 text-justify text-xs text-[#515151] md:text-lg'
              dangerouslySetInnerHTML={{
                __html: featuredData?.featureDescription,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
