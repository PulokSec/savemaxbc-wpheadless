'use client';
import React, { useEffect, useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import ListingCarousel from '@/components/pages/Listings/ListingCarousel';

type MyProps = {
  allPosts: Array<any>;
  // totalCount: number;
  // currentPageID: number;
  titleData: any;
};
interface PostData {
  post: any;
  cardImageUrl: any;
}
export default function FeaturedListings(props: MyProps) {
  const { allPosts, titleData } = props;
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
      <section className='mx-auto mt-20'>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.recentListingsTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              {titleData?.recentListingsTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
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
