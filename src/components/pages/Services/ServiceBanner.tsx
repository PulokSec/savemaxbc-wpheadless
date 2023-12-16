import React from 'react';

import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function ServiceBanner(props: MyProps) {
  const { headerData, settingsData, bannerData, usingFor } = props;
  return (
    <div
      className='relative h-[70vh] w-full bg-cover bg-center bg-no-repeat bg-blend-screen md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto h-[60vh] py-16 md:h-[90vh]'>
        <div className='mx-auto ml-0 flex h-full w-full flex-col items-center justify-center text-center md:items-center'>
          {bannerData?.topBannerHeading && (
            <p className='text-leading-3 text-center text-lg font-bold text-[#525659] md:text-start md:text-5xl'>
              {bannerData?.topBannerHeading}
            </p>
          )}
          {usingFor === 'news' && (
            <p className='text-leading-3 text-md mt-5 font-bold text-[#525659] md:text-3xl'>
              {bannerData?.bannerSubheading}
            </p>
          )}
          <p className='text-leading-3 mt-5 text-xl font-bold text-sky-950 md:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
          {bannerData?.bannerDescription && (
            <div className='mx-auto mt-8 max-w-[1400px] px-3 text-center text-black md:text-start'>
              <p className='text-md'>{bannerData?.bannerDescription}</p>
            </div>
          )}
          {bannerData?.bannerButton && (
            <div className='mt-8 text-center text-black md:text-start'>
              <a href={bannerData?.bannerButton} className=''>
                <button className='border-bg-sky-950 rounded-md border-[1px] bg-sky-950 px-8 py-3 text-white hover:border-sky-950 hover:bg-white hover:text-gray-800'>
                  CONTACT US
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
