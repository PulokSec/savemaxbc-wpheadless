import React from 'react';

import Header from '@/components/shared/Header';

type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  topTitle?: any;
  topDesc?: any;
  featureTitle?: any;
  featureSubtitle?: any;
  usingFor?: string;
};
export default function AboutBanner(props: MyProps) {
  const {
    bannerData,
    headerData,
    settingsData,
    topDesc,
    topTitle,
    featureTitle,
    featureSubtitle,
    usingFor,
  } = props;
  return (
    <>
      <div
        className='relative h-[70vh] w-full bg-[length:100%_70vh] bg-center bg-no-repeat md:hidden md:bg-[length:100%_100vh] lg:h-[100vh]'
        style={{
          backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
        }}
      >
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='mt-24 flex flex-col items-center justify-center lg:mt-60'>
          <div className='py-0 lg:py-10'>
            <div className='flex w-full flex-col items-center justify-center px-5 lg:px-10'>
              <h1 className='w-full text-center text-3xl font-bold uppercase leading-5 text-white md:text-3xl lg:text-7xl'>
                {bannerData?.bannerHeading}
              </h1>
              {bannerData?.bannerDescription && (
                <div
                  className='mt-8 text-center text-xl text-white lg:text-3xl'
                  dangerouslySetInnerHTML={{
                    __html: bannerData?.bannerDescription,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className='relative hidden h-[50vh] w-full bg-center bg-no-repeat md:block md:bg-[length:100%_50vh] xl:h-[100vh] xl:bg-[length:100%_100vh]'
        style={{
          backgroundImage: `url(${bannerData?.bannerImagePc?.sourceUrl})`,
        }}
      >
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='mt-40 flex flex-col items-center justify-center lg:mt-60 2xl:mt-[350px]'>
          <div className='py-0 lg:py-10'>
            <div className='flex w-full flex-col items-center justify-center px-5 lg:px-10'>
              <h1 className='w-full text-center text-3xl font-bold uppercase leading-5 text-white md:text-3xl lg:text-7xl'>
                {bannerData?.bannerHeading}
              </h1>
              {bannerData?.bannerDescription && (
                <div
                  className='mt-8 text-center text-xl text-white lg:text-3xl'
                  dangerouslySetInnerHTML={{
                    __html: bannerData?.bannerDescription,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
