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
        className='relative h-[80vh] w-full bg-center bg-no-repeat md:hidden md:bg-[length:100%_100vh] lg:h-[100vh]'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)),url(${bannerData?.bannerImage?.sourceUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='flex h-[60vh] flex-col items-center justify-center md:h-[80vh]'>
          <div className='py-8 md:py-16'>
            <div
              className={`${
                bannerData?.bannerDescription ? 'md:mb-[20%]' : 'md:mb-[10%]'
              }  -mt-20 flex h-[40vh] w-full flex-col items-center justify-center px-5 md:mt-0 md:h-[45vh] lg:px-10`}
            >
              <h1 className='w-full text-center text-3xl font-bold uppercase leading-5 tracking-wide text-white md:text-4xl lg:text-6xl xl:text-[66px]'>
                {bannerData?.bannerHeading}
              </h1>
              {bannerData?.bannerDescription && (
                <div
                  className='mt-8 text-center text-lg font-semibold tracking-wide text-white md:text-3xl lg:text-3xl'
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
        className='relative hidden h-[80vh] w-full bg-cover bg-center bg-no-repeat md:block md:h-[80vh]'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)),url(${bannerData?.bannerImagePc?.sourceUrl})`,
        }}
      >
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='flex h-[70vh] flex-col items-center justify-center md:h-[60vh]'>
          <div className='py-8 md:py-16'>
            <div
              className={`${
                bannerData?.bannerDescription ? 'md:mb-[20%]' : 'md:mb-[10%]'
              }  -mt-20 flex h-[40vh] w-full flex-col items-center justify-center px-5 md:mt-0 md:h-[45vh] lg:px-10`}
            >
              <h1 className='w-full text-center text-xl font-bold uppercase leading-5 tracking-wide text-white md:text-4xl lg:text-6xl xl:text-[66px]'>
                {bannerData?.bannerHeading}
              </h1>
              {bannerData?.bannerDescription && (
                <div
                  className='mt-8 text-center text-lg font-semibold tracking-wide text-white md:text-3xl lg:text-3xl'
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
