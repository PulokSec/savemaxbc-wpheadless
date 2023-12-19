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
      <div className='h-[60vh] py-16 md:mx-auto md:h-[90vh]'>
        <div className='mx-auto ml-0 flex w-[380px]  flex-col items-center justify-center px-5 text-center md:ml-40 md:mt-[10%] md:items-start'>
          {bannerData?.topBannerHeading && (
            <p className='text-leading-3 text-center text-2xl font-black text-[#525659] md:w-[500px] md:text-start md:text-4xl lg:w-[600px] lg:text-6xl'>
              {bannerData?.topBannerHeading}
            </p>
          )}
          <p className='text-leading-3 text-md mt-5 text-center text-2xl font-black text-sky-950 md:w-[500px] md:text-start md:text-4xl lg:w-[600px] lg:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
          <div className='mt-8 text-center text-black md:w-[500px] md:text-start'>
            <p className='text-md'>{bannerData?.bannerDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
