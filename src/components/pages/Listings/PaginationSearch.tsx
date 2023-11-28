'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { getPhotos } from '@/lib/dataFetching';

import NextImage from '@/components/NextImage';
import Pagination from '@/components/utils/Pagination';

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
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push('/property-listing?page=${page}');
  }
  console.log(currentPageID);
  // useEffect(() => {

  //   const fetchData = async () => {
  //     // const page = Math.min(currentPage + 1, totalPages);
  //     const result = await getAllProperties({ pageParam: currentPage });;
  //     setPosts(result.data);

  //   };
  //   fetchData();
  // }, [currentPage]);
  return (
    <div>
      <section className=''>
        <div className='mt-8 grid grid-cols-1 gap-4 pb-10 sm:grid-cols-3 lg:grid-cols-4'>
          {posts?.map(async (post: any) => {
            const image = await getPhotos({ listingId: post?.ListingID });
            const bufferOriginal = Buffer.from(image[0].Photos.data);
            const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
              ?.LargePhoto?.filename;
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
              className='mx-auto flex h-[400px] w-[290px] cursor-pointer flex-col justify-around overflow-hidden rounded border-2 border-gray-300'
            >
              <div className="flex justify-end items-end">
              <div
                className='w-[100px] origin-top bg-yellow-500 text-end absolute mb-[-50px] z-10'
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
        <Pagination
          currentPage={10}
          totalPages={totalPages}
          setCurrentPage={handlePageChange}
        />
      </section>
    </div>
  );
}
