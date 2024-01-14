'use client';
import Image from 'next/image';
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
      <div className={` hidden bg-no-repeat  text-white lg:block`}>
        {/* <div className='mx-auto mt-10 max-w-[1500px] p-3'>
          <div className='my-10 mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-5 xl:gap-20 2xl:grid-cols-4 2xl:gap-7'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} index={idx + 1} key={idx} />
            ))}
          </div>
        </div> */}
        <div
          className={`${
            newsSection[0] ? 'mt-20' : ''
          } relative mx-auto flex flex-row items-start justify-center p-3 lg:gap-4 xl:gap-10`}
        >
          {newsSection[2] ? (
            <>
              <div>
                <div className='flex lg:gap-4 xl:gap-10'>
                  <NewsCard newsData={newsSection[0]} index={1} />
                  <NewsCard newsData={newsSection[1]} index={2} />
                </div>
              </div>
              <NewsCard newsData={newsSection[2]} index={3} />
              <Image
                src='https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2024/01/line.png'
                width={100}
                height={5}
                alt='line'
                className='absolute bottom-4 left-0 mt-10 h-[6px] bg-sky-950 lg:w-4/6 xl:w-[61%]'
              />
            </>
          ) : (
            newsSection
              ?.slice(0, 2)
              .map((newsData: any, idx: any) => (
                <NewsCard newsData={newsData} index={idx + 1} key={idx} />
              ))
          )}
        </div>
        <div
          className={`${
            newsSection[3] ? 'mt-20' : ''
          } relative mx-auto flex flex-row items-start justify-center p-3 lg:gap-4 xl:gap-10`}
        >
          {newsSection[5] ? (
            <>
              <NewsCard newsData={newsSection[3]} index={4} />
              <div className='flex lg:gap-4 xl:gap-10'>
                <NewsCard newsData={newsSection[4]} index={5} />
                <NewsCard newsData={newsSection[5]} index={6} />
              </div>
              <Image
                src='https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2024/01/line.png'
                width={100}
                height={5}
                alt='line'
                className='absolute bottom-4 right-0 mt-10 h-[6px] bg-sky-950 lg:w-4/6 xl:w-[61%]'
              />
            </>
          ) : (
            newsSection
              ?.slice(3, 5)
              .map((newsData: any, idx: any) => (
                <NewsCard newsData={newsData} index={idx + 1} key={idx} />
              ))
          )}
        </div>
        <div
          className={`${
            newsSection[6] ? 'mt-20' : ''
          } relative mx-auto flex flex-row items-start justify-center p-3 lg:gap-4 xl:gap-10`}
        >
          {newsSection[8] ? (
            <>
              {' '}
              <NewsCard newsData={newsSection[6]} index={7} />
              <div className='flex lg:gap-4 xl:gap-10'>
                <NewsCard newsData={newsSection[7]} index={8} />
                <NewsCard newsData={newsSection[8]} index={9} />
              </div>
              <Image
                src='https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2024/01/line.png'
                width={100}
                height={5}
                alt='line'
                className='absolute bottom-4 left-0 mt-10 h-[6px] bg-sky-950 lg:w-4/6 xl:w-[61%]'
              />
            </>
          ) : (
            newsSection
              ?.slice(6, 8)
              .map((newsData: any, idx: any) => (
                <NewsCard newsData={newsData} index={idx + 1} key={idx} />
              ))
          )}
        </div>
        <div
          className={`${
            newsSection[9] ? 'mt-20' : ''
          } relative mx-auto flex flex-row items-start justify-center p-3 lg:gap-4 xl:gap-10`}
        >
          {newsSection[11] ? (
            <>
              <NewsCard newsData={newsSection[9]} index={10} />
              <div className='flex lg:gap-4 xl:gap-10'>
                <NewsCard newsData={newsSection[10]} index={11} />
                <NewsCard newsData={newsSection[11]} index={12} />
              </div>
              <Image
                src='https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2024/01/line.png'
                width={100}
                height={5}
                alt='line'
                className='absolute bottom-4 right-0 mt-10 h-[6px] bg-sky-950 lg:w-4/6 xl:w-[61%]'
              />
            </>
          ) : (
            newsSection
              ?.slice(9, 11)
              .map((newsData: any, idx: any) => (
                <NewsCard newsData={newsData} index={idx + 1} key={idx} />
              ))
          )}
        </div>
      </div>

      <div className={` block bg-no-repeat pt-0 text-white lg:hidden`}>
        <div className='mx-auto max-w-[1250px] p-3 '>
          <div className='mt-10 grid grid-cols-1 gap-10 md:my-10 md:mt-36 md:grid-cols-2 md:gap-10 md:p-3'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} key={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-20 flex items-center justify-center'>
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
