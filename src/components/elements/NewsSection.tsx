'use client';
import React, { useState } from 'react';

import NewsCard from '@/components/elements/NewsCard';
import Pagination from '@/components/utils/Pagination';
import useQueryParams from '@/components/utils/useQueryParams';
type MyProps = {
  newsSection: any;
  currentPageID: number;
  totalPages: number;
};
export default function NewsSection(props: MyProps) {
  const { newsSection, currentPageID, totalPages } = props;
  const [currentPage, setCurrentPage] = useState<number>(currentPageID);
  const { setQueryParam } = useQueryParams();
  // console.log(newsSection);

  const handlePageClick = (selected: number) => {
    setCurrentPage(selected);
    setQueryParam('page', selected.toString());
  };
  return (
    <div>
      <div className={` hidden bg-no-repeat  text-white md:block`}>
        <div className='mx-auto mt-10 max-w-[1500px] p-3'>
          <div className='my-10 mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-5 xl:gap-20 2xl:grid-cols-4 2xl:gap-7'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} index={idx + 1} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className={` block bg-no-repeat pt-0 text-white md:hidden`}>
        <div className='mx-auto max-w-[1250px] p-3 '>
          <div className='mt-10 grid grid-cols-1 gap-10 md:my-10 md:mt-36 md:grid-cols-3 md:gap-20'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} key={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Pagination
          currentPage={currentPage}
          maxLength={6}
          lastPage={totalPages}
          setCurrentPage={handlePageClick}
        />
      </div>
    </div>
  );
}
