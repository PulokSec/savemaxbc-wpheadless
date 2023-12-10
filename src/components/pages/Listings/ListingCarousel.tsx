'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import CarouselComponent from '@/components/carousel/CarouselComponent';
import NextImage from '@/components/NextImage';

type MyProps = {
  posts: Array<any>;
};
interface PostData {
  post: any;
  cardImageUrl: any;
}
export default function ListingCarousel(props: MyProps) {
  const { posts } = props;
  const [postData, setPostData] = useState<PostData[]>([]);
  // console.log(posts);
  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        posts?.map(async (post: any) => {
          const image = await getPhotos({ listingId: post?.ListingID });
          const bufferOriginal = Buffer.from(image[0].Photos.data);
          const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
            ?.LargePhoto?.filename;

          return {
            post,
            cardImageUrl,
          };
        })
      );

      setPostData(data);
    }

    fetchData();
  }, [posts]);

  const router = useRouter();
  return (
    <>
      <div className='relative mt-7 md:mt-20'>
        <CarouselComponent>
          {postData?.map(({ post, cardImageUrl }: any) => (
            <div
              onClick={() =>
                router.push(
                  `/listing/${post?.StreetAddress?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${post?.City?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${post?.Province?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${post?.PostalCode}-${post?.ListingID}`
                )
              }
              key={post?.ListingID}
              className='mx-auto flex h-[450px] w-[300px] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-white hover:shadow-2xl hover:shadow-slate-800 md:h-[480px] md:w-full'
              style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
            >
              <div className='flex items-end justify-end'>
                <div
                  className='absolute z-10 mb-[-50px] w-[100px] origin-top bg-yellow-500 text-end'
                  // style={{ transform: 'translateX(50%) rotate(45deg)' }}
                >
                  <p className='z-5 relative top-0 px-5 text-center text-lg font-semibold text-white'>
                    {post?.TransactionType}
                  </p>
                </div>
              </div>
              <div className='relative'>
                <NextImage
                  useSkeleton
                  className='relative h-[275px] w-full rounded-lg'
                  src={cardImageUrl}
                  layout='fill'
                  alt='Icon'
                />
              </div>
              <div className='desc p-3 text-start text-black'>
                <p className='mt-2 text-[20px] font-semibold text-black'>
                  {post?.DdfListingID} {post?.CommunityName} {post?.PostalCode}
                </p>
                <p className='mt-2 font-medium text-gray-800 md:text-[18px] 2xl:text-[20px]'>
                  {post?.Price} $
                </p>
              </div>

              <div className='flex items-center justify-start gap-2 px-3 text-black'>
                {/* {post?.BedroomsTotal && (
                  
                )} */}
                <p className='text-[15px]'>{post?.BedroomsTotal} Bedroom</p>
                <p className='text-[15px]'>{post?.BathroomTotal} Bathroom</p>
                {post?.lease && (
                  <p className='text-[15px]'>{post?.lease} Sqft</p>
                )}
              </div>
              <p className='px-3 text-[15px] capitalize text-black'>
                {post?.City}/{post?.Province}
              </p>
              <p className='px-3 text-[15px] text-black'>
                {post?.Features} {post?.WaterFrontType}
              </p>
              <p className='mt-2 px-3 text-[11px] font-semibold tracking-wide text-gray-700'>
                MLS&reg; Number{post?.DdfListingID}
              </p>
            </div>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
}
