'use client';
import React from 'react';

import CarouselComponent from '@/components/carousel/CarouselComponent';
import NextImage from '@/components/NextImage';

type MyProps = {
  posts: Array<any>;
};

export default function ListingCarousel(props: MyProps) {
  const { posts } = props;

  return (
    <>
      <div className='mt-10'>
        <CarouselComponent>
          {posts?.map(({ post, cardImageUrl }: any) => (
            <div
              key={post?.ListingID}
              className='mx-4 ml-3 flex h-[400px] w-[360px] flex-col justify-around rounded bg-white p-4 shadow-md md:ml-10 md:w-[300px] '
            >
              <p className='z-5 relative top-0 text-end text-lg font-semibold text-[#E2C379]'>
                {post?.TransactionType}
              </p>
              <div className='relative'>
                <NextImage
                  useSkeleton
                  className='h-20 w-40 object-cover md:h-[120px] md:w-[200px]'
                  src={cardImageUrl}
                  layout='fill'
                  alt='Icon'
                />
              </div>
              <div className=''>
                <h3 className='mt-2 text-xl font-semibold text-black'>
                  {post?.StreetAddress}
                </h3>
                <p className='mt-2 text-[12px] capitalize text-gray-500'>
                  {post?.City}/{post?.Province}
                </p>
                <p className='mt-2 text-gray-500 md:text-[11px]'>
                  {post?.Features} {post?.WaterFrontType}
                </p>
              </div>
              <div className='mt-2 flex items-center justify-center gap-4 text-white'>
                {post?.BedroomsTotal && (
                  <p className='w-full rounded border bg-teal-800 text-center text-[8px]'>
                    {post?.BedroomsTotal} Bedroom
                  </p>
                )}
                {post?.BathroomTotal && (
                  <p className='w-full rounded border bg-teal-800 text-center text-[8px]'>
                    {post?.BathroomTotal} Bathroom
                  </p>
                )}
                {post?.lease && (
                  <p className='w-full rounded border bg-teal-800 text-center text-[8px]'>
                    {post?.lease} Sqft
                  </p>
                )}
              </div>
              <p className='mt-2 text-[10px]'>
                MLS&reg; Number{post?.DdfListingID}
              </p>
            </div>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
}
