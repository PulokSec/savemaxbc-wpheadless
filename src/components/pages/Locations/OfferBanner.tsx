import React from 'react';

import OfferSection from '@/components/pages/Locations/OfferSection';

type MyProps = {
  offerBannerData: any;
  featuredData: any;
};
export default function OfferBanner(props: MyProps) {
  const { offerBannerData, featuredData } = props;
  console.log(offerBannerData);
  return (
    <div
      className='relative mt-20 w-full bg-auto duration-500 group-hover:rotate-3 group-hover:scale-125'
      style={{
        backgroundImage: `url(${offerBannerData?.backgroundImage?.sourceUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section>
        <div className='container mx-auto py-10 md:py-20'>
          <div className='flex w-full flex-col items-start justify-center text-center md:px-10 xl:mt-[10%]'>
            <h2 className='w-full text-start text-xl leading-5 text-white md:text-2xl lg:text-4xl'>
              {' '}
              {offerBannerData?.offerTitle} <br />
              <span className='mb-5 text-2xl leading-5 text-white md:text-3xl lg:text-6xl'>
                {offerBannerData?.offerSubtitle}
              </span>
            </h2>
            <div
              className='mt-10 text-start text-xs text-white md:w-[600px] md:text-lg'
              dangerouslySetInnerHTML={{
                __html: offerBannerData?.offerDescription,
              }}
            ></div>
          </div>
        </div>
        <div className='mt-10 lg:mt-[40%]'>
          <OfferSection featuredData={featuredData} />
        </div>
      </section>
    </div>
  );
}
