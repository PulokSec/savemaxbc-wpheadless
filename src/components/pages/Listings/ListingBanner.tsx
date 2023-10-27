import React from 'react';

import SearchTab from '@/components/pages/Listings/SearchTab';
import Header from '@/components/shared/Header';
type MyProps = {
  // bannerData: any;
  headerData: any;
  settingsData: any;
};
export default function ListingBanner(props: MyProps) {
  const { headerData, settingsData } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage:
          "url('https://savemaxbc.com/wp-content/uploads/2023/10/banner.jpg')",
      }}
    >
      <Header settingsData={settingsData} navigation={headerData} />
      <div className='mx-auto flex flex-col items-center justify-between'>
        <div className='mx-auto flex w-full flex-col items-center justify-center py-16 text-center  md:mt-[10%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl'>
            ALL PROPERTIES
          </p>
        </div>
        <SearchTab />
      </div>
    </div>
  );
}