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
export default function SharedBanner(props: MyProps) {
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mt-20 flex flex-col items-center justify-center md:mt-40 lg:mt-60'>
        <div className='py-16'>
          <div className='flex w-full flex-col items-center justify-center px-5 lg:px-10'>
            <p className='w-full text-center text-xl font-bold uppercase leading-5 text-white md:text-4xl lg:text-6xl'>
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
        {topTitle && topDesc ? (
          <div className=' container relative mx-auto mt-4 w-full rounded-b-xl bg-transparent px-5 py-3 text-center shadow-none md:mt-40 lg:mt-[18%] lg:w-[80%] lg:bg-white lg:shadow-md '>
            <div
              className='md:text-md mt-5 text-xs leading-6 text-white lg:text-lg lg:text-[#061632]'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            {topTitle === 'Contact us now!' ? (
              <div className=''>
                <div className='mt-1 flex items-center justify-center'>
                  <a
                    href='/contact-us'
                    className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                  >
                    Contact us now!
                  </a>
                </div>
              </div>
            ) : (
              <div className=''>
                <p className='text-md mt-2 w-full font-bold text-white md:text-xl lg:text-2xl lg:text-[#061632]'>
                  {topTitle}
                </p>
                <div className='mb-2 mt-4 flex items-center justify-center lg:my-2'>
                  <a
                    href='/contact-us'
                    className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                  >
                    Contact us now!
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : topTitle ? (
          <div className='container relative mx-auto mt-[40%] w-[80%] rounded-b-xl bg-white px-5 py-3 text-center shadow-md md:mt-[20%] xl:mt-[5%] 2xl:mt-[16%]'>
            <div className=''>
              <p className='text-md mt-2 w-full font-bold text-white md:text-xl lg:text-2xl lg:text-[#061632]'>
                {topTitle}
              </p>
              <div className='mt-1 flex items-center justify-center'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Contact us now!
                </a>
              </div>
            </div>
          </div>
        ) : topDesc ? (
          <div className='container relative mx-auto w-full rounded-b-xl bg-transparent px-5 py-3 text-center shadow-none md:mt-[17%] lg:w-[80%] lg:bg-white lg:shadow-md'>
            <div
              className='md:text-md mt-5 text-xs font-bold font-medium leading-6 text-white lg:text-lg lg:text-[#061632]'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            <div className=''>
              <p className='text-md mt-2 w-full font-bold md:text-xl lg:text-2xl'>
                {topTitle}
              </p>
              <div className='mb-2 mt-4 flex items-center justify-center lg:my-2'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Contact us now!
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {usingFor === 'seller' && (
          <div className='container relative mx-auto mt-[20%] flex w-[80%] flex-col items-center justify-center rounded-b-xl bg-white px-5 py-3 text-center shadow-md md:mt-[40%] lg:mt-[18%] lg:py-10'>
            <h1 className='w-full text-center text-2xl md:text-3xl lg:text-5xl'>
              <span className='text-[#585858]'>{featureTitle}</span>{' '}
              {featureSubtitle}
            </h1>
            <div className='mt-3 flex items-center justify-center'>
              <a
                href='/contact-us'
                className='text-uppercase rounded-xl border border-solid bg-[#061632] px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
              >
                Contact us now!
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
