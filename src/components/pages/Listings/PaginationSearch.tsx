'use client';
import React, { useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import PaginationButtons from '@/components/buttons/PaginationButton';
import NextImage from '@/components/NextImage';

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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const page = Math.min(currentPage + 1, totalPages);
  //     const result = await getAllProperties({ pageParam: 1 });;
  //     setPosts(result.data);

  //   };
  //   fetchData();
  // }, [currentPage]);
  return (
    <div>
      <section className='mx-auto lg:max-w-5xl'>
        <div className='container mt-8 grid grid-cols-1 gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-4'>
          {posts?.map(async (post: any) => {
            const image = await getPhotos({ listingId: post?.ListingID });
            const bufferOriginal = Buffer.from(image[0].Photos.data);
            const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
              ?.LargePhoto?.filename;
            return (
              <div
                key={post?.ListingID}
                className='flex flex-col justify-around rounded bg-white p-4 shadow-md md:h-[400px]'
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
            );
          })}
        </div>
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
}
