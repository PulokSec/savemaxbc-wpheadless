'use client';
import React, { useEffect, useRef, useState } from 'react';

import RealtorCard from '@/components/elements/RealtorCard';
import SearchByNameRealtorModal from '@/components/elements/SearchByNameRealtorModal';

type Props = {
  allRealtors: any;
};

const AllRealtorsSection = (props: Props) => {
  const { allRealtors } = props;
  const firstDivRef = useRef<HTMLDivElement | null>(null);
  const [nameSearchModal, setNameSearchModal] = useState(false);
  const [part, setPart] = useState(1);
  const [realtors, setRealtors] = useState<any>(
    allRealtors?.realtorCard?.slice(0, 8)
  );

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
    scrollToFirstDiv();
    setPart(index + 1);
  };

  return (
    <div className='mt-10 md:mt-24 lg:mt-20 xl:mt-40' ref={firstDivRef}>
      <h1
        className=' mb-5 px-2 pt-5 text-center text-2xl text-gray-800 md:text-3xl lg:text-5xl'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.title,
        }}
      ></h1>
      <div
        className='mx-auto mt-5 max-w-[1400px] px-5 text-xs leading-5 text-[#515151] md:text-lg'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.description,
        }}
      ></div>
      <div className='mx-auto mb-10 max-w-[1400px] px-3 md:mb-16'>
        <div className='flex items-center justify-center'>
          <p
            className='cursor-pointer rounded bg-black px-3 py-1 text-white hover:bg-gray-800'
            onClick={() => setNameSearchModal(true)}
          >
            Search by Name
          </p>
        </div>
      </div>
      {nameSearchModal && (
        <SearchByNameRealtorModal
          setNameSearchModal={setNameSearchModal}
          allRealtors={allRealtors?.realtorCard}
        />
      )}
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

export default AllRealtorsSection;
