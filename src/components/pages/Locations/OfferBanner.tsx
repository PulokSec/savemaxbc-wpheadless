import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  offerBannerData: any;
  featuredData: any;
};
export default function OfferBanner(props: MyProps) {
  const { offerBannerData, featuredData } = props;
  return (
    <div>
      <div
        style={{
          background: `url(${offerBannerData?.backgroundImage?.sourceUrl}) no-repeat `,
          backgroundSize: '100% 100%',
        }}
        className={` relative mt-10 py-[150px] text-white lg:mt-20`}
      >
        <div className='pb-30 mx-auto max-w-[1250px] p-3 py-20'>
          <h2 className='text-[30px] font-semibold leading-[40px]'>
            {offerBannerData?.offerTitle} <br />
            <span className='text-[40px]'>
              {offerBannerData?.offerSubtitle}
            </span>
          </h2>

          <div
            className='mt-5 md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: offerBannerData?.offerDescription,
            }}
          ></div>
        </div>
        <NextImage
          layout='fill'
          className='absolute bottom-[-80px] right-0 h-[300px] w-[600px]'
          src={offerBannerData?.offerImage?.sourceUrl}
          alt={offerBannerData?.offerImage?.altText}
        />
      </div>
    </div>
  );
}
