import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};
export default function JoinSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <section className='mt-10 bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/how-to-join-background.png")] bg-cover bg-no-repeat px-5 md:px-10'>
      <div className='pb-0 pt-3 md:py-20'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='container mx-auto mt-10 flex flex-col items-center justify-between gap-10 px-10 md:mt-10 md:flex-col md:px-10 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:gap-4'>
            <div className='hidden lg:block lg:w-1/2'>
              <NextImage
                useSkeleton
                className='mb-[-400px] lg:h-[600px] lg:w-[700px] xl:h-[1000px] xl:w-[1200px]'
                src={featuredData?.image?.node?.sourceUrl}
                alt={featuredData?.image?.node?.altText}
                width='1200'
                height='1000'
              />
            </div>
            <div className='flex flex-col items-end justify-end md:items-end md:justify-center lg:w-1/2'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-end text-xl md:text-end md:text-4xl lg:text-5xl'>
                  {featuredData?.featureTitle}
                </h2>
                <div
                  className='mt-5 pl-5 text-end text-xs md:text-end md:text-lg lg:pl-0'
                  dangerouslySetInnerHTML={{
                    __html: featuredData?.featureDescription,
                  }}
                ></div>
              </div>
              <div className='mt-5 text-start md:mt-10'>
                <a
                  href='/apply-now'
                  className='text-uppercase rounded-bl-[20px] border border-solid bg-white px-2 py-1 text-xs  font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className='block md:pt-10 lg:hidden lg:w-1/2 '>
              <NextImage
                useSkeleton
                className='ml-[-50px] w-[400px] md:w-full'
                src={featuredData?.image?.node?.sourceUrl}
                alt={featuredData?.image?.node?.altText}
                width='500'
                height='400'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
