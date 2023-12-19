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
      <div className='relative h-[60vh] py-16 md:mx-auto md:h-[90vh]'>
        <div className='mx-auto ml-0 flex h-full flex-col items-center justify-center px-5 text-center  '>
          {bannerData?.topBannerHeading && (
            <p className='text-leading-3 text-center text-2xl font-black text-white md:text-3xl lg:text-5xl'>
              {bannerData?.topBannerHeading}
            </p>
          )}
          <p className='text-leading-3 text-md mt-5 text-center text-2xl font-black text-white  md:text-4xl  lg:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
        </div>
        <div className='container absolute left-1/2 mx-auto w-[80%] -translate-x-1/2 rounded-b-xl bg-white px-5 py-3 text-center shadow-md'>
          <div className='md:text-md py-4 text-center text-xs font-medium text-[#515151] lg:text-lg '>
            <p className='text-md'>{bannerData?.bannerDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
