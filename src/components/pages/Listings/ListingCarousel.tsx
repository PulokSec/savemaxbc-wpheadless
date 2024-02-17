'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import '../../../styles/carousel.css';

import CarouselComponent from '@/components/carousel/CarouselComponent';
import NextImage from '@/components/NextImage';
import ListingSkeleton from '@/components/pages/Listings/ListingSkeleton';

type MyProps = {
  posts: Array<any>;
};
interface PostData {
  post: any;
  cardImageUrl: any;
}
interface ResponsiveConfig {
  max: number;
  min: number;
  items: number;
}
export default function ListingCarousel(props: MyProps) {
  const { posts } = props;
  const [postData, setPostData] = useState<PostData[]>([]);
  const getRepeatCount = () => {
    if (typeof window === 'undefined') {
      return;
    }
    const responsive: Record<string, ResponsiveConfig> = {
      superLargeDesktop: { max: 4000, min: 3000, items: 5 },
      desktop: { max: 3000, min: 1800, items: 4 },
      laptop: { max: 1799, min: 1200, items: 3 },
      tablet: { max: 1199, min: 676, items: 2 },
      mobile: { max: 675, min: 0, items: 1 },
    };

    const screenWidth = window.innerWidth;

    for (const breakpoint in responsive) {
      const { min, max, items } = responsive[breakpoint];
      if (screenWidth >= min && screenWidth <= max) {
        return items;
      }
    }
    return 1;
  };

  const repeatCount = postData?.length === 0 ? getRepeatCount() : 0;

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        posts?.map(async (post: any) => {
          // const image = await getPhotos({ listingId: post?.ListingID });
          // const bufferOriginal = Buffer.from(image[0].Photos.data);
          // const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
          //   ?.LargePhoto?.filename;
          const cardImageUrl = post?.photo_url;
          post.city = post?.property_details?.City;
          post.province = post?.property_details?.Province;
          post.postalCode = post?.property_details?.PostalCode;
          post.communityName = post?.property_details?.CommunityName;
          post.bedroomsTotal = post?.property_details?.BedroomsTotal;
          post.bathroomTotal = post?.property_details?.BathroomTotal;
          post.price = post?.property_details?.Price;
          post.ddfListingID = post?.property_details?.DdfListingID;
          post.type = post?.property_details?.Type;
          post.transactionType = post?.property_details?.TransactionType;
          post.lastUpdated = post?.property_details?.LastUpdated;
          post.streetAddress = post?.property_details?.StreetAddress;
          post.lease = post?.property_details?.Lease;
          post.latitude = post?.property_details?.Latitude;
          post.longitude = post?.property_details?.Longitude;
          post.listingID = post?.property_details?.ListingID;

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

  // console.log('posts', posts);
  return (
    <>
      <div className='relative mt-7 py-5 md:mt-10'>
        {postData?.length === 0 && (
          <div className='flex items-center justify-center gap-5 2xl:gap-10'>
            {[...Array(repeatCount)].map((_, index) => (
              <ListingSkeleton key={index} />
            ))}
          </div>
        )}
        <CarouselComponent>
          {postData?.map(({ post, cardImageUrl }: any) => (
            <Link
              key={post?.listingID}
              target='_blank'
              href={`/listing/${post?.streetAddress
                ?.replaceAll(' ', '-')
                .replaceAll('#', '')
                .toLowerCase()}-${post?.city
                ?.replaceAll(' ', '-')
                .toLowerCase()}-${post?.province
                ?.replaceAll(' ', '-')
                .toLowerCase()}-${post?.postalCode}-${post?.listingID}`}
              className='card-width mx-auto flex h-[450px] cursor-pointer flex-col justify-start rounded-lg bg-white shadow hover:shadow-2xl hover:shadow-slate-800 md:h-[480px] '
              style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
            >
              <div className='flex items-end justify-end'>
                <div
                  className='relative z-10 mb-[-50px] w-[100px] origin-top bg-yellow-500 text-end uppercase'
                  // style={{ transform: 'translateX(50%) rotate(45deg)' }}
                >
                  <p className='z-5 relative top-0 px-5 text-center text-lg font-semibold text-white'>
                    {post?.transactionType}
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
                  {post?.streetAddress} {post?.communityName} {post?.postalCode}
                </p>
                <p className='mt-2 font-medium text-gray-800 md:text-[18px] 2xl:text-[20px]'>
                  ${' '}
                  {parseFloat(post?.price).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                </p>
              </div>

              <div className='flex items-center justify-start gap-2 px-3 text-black'>
                {/* {post?.BedroomsTotal && (
                  
                )} */}
                <p className='text-[15px]'>{post?.bedroomsTotal} Bedroom</p>
                <p className='text-[15px]'>{post?.bathroomTotal} Bathroom</p>
                {post?.lease && (
                  <p className='text-[15px]'>{post?.lease} Sqft</p>
                )}
              </div>
              <p className='px-3 text-[15px] capitalize text-black'>
                {post?.city}/{post?.province}
              </p>
              <p className='px-3 text-[15px] text-black'>
                {post?.Features} {post?.WaterFrontType}
              </p>
              <p className='mt-2 px-3 text-[11px] font-semibold tracking-wide text-gray-700'>
                MLS&reg; Number{post?.ddfListingID}
              </p>
            </Link>
          ))}
        </CarouselComponent>
      </div>
    </>
  );
}
