'use client';
import { useRouter } from 'next/navigation';
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
export default function LocationBanner(props: MyProps) {
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
  const router = useRouter();
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-fixed bg-[center_center] bg-no-repeat lg:h-[100vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='py-16'>
        <div className='mt-[15%] flex w-full flex-col items-center justify-center px-5 md:mt-[25%] lg:mt-[15%] lg:px-10'>
          <p className='mb-2 w-full text-center text-lg font-bold leading-7 text-white lg:text-3xl'>
            {bannerData?.bannerSubhead}
          </p>
          <p className='mx-auto w-full max-w-[1200px] text-center text-xl md:text-4xl font-bold leading-6 text-white lg:text-6xl lg:leading-[60px]'>
            {bannerData?.bannerHeading}
          </p>
          {bannerData?.bannerDescription && (
            <div
              className='mx-auto mt-8 max-w-[1200px] text-center text-lg md:text-xl font-semibold text-white lg:text-3xl'
              dangerouslySetInnerHTML={{
                __html: bannerData?.bannerDescription,
              }}
            ></div>
          )}
        </div>
      </div>
      {topTitle && topDesc ? (
        <>
          <div className='container absolute left-1/2 mx-auto hidden w-[80%] -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-3 text-center shadow-md md:-bottom-48 md:block lg:-bottom-56 xl:-bottom-48 2xl:-bottom-40 '>
            <div
              className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            <p
              onClick={() => router.push('/properties-listing')}
              className='text-md mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
            >
              {topTitle}
            </p>
          </div>
          <div className='container mx-auto w-[87%] bg-white p-3 text-center shadow-md md:hidden '>
            <div
              className='md:text-md mt-2 text-xs leading-6 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html: topDesc,
              }}
            ></div>
            <p
              onClick={() => router.push('/properties-listing')}
              className='text-md mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
            >
              {topTitle}
            </p>
          </div>
        </>
      ) : topTitle ? (
        <div className='container relative mx-auto mt-[40%] w-[80%] bg-white px-5 py-3 text-center shadow-md md:mt-[20%] xl:mt-[5%] 2xl:mt-[16%]'>
          <p
            onClick={() => router.push('/properties-listing')}
            className='text-md mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
          >
            {topTitle}
          </p>
        </div>
      ) : topDesc ? (
        <div className='container relative mx-auto mt-[40%] w-[80%] bg-white px-5 py-3 text-center shadow-md md:mt-[20%] xl:mt-[5%] 2xl:mt-[16%]'>
          <div
            className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: topDesc,
            }}
          ></div>
          <p
            onClick={() => router.push('/properties-listing')}
            className='text-md mt-2 w-full cursor-pointer font-bold md:text-xl lg:text-2xl'
          >
            {topTitle}
          </p>
        </div>
      ) : null}
      {usingFor === 'seller' && (
        <div className='container relative mx-auto mt-[40%] w-[80%] rounded-b-xl bg-white px-5 py-3 text-center shadow-md lg:mt-[20%] lg:py-10 xl:mt-[5%] 2xl:mt-[16%]'>
          <h1 className='w-full text-center text-2xl md:text-3xl lg:text-5xl'>
            <span className='text-[#585858]'>{featureTitle}</span>{' '}
            {featureSubtitle}
          </h1>
        </div>
      )}
    </div>
  );
}
