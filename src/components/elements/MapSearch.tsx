'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import Loader from '@/components/utils/Loader';
const MapBox = dynamic(() => import('@/components/utils/MapBox'), {
  loading: () => <Loader />,
  ssr: false,
});

type MyProps = {
  searchParams: any;
};

const MapSearch = (props: MyProps) => {
  const { searchParams } = props;

  return (
    <section>
      <div className=''>
        <MapBox
          searchParams={searchParams}
        />
      </div>
    </section>
  );
};

export default MapSearch;
