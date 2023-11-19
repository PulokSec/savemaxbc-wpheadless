import React from 'react';

import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
};
export default function ServiceBanner(props: MyProps) {
  const { headerData, settingsData, bannerData } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-blend-screen md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto py-16'>
        <div className='mx-auto ml-0 flex w-[380px]  flex-col items-center justify-center text-center md:ml-40 md:mt-[10%] md:w-[500px] md:items-start'>
          {bannerData?.topBannerHeading && (
            <p className='text-leading-3 text-center text-lg font-bold text-[#525659] md:text-start md:text-5xl'>
              {bannerData?.topBannerHeading}
            </p>
          )}
          <p className='text-leading-3 text-md mt-5 text-lg font-bold text-sky-950 md:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
          {bannerData?.bannerDescription && (
            <div className='mt-8 text-center text-black md:text-start'>
              <p className='text-md'>{bannerData?.bannerDescription}</p>
            </div>
          )}
          {bannerData?.bannerButton && (
            <div className='mt-8 text-center text-black md:text-start'>
              <a href={bannerData?.bannerButton} className=''>
                <button className='rounded-md bg-sky-950 px-8 py-3 text-white'>
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
