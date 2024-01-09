'use client';
import React, { useEffect, useRef, useState } from 'react';

import RealtorCard from '@/components/elements/RealtorCard';

type Props = { allRealtors: any };

const RealtorSearchResult = (props: Props) => {
  const { allRealtors } = props;
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const [part, setPart] = useState(1);
  const [realtors, setRealtors] = useState<any>(allRealtors?.slice(0, 8));

  useEffect(() => {
    const begin = (part - 1) * 8;
    const end = part * 8;
    setRealtors(allRealtors?.slice(begin, end));
  }, [part, allRealtors]);

  const scrollToFirstDiv = () => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (index: number) => {
    scrollToFirstDiv();
    setPart(index + 1);
  };
  // console.log('realtors', Math.ceil(allRealtors.length / 8));
  return (
    <div>
      <div className='mx-auto max-w-[1400px] px-3' ref={firstDivRef}>
        <h2 className=' mb-5 px-2 pt-5 text-center text-2xl text-gray-800 md:text-3xl lg:text-5xl'>
          Search Result
        </h2>
        <div className='mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-y-14'>
          {realtors.length === 0 && (
            <p className='mb-6 px-2 text-lg font-medium text-red-500 md:text-xl'>
              Sorry, No Realtors are found by your search query!
            </p>
          )}
          {realtors?.map((item: any, index: number) => (
            <RealtorCard item={item} index={index} key={index} />
          ))}
        </div>
        <div className='mb-10 flex items-center justify-center gap-3 lg:mb-20'>
          {[...Array(Math.ceil(allRealtors.length / 8))].map((_, index) => (
            <button
              key={index}
              className={`${
                part === index + 1
                  ? 'bg-sky-800'
                  : 'bg-sky-950 hover:bg-sky-900'
              } rounded-full px-3 py-1 text-white `}
              onClick={() => handleButtonClick(index)}
            >
              <p className='mt-1'>{index + 1}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealtorSearchResult;
