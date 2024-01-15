'use client';
import L, { MarkerCluster } from 'leaflet';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import 'leaflet/dist/leaflet.css';

import { getPhotos } from '@/lib/dataFetching';

import NextImage from '@/components/NextImage';
import Loader from '@/components/utils/Loader';
import { myIcon } from '@/components/utils/Map';

type MyProps = {
  allPosts: Array<any>;
  totalCount: number;
  latitude: any;
  longitude: any;
};

const MultiMapComponent = (props: MyProps) => {
  const { allPosts, totalCount, latitude, longitude } = props;
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [cardImageUrl, setCardImageUrl] = useState('');

  async function fetchImage(id: any) {
    setImageLoading(true);
    const image = await getPhotos({ listingId: id });
    const bufferOriginal = Buffer.from(image[0]?.Photos.data);
    const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))?.LargePhoto
      ?.filename;
    setCardImageUrl(cardImageUrl);
  }
  const handleClick = (id: any) => {
    fetchImage(id);
    if (cardImageUrl.length > 0) {
      setImageLoading(false);
    }
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };
  console.log(center);
  const createClusterCustomIcon = function (cluster: MarkerCluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className:
        'bg-white border-[10px] border-[#3F5962] rounded-[50%] text-lg text-[#000000] h-[53px] text-center w-[53px]',
      iconSize: L.point(53, 53, true),
    });
  };
  useEffect(() => {
    if (allPosts?.length > 0) {
      setLoading(false);
    }
  }, [allPosts]);

  return (
    <>
      <div className='container relative mx-auto mt-10 w-full rounded px-5 shadow md:px-0'>
        {loading ? (
          <Loader />
        ) : (
          <MapContainer
            center={[center.lat, center.lng]}
            zoom={3}
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerClusterGroup
              onClick={(e: any) => console.log('onClick', e)}
              iconCreateFunction={createClusterCustomIcon}
              maxClusterRadius={150}
              spiderfyOnMaxZoom={true}
              polygonOptions={{
                fillColor: '#ffffff',
                color: '#3F5962',
                weight: 5,
                opacity: 1,
                fillOpacity: 0.8,
              }}
              showCoverageOnHover={true}
            >
              {allPosts?.map((post: any) => {
                return (
                  <Marker
                    key={post?.ListingID}
                    position={[
                      parseFloat(post?.Latitude),
                      parseFloat(post?.Longitude),
                    ]}
                    icon={myIcon}
                    eventHandlers={{
                      click: () => handleClick(post?.ListingID),
                    }}
                    // onClick={() => handleClick(post?.ListingID)}
                  >
                    <Popup>
                      <Link
                        href={`/listing/${post?.StreetAddress?.replaceAll(
                          ' ',
                          '-'
                        ).toLowerCase()}-${post?.City?.replaceAll(
                          ' ',
                          '-'
                        ).toLowerCase()}-${post?.Province?.replaceAll(
                          ' ',
                          '-'
                        ).toLowerCase()}-${post?.PostalCode}-${
                          post?.ListingID
                        }`}
                        className='card2-width mx-auto flex h-[450px] w-[250px] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-white hover:shadow-2xl hover:shadow-slate-800 md:h-[300px]'
                        style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
                        target='_blank'
                      >
                        {/* <div className='flex items-end justify-end'>
                          <div
                            className='absolute z-10 mb-[-50px] w-[50px] origin-top bg-yellow-500 text-end'
                            // style={{ transform: 'translateX(50%) rotate(45deg)' }}
                          >
                            <p className='z-5 relative top-0 px-5 text-center text-[8px] font-semibold uppercase text-white'>
                              {post?.TransactionType}
                            </p>
                          </div>
                        </div> */}
                        <div className='relative'>
                          <NextImage
                            useSkeleton={imageLoading ? true : false}
                            className='relative h-[105px] w-full rounded-lg'
                            src={cardImageUrl}
                            layout='fill'
                            alt='Icon'
                          />
                        </div>
                        <div className='px-3 text-start text-black'>
                          <p className='text-[14px] font-semibold text-black'>
                            {post?.StreetAddress} {post?.CommunityName}{' '}
                            {post?.PostalCode}
                          </p>
                          <p className='font-medium text-gray-800 md:text-[14px] 2xl:text-[16px]'>
                            ${' '}
                            {parseFloat(post?.Price).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>

                        <div className='flex items-center justify-start gap-2 px-3 text-black'>
                          {/* {post?.BedroomsTotal && (
                  
                )} */}
                          <p className='text-[12px]'>
                            {post?.BedroomsTotal} Bedroom
                          </p>
                          <p className='text-[12px]'>
                            {post?.BathroomTotal} Bathroom
                          </p>
                          {post?.lease && (
                            <p className='text-[12px]'>{post?.lease} Sqft</p>
                          )}
                        </div>
                        <p className='px-3 text-[12px] capitalize text-black'>
                          {post?.City}/{post?.Province}
                        </p>
                      </Link>
                    </Popup>
                  </Marker>
                );
              })}
            </MarkerClusterGroup>
          </MapContainer>
        )}
      </div>
    </>
  );
};

export default MultiMapComponent;
