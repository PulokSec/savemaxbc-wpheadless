import React from 'react';

type MyProps = {
  choiceBannerData: any;
};
export default function ChoiceBanner(props: MyProps) {
  const { choiceBannerData } = props;
  // console.log(choiceBannerData);
  return (
    <div>
      <div
        style={{
          background: `url(${choiceBannerData?.bannerImage?.sourceUrl}) no-repeat center center`,
          backgroundSize: '100% 100%',
        }}
        className='mb-10 mt-10 h-[45vh] lg:mt-20'
      >
        <div className='mx-auto max-w-[1250px] px-2 pt-28 md:py-36 text-center '>
          <h2 className='md:mt-5 text-[30px] font-semibold xl:text-[40px]'>
            {choiceBannerData?.bannerTitle} <br />
            <span className='mt-5 text-[20px] font-semibold xl:text-[30px]'>
              {choiceBannerData?.bannerSubtitle}
            </span>
          </h2>

          <div
            className='mx-auto mt-5 w-full md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: choiceBannerData?.bannerDescription,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
