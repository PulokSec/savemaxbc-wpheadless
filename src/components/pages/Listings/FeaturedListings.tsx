'use client';
import React, { useEffect, useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import ListingCarousel from '@/components/pages/Listings/ListingCarousel';

type MyProps = {
  allPosts: Array<any>;
  // totalCount: number;
  // currentPageID: number;
};
interface PostData {
  post: any;
  cardImageUrl: any;
}
export default function FeaturedListings(props: MyProps) {
  const { allPosts } = props;
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
            Surrey{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              Recent Listings
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            Surrey{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              Detached Homes
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            Surrey{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              Semi Detached Homes
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            Surrey{' '}
            <span className='text-bold text-leading-3 text-[#525659]'>
              Rental Homes
            </span>
          </h2>
          <ListingCarousel posts={postData} />
        </div>
      </section>
    </div>
  );
}
