'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import React from 'react';
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

import NextImage from '@/components/NextImage';
import Loader from '@/components/utils/Loader';
import Pin from '@/components/utils/Pin';

type MyProps = {
  allPosts: Array<any>;
  totalCount: number;
  lng: any;
  lat: any;
};

const MapBox = (props: MyProps) => {
  const { allPosts, totalCount, lng, lat } = props;
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const pins = useMemo(() => {
    setLoading(true);
    if (allPosts?.length > 0) {
      setLoading(false);
      return allPosts?.map((item: any, index: number) => (
        <Marker
          key={index}
          longitude={item?.location?.lng}
          latitude={item?.location?.lat}
          anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(item);
          }}
        >
          <Pin />
        </Marker>
      ));
    }
    return null;
  }, [allPosts]);

  return (
    <>
      <div className='relative mt-10 h-[100vh]'>
        {loading ? (
          <Loader />
        ) : (
          <Map
            style={{ width: '100%', height: '100dvh', padding: '10px' }}
            initialViewState={{
              latitude: lat,
              longitude: lng,
              zoom: 7,
              bearing: 0,
              pitch: 0,
            }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={TOKEN}
          >
            <GeolocateControl position='top-left' />
            <FullscreenControl position='top-left' />
            <NavigationControl position='top-left' />
            <ScaleControl />

            {pins}

            {popupInfo && (
              <Popup
                anchor='top'
                longitude={popupInfo?.location?.lng}
                latitude={popupInfo?.location?.lat}
                onClose={() => setPopupInfo(null)}
                className='mx-auto flex h-[300px] w-[100%] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-white'
              >
                <Link
                  href={`/listing/${popupInfo?.post?.StreetAddress?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${popupInfo?.post?.City?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${popupInfo?.post?.Province?.replaceAll(
                    ' ',
                    '-'
                  ).toLowerCase()}-${popupInfo?.post?.PostalCode}-${
                    popupInfo?.post?.ListingID
                  }`}
                  target='_blank'
                >
                  <div className='relative'>
                    <NextImage
                      useSkeleton
                      className='relative h-[205px] w-full'
                      src={popupInfo?.cardImageUrl}
                      layout='fill'
                      alt='Icon'
                    />
                  </div>
                  <div className='px-3 text-start text-black'>
                    <p className='text-[14px] font-semibold text-black'>
                      {popupInfo?.post?.StreetAddress}{' '}
                      {popupInfo?.post?.CommunityName}{' '}
                      {popupInfo?.post?.PostalCode}
                    </p>
                    <p className='font-medium text-gray-800 md:text-[14px] 2xl:text-[16px]'>
                      ${' '}
                      {parseFloat(popupInfo?.post?.Price).toLocaleString(
                        'en-US',
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </p>
                  </div>
                  <p className='px-3 text-[12px] capitalize text-black'>
                    {popupInfo?.post?.City}/{popupInfo?.post?.Province}
                  </p>
                </Link>
              </Popup>
            )}
          </Map>
        )}
      </div>
    </>
  );
};

export default MapBox;
