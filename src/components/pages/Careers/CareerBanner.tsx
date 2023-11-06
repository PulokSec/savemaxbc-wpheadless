import React from 'react';

import Header from '@/components/shared/Header';

type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  topTitle: any;
  topDesc: any;
};
export default function CareersBanner(props: MyProps) {
  const { bannerData, headerData, settingsData, topDesc, topTitle } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto py-16'>
        <div className='mx-auto mt-[50%] flex w-full flex-col items-center justify-center px-5 md:mt-[15%]  md:items-start md:px-10 md:pl-[10%]'>
          <p className='w-full text-lg font-bold uppercase leading-5 text-white md:w-[500px] md:text-6xl'>
            {bannerData?.bannerHeading}
          </p>
          <div
            className='mt-8 text-xl text-white md:text-3xl'
            dangerouslySetInnerHTML={{
              __html: bannerData?.bannerDescription,
            }}
          ></div>
        </div>
      </div>
      <div className='container relative mx-auto bg-white py-3 text-center shadow md:mt-[300px]'>
        <div
          className='mt-5'
          dangerouslySetInnerHTML={{
            __html: topDesc,
          }}
        ></div>
        <p className='text-bolder mt-2 w-full text-xl md:text-2xl'>
          {topTitle}
        </p>
      </div>
    </div>
  );
}
