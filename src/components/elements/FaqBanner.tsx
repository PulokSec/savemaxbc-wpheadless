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
export default function FaqBanner(props: MyProps) {
  const {
    bannerData,
    headerData,
    settingsData,
    topDesc,
    topTitle,
    featureTitle,
    featureSubtitle,
    usingFor,
  } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat lg:h-[100vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(${bannerData?.bannerImage?.node?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mt-20 flex flex-col items-center justify-center md:mt-40 lg:mt-60'>
        <div className='py-16'>
          <div className='flex max-w-[1200px] flex-col items-center justify-center px-5 lg:px-10'>
            <p className='w-full text-center text-[26px] font-bold uppercase leading-5 text-white md:text-4xl lg:text-6xl'>
              {bannerData?.bannerHeading}
            </p>
            {bannerData?.bannerDescription && (
              <div
                className='mt-8 text-center text-xl text-white lg:text-3xl'
                dangerouslySetInnerHTML={{
                  __html: bannerData?.bannerDescription,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
