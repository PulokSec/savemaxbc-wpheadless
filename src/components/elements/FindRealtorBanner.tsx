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
export default function FindRealtorBanner(props: MyProps) {
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
      <div className='flex h-[70vh] flex-col items-center justify-center lg:h-[100vh]'>
        <div className='py-8 md:py-16'>
          <div
            className={`${
              bannerData?.bannerDescription ? 'md:mb-[20%]' : 'md:mb-[10%]'
            }  flex h-[40vh] w-full flex-col items-center justify-center px-5 lg:h-[60vh] lg:px-10 -mt-20 md:mt-0`}
          >
            <p className='w-full text-center text-xl font-bold uppercase leading-5 text-white lg:text-6xl'>
              {bannerData?.bannerHeading}
            </p>
            {bannerData?.bannerDescription && (
              <div
                className='mt-8 text-center text-lg text-white lg:text-3xl font-semibold'
                dangerouslySetInnerHTML={{
                  __html: bannerData?.bannerDescription,
                }}
              ></div>
            )}
          </div>
        </div>
        {topTitle && topDesc ? (
          <div className='container relative mx-auto w-[80%] rounded-b-xl bg-white px-5 py-3 text-center shadow-md -mt-20 lg:-mt-24'>
            <div
              className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            {topTitle === 'Contact us now!' ? (
              <div className=''>
                <div className='mt-1 flex items-center justify-center'>
                  <a
                    href='/contact-us'
                    className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
                  >
                    Contact us now!
                  </a>
                </div>
              </div>
            ) : (
              <div className=''>
                <p className='text-md mt-2 w-full font-bold md:text-xl lg:text-2xl'>
                  {topTitle}
                </p>
                <div className='mt-1 flex items-center justify-center'>
                  <a
                    href='/contact-us'
                    className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
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
              <p className='text-md mt-2 w-full font-bold md:text-xl lg:text-2xl'>
                {topTitle}
              </p>
              <div className='mt-1 flex items-center justify-center'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Contact us now!
                </a>
              </div>
            </div>
          </div>
        ) : topDesc ? (
          <div className='container relative mx-auto w-[80%] rounded-b-xl bg-white px-5 py-3 text-center shadow-md '>
            <div
              className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            <div className=''>
              <p className='text-md mt-2 w-full font-bold md:text-xl lg:text-2xl'>
                {topTitle}
              </p>
              <div className='mt-1 flex items-center justify-center'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Contact us now!
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {usingFor === 'seller' && (
          <div className='container relative mx-auto mt-20 flex w-[80%] flex-col items-center justify-center rounded-b-xl bg-white px-5 py-3 text-center shadow-md lg:py-10'>
            <h1 className='w-full text-center text-2xl md:text-3xl lg:text-5xl'>
              <span className='text-[#585858]'>{featureTitle}</span>{' '}
              {featureSubtitle}
            </h1>
            <div className='mt-5 flex items-center justify-center'>
              <a
                href='/contact-us'
                className='text-uppercase rounded-xl border border-solid bg-sky-950 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
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
