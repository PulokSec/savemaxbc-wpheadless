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
        className='mb-10 mt-10 flex h-[300px] flex-col items-center justify-center md:h-[400px] lg:mt-20 lg:h-[500px] 2xl:h-[700px]'
      >
        <div className='mx-auto max-w-[1250px] px-2 pt-20 text-center lg:py-36 '>
          <h2 className='text-[30px] font-semibold md:mt-5 xl:text-[40px]'>
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
