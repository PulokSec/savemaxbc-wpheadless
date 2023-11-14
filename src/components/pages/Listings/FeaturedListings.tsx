'use client';
import React, { useEffect, useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import ListingCarousel from '@/components/pages/Listings/ListingCarousel';

type MyProps = {
  allPosts: Array<any>;
  // totalCount: number;
  // currentPageID: number;
  titleData: any;
  topHead?: any;
  listingDescription?: any;
  usingFor?: any;
};
interface PostData {
  post: any;
  cardImageUrl: any;
}
export default function FeaturedListings(props: MyProps) {
  const { allPosts, titleData, usingFor, topHead, listingDescription } = props;
  const [postData, setPostData] = useState<PostData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        allPosts?.map(async (post: any) => {
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
  }, [allPosts]);
  return (
    <div>
      <section className='mx-auto mt-20 lg:mt-40'>
        <div className='mt-20'>
          {usingFor === 'listings' && (
            <h1 className='text-center text-lg md:text-5xl'>
              {titleData?.recentListingsTitle?.split(/ (.*)/)[0]}{' '}
              <span className='text-bold text-leading-3 text-[#525659]'>
                {titleData?.recentListingsTitle?.split(/ (.*)/)[1]}
              </span>
            </h1>
          )}
          {topHead && listingDescription ? (
            <div className=''>
              <p className='text-bold text-md mt-5 w-full text-center text-[#525659] md:text-xl lg:text-2xl'>
                {topHead}
              </p>
              <h1 className='mt-5 text-center text-lg md:text-4xl'>
                {titleData?.recentListingsTitle}
              </h1>
              <div
                className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: listingDescription,
                }}
              ></div>
            </div>
          ) : topHead ? (
            <>
              <p className='text-bold text-md mt-2 w-full text-[#525659] md:text-xl lg:text-2xl'>
                {topHead}
              </p>
              <h1 className='text-center text-lg md:text-5xl'>
                {titleData?.recentListingsTitle}
              </h1>
            </>
          ) : listingDescription ? (
            <>
              <h1 className='text-center text-lg md:text-5xl'>
                {titleData?.recentListingsTitle}
              </h1>
              <div
                className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: listingDescription,
                }}
              ></div>
            </>
          ) : null}
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20 lg:mt-40'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.detachedHomesTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              {titleData?.detachedHomesTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.semiDetachedTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              {titleData?.semiDetachedTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.rentalHomesTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              {titleData?.rentalHomesTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
      </section>
    </div>
  );
}
