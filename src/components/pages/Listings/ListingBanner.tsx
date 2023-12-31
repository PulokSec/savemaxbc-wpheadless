import React from 'react';

import SearchTab from '@/components/pages/Listings/SearchTab';
import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function ListingBanner(props: MyProps) {
  const { headerData, settingsData, bannerData, usingFor } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header settingsData={settingsData} navigation={headerData} />
      <div className='mx-auto flex flex-col items-center justify-between'>
        <div className='mx-auto flex w-full flex-col items-center justify-center py-16 text-center md:mt-[10%] lg:mt-[20%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl lg:text-7xl'>
            {bannerData?.bannerHeading}
          </p>
        </div>
        <div className={usingFor == 'map' ? 'hidden' : 'block'}>
          <SearchTab />
        </div>
      </div>
    </div>
  );
}
