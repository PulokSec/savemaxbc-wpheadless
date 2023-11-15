import React from 'react';

type MyProps = {
  choiceBannerData: any;
};
export default function ChoiceBanner(props: MyProps) {
  const { choiceBannerData } = props;
  console.log(choiceBannerData);
  return (
    <div
      className='relative mt-20 w-full bg-cover bg-center'
      style={{
        backgroundImage: `url(${choiceBannerData?.bannerImage?.sourceUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <section>
        <div className='container mx-auto py-20 md:py-40'>
          <div className=' mt-80 flex w-full flex-col items-center justify-center text-center md:px-10'>
            <h2 className='w-full text-center text-xl leading-5 md:text-2xl lg:text-4xl'>
              {' '}
              <span className='mb-5 text-2xl leading-5 md:text-3xl lg:text-6xl'>
                {choiceBannerData?.bannerTitle} <br />
              </span>
              {choiceBannerData?.bannerSubtitle}
            </h2>
            <div
              className='mt-10 text-center text-xs md:text-lg'
              dangerouslySetInnerHTML={{
                __html: choiceBannerData?.bannerDescription,
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
