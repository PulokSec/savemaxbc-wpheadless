import React from 'react';

type MyProps = {
  choiceBannerData: any;
};
export default function ChoiceBanner(props: MyProps) {
  const { choiceBannerData } = props;
  console.log(choiceBannerData);
  return (
    <div>
      <div
        style={{
          background: `url(${choiceBannerData?.bannerImage?.sourceUrl}) no-repeat center center`,
          backgroundSize: '100% 100%',
        }}
        className='mb-10 mt-10 h-[45vh] lg:mt-20'
      >
        <div className='mx-auto max-w-[1250px] p-3 py-36 text-center '>
          <h2 className='text-[40px] font-semibold'>
            {choiceBannerData?.bannerTitle} <br />
            <span className='text-[30px] font-semibold'>
              {choiceBannerData?.bannerSubtitle}
            </span>
          </h2>

          <div
            className='mx-auto w-full md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: choiceBannerData?.bannerDescription,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
