'use client';
import React from 'react';

import NewsCard from '@/components/elements/NewsCard';

type MyProps = {
  newsSection: any;
};
export default function NewsSection(props: MyProps) {
  const { newsSection } = props;
  console.log(newsSection);
  return (
    <div>
      <div
        className={` hidden bg-no-repeat  text-white md:block md:pt-[270px]`}
      >
        <div className='mx-auto mt-10 max-w-[1250px] p-3'>
          <div className='my-10 mt-36 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-20'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className={` block bg-no-repeat pt-[250px] text-white md:hidden`}>
        <div className='mx-auto max-w-[1250px] p-3 '>
          <div className='mt-20 grid grid-cols-1 gap-10 md:my-10 md:mt-36 md:grid-cols-3 md:gap-20'>
            {newsSection?.map((newsData: any, idx: any) => (
              <NewsCard newsData={newsData} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
