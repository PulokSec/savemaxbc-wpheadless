import dynamic from 'next/dynamic';
import React from 'react';

const MapComponent = dynamic(() => import('@/components/utils/Map'), {
  ssr: false,
});

type MyProps = {
  latitude: any;
  longitude: any;
  address: any;
};

export default function ListingMap(props: MyProps) {
  const { latitude, longitude, address } = props;
  const positions = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

  return (
    <div className='mx-auto mb-5 max-w-[1400px] p-2 md:p-5 xl:py-10'>
      <h3 className='mb-2 text-gray-800'>Property Location</h3>
      <MapComponent location={positions} address={address} />
    </div>
  );
}
