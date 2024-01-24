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
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-[80vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='flex h-[70vh] flex-col items-center justify-center md:h-[80vh]'>
        <div className='py-8 md:py-16'>
          <div
            className={`${
              bannerData?.bannerDescription ? 'md:mb-[20%]' : 'md:mb-[10%]'
            }  -mt-20 flex h-[40vh] w-full flex-col items-center justify-center px-5 md:mt-0 md:h-[45vh] lg:px-10`}
          >
            <p className='w-full text-center text-xl font-bold leading-5 tracking-wide text-white md:text-4xl lg:text-6xl xl:text-[66px] uppercase'>
              {bannerData?.bannerHeading}
            </p>
            {bannerData?.bannerDescription && (
              <div
                className='mt-8 text-center text-lg font-semibold tracking-wide text-white md:text-3xl lg:text-3xl'
                dangerouslySetInnerHTML={{
                  __html: bannerData?.bannerDescription,
                }}
              ></div>
            )}
          </div>
        </div>
        {topTitle && topDesc ? (
          <div className='container relative mx-auto -mt-20 w-[80%] rounded-b-xl bg-white px-5 py-3 text-center shadow-md lg:-mt-24'>
            <div
              className='md:text-md mt-3 text-xs leading-6 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            {topTitle === 'Contact us now!' ? (
              <div className=''>
                <div className='mt-2 flex items-center justify-center lg:mt-3'>
                  <a
                    href='/contact-us'
                    className='rounded-xl from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg font-bold hover:bg-gradient-to-r hover:text-transparent xl:text-3xl'
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
                    className='text-rounded-xl from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg font-bold hover:bg-gradient-to-r hover:text-transparent xl:text-3xl'
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
                  className='rounded-xl from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg font-bold   hover:bg-gradient-to-r hover:text-transparent xl:text-3xl'
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
                  className='text-rounded-xl from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg font-bold   hover:bg-gradient-to-r hover:text-transparent xl:text-3xl'
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
                className='text-rounded-xl from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg font-bold   hover:bg-gradient-to-r hover:text-transparent xl:text-3xl'
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
