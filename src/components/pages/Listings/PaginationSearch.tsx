'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import '../../../styles/carousel.css';

import { getPhotos } from '@/lib/dataFetching';

import NextImage from '@/components/NextImage';
import Pagination from '@/components/utils/Pagination';
import useQueryParams from '@/components/utils/useQueryParams';

type MyProps = {
  allPosts: Array<any>;
  totalCount: number;
  currentPageID: number;
};
export default function PaginationSearch(props: MyProps) {
  const { allPosts, totalCount, currentPageID } = props;
  const totalPages = Math.ceil(totalCount / 12);
  const [currentPage, setCurrentPage] = useState<number>(currentPageID);
  const [posts, setPosts] = useState(allPosts);
  const router = useRouter();
  const { setQueryParam } = useQueryParams();

  const handlePageClick = (selected: number) => {
    setCurrentPage(selected);
    setQueryParam('page', selected.toString());
  };

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

      setPosts(data);
    }

    fetchData();
  }, [allPosts]);
  return (
    <div>
      <section className='mt-20 lg:mt-40'>
        <div className='mt-8 grid grid-cols-1 gap-x-4 gap-y-10 pb-10 md:grid-cols-2 lg:grid-cols-3 2xl:mt-32 2xl:grid-cols-4'>
          {posts?.map(({ post, cardImageUrl }: any) => {
            return (
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
                className='card2-width mx-auto flex h-[450px] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-white hover:shadow-2xl hover:shadow-slate-800 md:h-[500px]'
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
                    {post?.StreetAddress} {post?.CommunityName}{' '}
                    {post?.PostalCode}
                  </p>
                  <p className='mt-2 font-medium text-gray-800 md:text-[18px] 2xl:text-[20px]'>
                    {parseFloat(post?.Price).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    $
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
            );
          })}
        </div>
        <div className='flex items-center justify-center mb-20 md:mb-28'>
          <Pagination
            currentPage={currentPage}
            maxLength={6}
            lastPage={totalPages}
            setCurrentPage={handlePageClick}
          />
        </div>
      </section>
    </div>
  );
}
