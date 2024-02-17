'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import '../../../styles/carousel.css';

import NextImage from '@/components/NextImage';
import Pagination from '@/components/utils/Pagination';
import useQueryParams from '@/components/utils/useQueryParams';

type MyProps = {
  allPosts: Array<any>;
  totalCount: number;
  currentPageID: number;
};
export default function ListingPagination(props: MyProps) {
  const { allPosts, totalCount, currentPageID } = props;
  const totalPages = Math.ceil(totalCount / 12);
  const [currentPage, setCurrentPage] = useState<number>(currentPageID);
  const { setQueryParam } = useQueryParams();
  console.log(allPosts);

  const handlePageClick = (selected: number) => {
    setCurrentPage(selected);
    setQueryParam('page', selected.toString());
  };

  return (
    <div>
      {allPosts && allPosts.length > 0 ? (
        <section className='mt-14 '>
          <div className='mt-8 grid grid-cols-1 gap-x-4 gap-y-10 px-2 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:px-4 2xl:mt-28 2xl:grid-cols-4 2xl:px-6'>
            {allPosts?.map((post: any) => {
              return (
                <Link
                  key={post?.ListingID}
                  target='_blank'
                  href={`/listing/${post?.StreetAddress
                    ?.replaceAll(' ', '-')
                    .replaceAll('#', '')
                    .toLowerCase()}-${post?.City
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${post?.Province
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${post?.PostalCode}-${post?.ListingID}`}
                  className='card-width mx-auto flex h-[480px] cursor-pointer flex-col justify-start rounded-lg bg-white shadow hover:shadow-2xl hover:shadow-slate-800 md:h-[480px] '
                  style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
                >
                  <div className='flex items-end justify-end'>
                    <div
                      className='relative z-10 mb-[-50px] w-[100px] origin-top bg-yellow-500 text-end uppercase'
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
                      src={post?.photo_url}
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
                      ${' '}
                      {parseFloat(post?.Price).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{' '}
                    </p>
                  </div>

                  <div className='flex items-center justify-start gap-2 px-3 text-black'>
                    {/* {post?.BedroomsTotal && (
                  
                )} */}
                    <p className='text-[15px]'>{post?.BedroomsTotal} Bedroom</p>
                    <p className='text-[15px]'>
                      {post?.BathroomTotal} Bathroom
                    </p>
                    {post?.property_details?.Lease && (
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
                </Link>
              );
            })}
          </div>
          <div className='mb-20 flex items-center justify-center md:mb-28'>
            <Pagination
              currentPage={currentPage}
              maxLength={6}
              lastPage={totalPages}
              setCurrentPage={handlePageClick}
            />
          </div>
        </section>
      ) : (
        <div className='flex h-[500px] items-center justify-center'>
          <p className='text-2xl font-semibold text-gray-500'>
            No Listings Found!
          </p>
        </div>
      )}
    </div>
  );
}
