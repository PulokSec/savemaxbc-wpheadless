import React from 'react';
import '../../../styles/carousel.css';

type Props = {};

const ListingSkeleton = (props: Props) => {
  return (
    <div
      className='card-width mx-auto flex h-[450px] cursor-pointer flex-col justify-start rounded-lg bg-black shadow hover:shadow-2xl hover:shadow-slate-800 md:h-[480px]  '
      style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
    >
      <div className='flex h-full w-full animate-pulse flex-col rounded-lg shadow-md'>
        <div className='h-64 rounded-t dark:bg-gray-700'></div>
        <div className='flex-1 space-y-4 px-4 py-8 dark:bg-gray-900 sm:p-8'>
          <div className='h-8 w-full rounded dark:bg-gray-700'></div>
          <div className='h-8 w-full rounded dark:bg-gray-700'></div>
          <div className='h-8 w-full rounded dark:bg-gray-700'></div>
          <div className='h-8 w-full rounded dark:bg-gray-700'></div>
        </div>
      </div>
    </div>
  );
};

export default ListingSkeleton;
