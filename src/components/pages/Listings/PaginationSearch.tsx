'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
  console.log(totalPages);
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
      <section className='mt-20'>
        <div className='mt-8 xl:mt-20 grid grid-cols-1 gap-x-4 gap-y-10 pb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
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
                className='mx-auto flex h-[430px] w-[290px] cursor-pointer flex-col justify-around overflow-hidden rounded border-2 border-gray-300'
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
                    useSkeleton={true}
                    className='relative h-[150px] w-full'
                    src={cardImageUrl}
                    layout='fill'
                    alt='Icon'
                  />
                </div>
                <div className='desc p-3 text-start text-black'>
                  <p className='mt-2 text-[20px] font-semibold text-black'>
                    {post?.StreetAddress}
                  </p>
                  <p className='mt-2 text-[12px] capitalize text-gray-500'>
                    {post?.City}/{post?.Province}
                  </p>
                  <p className='mt-2 text-gray-500 md:text-[11px]'>
                    {post?.Features} {post?.WaterFrontType}
                  </p>
                </div>
                <div className='desc p-3 text-start text-black'>
                  <p className='mt-2 text-gray-500 md:text-[18px]'>
                    {post?.Price} $
                  </p>
                </div>
                <div className='mt-2 flex items-center justify-center gap-4 px-5 text-white'>
                  {post?.BedroomsTotal && (
                    <p className='w-full rounded border bg-[#082f49] text-center text-[8px]'>
                      {post?.BedroomsTotal} Bedroom
                    </p>
                  )}
                  {post?.BathroomTotal && (
                    <p className='w-full rounded border bg-[#082f49] text-center text-[8px]'>
                      {post?.BathroomTotal} Bathroom
                    </p>
                  )}
                  {post?.lease && (
                    <p className='w-full rounded border bg-[#082f49] text-center text-[8px]'>
                      {post?.lease} Sqft
                    </p>
                  )}
                </div>
                <p className='mt-2 px-5 text-[10px]'>
                  MLS&reg; Number{post?.DdfListingID}
                </p>
              </div>
            );
          })}
        </div>
        <div className='flex items-center justify-center'>
          <Pagination
            currentPage={currentPage}
            maxLength={10}
            lastPage={totalPages}
            setCurrentPage={handlePageClick}
          />
        </div>
      </section>
    </div>
  );
}
