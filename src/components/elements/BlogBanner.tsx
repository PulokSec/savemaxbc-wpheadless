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
  console.log(bannerImage);
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-fixed bg-[center_center] bg-no-repeat lg:h-[100vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${bannerImage?.sourceUrl})`,
      }}
    >
      <Header settingsData={settingsData} navigation={headerData} />
      <div className='mx-auto flex flex-col items-center justify-center h-[70vh] lg:h-auto'>
        <div className='mx-auto flex w-full flex-col items-center justify-center py-16 text-center md:mt-[10%] lg:mt-[15%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl'>
            {bannerHeading || ''}
          </p>
        </div>
      </div>
    </div>
  );
}
