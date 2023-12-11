'use client';
import { Dot, KeyRound, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from '@/components/shared/Header';

type MyProps = {
  navigation: any;
  allImages: any;
  headerData: any;
  settingsData: any;
};
export default function SingleListingBanner(props: MyProps) {
  const { allImages, headerData, settingsData } = props;
  const [loginModal, setLoginModal] = useState(false);
  const firstbufferOriginal = Buffer.from(allImages[0].Photos.data);
  const firstImageUrl = JSON.parse(firstbufferOriginal.toString('utf8'))
    ?.LargePhoto?.filename;
  const secondbufferOriginal = Buffer.from(allImages[1].Photos.data);
  const secondImageUrl = JSON.parse(secondbufferOriginal.toString('utf8'))
    ?.LargePhoto?.filename;
  return (
    <div className='relative'>
      <Header settingsData={settingsData} navigation={headerData} />

      <div className='mx-auto flex w-full flex-col items-center justify-center gap-2 p-5 md:flex-row md:p-3 lg:p-5 '>
        <div className='relative h-[350px] w-full rounded-xl md:w-1/2 lg:h-[350px] xl:h-[500px]'>
          <Image
            src={firstImageUrl}
            fill={true}
            alt='First Image'
            className='rounded-xl object-cover'
            priority={true}
          />
        </div>
        <div
          className='flex h-[350px] w-full items-center justify-center rounded-xl bg-cover bg-fixed bg-[center_center] bg-no-repeat md:w-1/2 lg:h-[350px] xl:h-[500px]'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${secondImageUrl})`,
          }}
        >
          <div className='mx-auto flex h-[90%] w-[95%] flex-col items-start justify-center rounded-xl bg-white pl-8'>
            <h3 className='mb-2 flex items-center gap-x-3 text-xl text-gray-800 md:mb-3 lg:text-3xl'>
              Free Account Required <KeyRound />
            </h3>
            <p className='text-gray-800'>
              Join millions of Canadians searching for homes
            </p>
            <ul className='my-6 -ml-3 text-gray-800'>
              <li className='flex items-center '>
                <Dot className='h-8 w-8' />
                Faster listings than everyone
              </li>
              <li className='flex items-center '>
                <Dot className='h-8 w-8' />
                See 27% more homes & sold history
              </li>
              <li className='flex items-center '>
                <Dot className='h-8 w-8' />
                Instant access to photos & features
              </li>
            </ul>
            <div
              onClick={() => setLoginModal(true)}
              className='w-[225px] cursor-pointer rounded-lg bg-sky-900 px-4 py-2 text-center font-semibold text-white transition-all duration-500 ease-in-out  hover:text-[17px] hover:tracking-wide'
            >
              Login to see all photos!
            </div>
          </div>
        </div>
      </div>
      {loginModal && (
        <div className='absolute left-1/2 top-2/3 mx-auto flex h-[350px] w-11/12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-sky-900 md:h-[400px] md:w-[600px] lg:top-1/2'>
          <div className='relative  '>
            <div className='fixed right-3 top-3'>
              <X
                onClick={() => setLoginModal(false)}
                className=' h-6 w-6 cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-125'
              />
            </div>
          </div>
          <div>
            <h3 className='mb-1 text-white'>Please Login First</h3>
            <p className='mb-4 text-white'>
              Join millions of Canadians searching for homes
            </p>
            <div className='flex flex-col items-center justify-center'>
              <input
                className='mb-3 h-10 w-[300px] rounded-lg border border-gray-200 bg-white bg-opacity-80 text-[15px] focus:outline-none md:h-12 md:w-[400px] md:text-base'
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
              />
              <input
                className='mb-3 h-10 w-[300px] rounded-lg border border-gray-200 bg-white bg-opacity-80 text-[15px] focus:outline-none md:h-12 md:w-[400px] md:text-base'
                type='password'
                name='password'
                id='password'
                placeholder='Password'
              />
              <button
                className='h-10 w-[300px] rounded-lg bg-sky-700 font-medium tracking-wide text-white hover:bg-opacity-70 hover:text-gray-200 md:h-12 md:w-[400px] lg:text-lg'
                type='submit'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <Carousel
        className='mx-auto h-[350px] w-full md:h-[500px] lg:h-[700px] '
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
      >
        {allImages?.map((img: any, idx: number) => {
          const bufferOriginal = Buffer.from(img.Photos.data);
          const imageUrl = JSON.parse(bufferOriginal.toString('utf8'))
            ?.LargePhoto?.filename;
          return (
            <div
              key={idx}
              className='mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[500px] '
            >
              <Image
                src={imageUrl}
                fill={true}
                alt={img?.altName}
                className='object-cover'
                priority={true}
              />
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
}
