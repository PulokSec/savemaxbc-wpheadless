'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import RealtorCard from '@/components/elements/RealtorCard';

type Props = {
  allRealtors: any;
};

const AllRealtorsSection = (props: Props) => {
  const { allRealtors } = props;
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  const [part, setPart] = useState(1);
  const [realtors, setRealtors] = useState<any>(
    allRealtors?.realtorCard?.slice(0, 8)
  );
  const router = useRouter();
  useEffect(() => {
    const begin = (part - 1) * 9;
    const end = part * 9;
    setRealtors(allRealtors?.realtorCard?.slice(begin, end));
  }, [part, allRealtors?.realtorCard]);

  const scrollToFirstDiv = () => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (index: number) => {
    setPart(index + 1);
    scrollToFirstDiv();
    // router.push(`/find-a-realtor?page=${index + 1}`);
    // router.push(`/find-a-realtor?page=${index + 1}`).then(() => {
    //   scrollToFirstDiv(); // Scroll after route change
    // });
  };

  return (
    <div className='mt-40' ref={firstDivRef}>
      <h2
        className=' px-2 pt-5 text-center text-2xl text-gray-800 md:mb-20 md:text-3xl lg:text-5xl'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.title,
        }}
      ></h2>
      <div
        className='mx-auto mt-5 max-w-[1400px] px-5 text-xs leading-5 text-[#515151] md:text-lg'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.description,
        }}
      ></div>
      <div className='mx-auto max-w-[1400px] px-3'>
        <div className='mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-y-14'>
          {realtors?.map(
            (item: any, index: number) =>
              item?.image && (
                <RealtorCard item={item} index={index} key={index} />
              )
          )}
        </div>
        <div className='flex items-center justify-center gap-3'>
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              className='rounded-full bg-sky-950 px-3 py-1 text-white hover:bg-sky-900 focus:bg-sky-900'
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

export default AllRealtorsSection;
