import ListingSkeleton from '@/components/pages/Listings/ListingSkeleton';
import React from 'react';

type Props = {};

const PropertiesSkeleton = (props: Props) => {
  return (
    <section className='mt-20 lg:mt-40'>
      <div className='mt-8 grid grid-cols-1 gap-x-4 gap-y-10 pb-10 md:grid-cols-2 lg:grid-cols-3 2xl:mt-32 2xl:grid-cols-4'>
        <div>
          {[...Array(12)].map((_, index) => (
            <ListingSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSkeleton;
