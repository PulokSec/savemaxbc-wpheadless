import React from 'react';

import Header from '@/components/shared/Header';
type MyProps = {
  bannerImage: any;
  bannerHeading: any;
  headerData: any;
  settingsData: any;
};
export default function BlogBanner(props: MyProps) {
  const { headerData, settingsData, bannerHeading, bannerImage } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerImage?.sourceUrl})`,
      }}
    >
      <Header settingsData={settingsData} navigation={headerData} />
      <div className='mx-auto flex flex-col items-center justify-between'>
        <div className='mx-auto flex w-full flex-col items-center justify-center py-16 text-center  md:mt-[10%] lg:mt-[25%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl'>
            {bannerHeading}
          </p>
        </div>
      </div>
    </div>
  );
}
