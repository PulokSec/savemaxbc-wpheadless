import React from 'react';

import Header from '@/components/shared/Header';

type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  topTitle: any;
  topDesc: any;
};
export default function CareersBanner(props: MyProps) {
  const { bannerData, headerData, settingsData, topDesc, topTitle } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat lg:h-[100vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto py-16'>
        <div className='mx-auto mt-[50%] flex w-full flex-col items-center justify-center px-5 lg:mt-[15%]  lg:items-start lg:px-10 lg:pl-[10%]'>
          <p className='w-full text-lg font-bold uppercase leading-5 text-white lg:w-[500px] lg:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
          <div
            className='mt-8 text-xl text-white lg:text-3xl'
            dangerouslySetInnerHTML={{
              __html: bannerData?.bannerDescription,
            }}
          ></div>
        </div>
      </div>
      <div className='container relative mx-auto mt-[40%] w-[80%] bg-white py-3 text-center shadow-md md:mt-[20%] xl:mt-[5%] 2xl:mt-[15%]'>
        <div
          className='md:text-md mt-2 md:mt-5 text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: topDesc,
          }}
        ></div>
        {topTitle === 'Start your journey now!' ? (
          <div className='mt-1 flex items-center justify-center'>
            <a
              href='/apply-now'
              className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
            >
              Start your journey now!
            </a>
          </div>
        ) : (
          <p className='font-bolder mt-2 w-full text-xl md:text-xl lg:text-2xl'>
            {topTitle}
          </p>
        )}
      </div>
    </div>
  );
}
