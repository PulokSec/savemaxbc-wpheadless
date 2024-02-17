'use client';
import React, { useRef, useState } from 'react';
import { GrLocation } from 'react-icons/gr';

import useQueryParams from '@/components/utils/useQueryParams';

const OurListingMapTab = () => {
  const [mapField, setMapField] = useState('');
  const domNode: any = useRef();
  const { setQueryParam } = useQueryParams();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (mapField?.length > 0) {
      setQueryParam('query', mapField);
    }
  };
  const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapField(e.target.value);
  };
  return (
    <div className='container mx-auto my-10 w-full px-5 md:my-14 md:max-w-[1400px]'>
      <div
        className='mx-auto w-full rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white p-3 shadow md:w-[600px] md:p-5'
        ref={domNode}
      >
        <div>
          <form
            onSubmit={(e: any) => handleSubmit(e)}
            className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2'
          >
            <div className='search flex w-[300px] items-center rounded border-2 bg-gray-200 px-3 py-1 md:w-[450px]'>
              <GrLocation className='mr-1 text-gray-400 ' />
              <input
                className='w-full border-none bg-gray-200 outline-none'
                type='text'
                placeholder='Enter search location'
                onChange={handleMapChange}
              />
            </div>
            <div className=''>
              <div
                onClick={handleSubmit}
                className='search flex w-[130px] cursor-pointer items-center justify-center rounded-[5px] border-2 bg-gray-900 px-3 py-3.5 text-center text-white'
              >
                <p className='text-md'>Search</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OurListingMapTab;