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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='flex h-[70vh] flex-col items-start justify-start lg:h-[100vh]'>
        <div className='py-8 md:py-16'>
          <div
            className={`${
              bannerData?.bannerDescription ? 'md:mb-[20%]' : 'md:mb-[10%]'
            }  flex h-[40vh] w-full flex-col items-start justify-center px-5 lg:mt-[10%] lg:h-[60vh] lg:pl-[15%] 2xl:pl-[35%]`}
          >
            <p
              style={{ lineHeight: '75px' }}
              className='w-full text-xl font-bold uppercase tracking-wide text-white md:text-2xl lg:w-[500px] lg:text-6xl 2xl:text-[66px]'
            >
              {bannerData?.bannerHeading}
            </p>
            <div
              className='mt-0 w-full text-lg text-white md:mt-8 lg:w-[500px] lg:text-3xl'
              dangerouslySetInnerHTML={{
                __html: bannerData?.bannerDescription,
              }}
            ></div>
          </div>
        </div>
        <div className='container relative mx-auto -mt-20 w-[80%] rounded-b-xl px-5 py-3 text-center md:bg-white md:shadow-md lg:-mt-10'>
          <div
            className='md:text-md mt-2 text-xs text-white md:mt-5 md:text-black lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: topDesc,
            }}
          ></div>

          {topTitle === 'Start your journey now!' ? (
            <div className='mt-2 flex items-center justify-center md:mt-1'>
              <a
                href='/apply-now'
                className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
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
    </div>
  );
}
