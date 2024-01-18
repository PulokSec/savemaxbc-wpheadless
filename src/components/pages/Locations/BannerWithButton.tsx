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
export default function BannerWithButton(props: MyProps) {
  const { bannerData, headerData, settingsData } = props;
  return (
    <div
      className='relative h-[70vh] w-full bg-cover bg-fixed bg-[center_center] bg-no-repeat lg:h-[70vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='mx-auto  w-full  lg:px-10'>
          <p className='w-full text-center text-lg font-bold leading-7 text-white lg:text-3xl'>
            {bannerData?.bannerSubhead}
          </p>
          <h2 className='w-[350px] text-center text-xl font-bold tracking-wide text-white md:w-[600px] md:text-3xl lg:w-[900px] lg:text-5xl lg:leading-[60px] xl:w-[700px] xl:text-6xl xl:leading-[66px]'>
            {bannerData?.bannerHeading}
          </h2>
          {bannerData?.bannerDescription && (
            <div
              className='mt-8 text-center text-xl text-white lg:text-3xl'
              dangerouslySetInnerHTML={{
                __html: bannerData?.bannerDescription,
              }}
            ></div>
          )}
          {bannerData?.bannerButton === 'Contact Us' && (
            <div className='flex items-center justify-center'>
              <a
                href='/contact-us'
                className='text-uppercase mt-5 rounded-md border-2 px-3 py-2 text-base font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg lg:px-5 lg:py-3'
              >
                {bannerData?.bannerButton}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
