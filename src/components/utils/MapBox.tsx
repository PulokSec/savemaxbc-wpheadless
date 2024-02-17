'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from 'react';
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

import axios from 'axios';

import { getMapLocation } from '@/lib/dataFetching';

import { useInterval } from '@/components/custom-hooks/useInterval';
import NextImage from '@/components/NextImage';
import Loader from '@/components/utils/Loader';
import Pin from '@/components/utils/Pin';

type MyProps = {
  searchParams: any;
};

const MapBox = (props: MyProps) => {
  const { searchParams } = props;
  const [posts, setAllPosts] = useState([]);
  const [centerText, setCenterText] = useState('');
  const [marker, setMarker] = useState({
    latitude: 49.1620903,
    longitude: -122.7899628,
  });
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const listings = await getMapLocation({
        searchQuery: searchParams?.query?.toString() || 'Surrey',
        limit: 10000,  // Adjust the limit based on your requirements
      });
      const {data} = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchParams?.query?.toString() || 'Surrey'}.json?country=CA&access_token=${TOKEN}`);

      setAllPosts(listings?.listings);
      setMarker({
        latitude: data?.features[0]?.center[1],
        longitude: data?.features[0]?.center[0],
      });
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Use the useInterval hook to periodically fetch data every 5 minutes
  useInterval(() => {
    if (!loading) {
      setLoading(true);
      fetchData();
    }
  }, 300000);

  useEffect(() => {
    const debouncedFetchData = debounce(fetchData, 300);
      if (searchParams?.query || posts?.length === 0) {
        setLoading(true);
        debouncedFetchData();
      }

  }, [searchParams?.query]);

  const handleMarkerClick = (e: any, item?: any,) => {
    e.originalEvent.stopPropagation();
    setPopupInfo(item);
  };
  
  return (
    <div className='relative mt-10 h-full' id='map'>
      {loading ? (
        <Loader />
      ) : (
        <div  className='flex md:flex-row flex-col h-full gap-4'>
        <div  className='w-full xl:w-8/12 p-5 xl:p-10 h-[50vh] xl:h-[100vh] border border-1 rounded shadow'>
          <Map
            initialViewState={{
              latitude: marker?.latitude,
              longitude: marker?.longitude,
              zoom: 13,
              bearing: 0,
              pitch: 0,
            }}
            keyboard={true}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={TOKEN}
          >
            {/* <GeolocateControl position='top-left' /> */}
            <FullscreenControl position='top-left' />
            <NavigationControl position='top-left' />
            <ScaleControl />

            {posts?.map((item: any, index: number) => (
              <Marker
                key={index}
                longitude={item?.Longitude}
                latitude={item?.Latitude}
                onClick={(e) => handleMarkerClick(e, item)}
              >
                <Pin size={20} />
              </Marker>
            ))}
            <Marker
                longitude={marker?.longitude}
                latitude={marker?.latitude}
                onClick={()=> setCenterText(searchParams?.query?.toString() || 'Surrey')}
              >
                <Pin size={30} usingFor='center' />
              </Marker>
        {centerText && (
          <Popup
            anchor="top"
            longitude={marker?.longitude}
            latitude={marker?.latitude}
            onClose={() => setCenterText('')}
          >
            <div className="capitalize">
              <p className="capitalize text-md">{centerText}</p>
            </div>
          </Popup>
        )}
          </Map>
        </div>
        <div className="p-5 xl:px-5 w-full xl:w-2/6">
        {popupInfo ? (
              <div
              className=''
            >
              <Link
                  key={popupInfo?.ListingID}
                  target='_blank'
                  href={`/listing/${popupInfo?.StreetAddress
                    ?.replaceAll(' ', '-')
                    .replaceAll('#', '')
                    .toLowerCase()}-${popupInfo?.City
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${popupInfo?.Province
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${popupInfo?.PostalCode}-${popupInfo?.ListingID}`}
                  className='card-width mx-auto flex cursor-pointer flex-col justify-start rounded-lg bg-white shadow hover:shadow-2xl hover:shadow-slate-800 h-[100vh] xl:h-[90vh]'
                  style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
                >
                  <div className='flex items-end justify-end'>
                    <div
                      className='relative z-10 mb-[-50px] w-[100px] origin-top bg-yellow-500 text-end uppercase'
                      // style={{ transform: 'translateX(50%) rotate(45deg)' }}
                    >
                      <p className='z-5 relative top-0 px-5 text-center text-lg font-semibold text-white'>
                        {popupInfo?.transactionType}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <NextImage
                      useSkeleton
                      className='relative xl:h-[330px] h-[225px] w-full rounded-lg'
                      src={popupInfo?.first_photo}
                      layout='fill'
                      alt='Icon'
                    />
                  </div>
                  <div className='mt-5 px-5'>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
              <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm  text-white hover:bg-gray-500'>
                <p>{popupInfo?.BedroomsTotal} Bedroom</p>
              </div>
              <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm text-white hover:bg-gray-500'>
                <p>{popupInfo?.BathroomTotal} Bathroom</p>
              </div>
              {popupInfo?.SizeInterior && (
                <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm text-white hover:bg-gray-500'>
                  <p>
                    {popupInfo?.SizeInterior}{' '}
                    {popupInfo?.SizeInterior?.includes(
                      'sqft'
                    )
                      ? ''
                      : 'sqft'}
                  </p>
                </div>
              )}
            </div>

            <p className=' mb-1 text-[#B48237] text-xl md:text-xl font-bold'>
              {popupInfo?.StreetAddress}
            </p>
            <p className='mb-1 text-gray-900 font-bold'>
              <span className='capitalize'>
                {popupInfo?.City},{' '}
              </span>{' '}
              {popupInfo?.Province} -{' '}
              {popupInfo?.PostalCode}
            </p>

            <p className='mb-2 md:text-md text-sm'>
              {popupInfo?.PublicRemarks}
            </p>
            <p className='mb-1 text-xl text-[#B48237]'>
              ${' '}
              {parseFloat(
                popupInfo?.Price
              ).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
                  <p className='mt-2 px-5 text-[11px] font-semibold tracking-wide text-gray-700'>
                    MLS&reg; Number{popupInfo?.DdfListingID}
                  </p>
                </Link>
            </div>
            ) : posts?.length > 0 ? (
              <div
              className=''
            >
              <Link
                  key={popupInfo?.ListingID}
                  target='_blank'
                  href={`/listing/${(posts[0] as any)?.StreetAddress
                    ?.replaceAll(' ', '-')
                    .replaceAll('#', '')
                    .toLowerCase()}-${(posts[0] as any)?.City
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${(posts[0] as any)?.Province
                    ?.replaceAll(' ', '-')
                    .toLowerCase()}-${(posts[0] as any)?.PostalCode}-${(posts[0] as any)?.ListingID}`}
                  className='card-width mx-auto flex cursor-pointer flex-col justify-start rounded-lg bg-white shadow hover:shadow-2xl hover:shadow-slate-800 h-[100vh] xl:h-[90vh]'
                  style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.15)' }}
                >
                  <div className='flex items-end justify-end'>
                    <div
                      className='relative z-10 mb-[-50px] w-[100px] origin-top bg-yellow-500 text-end uppercase'
                      // style={{ transform: 'translateX(50%) rotate(45deg)' }}
                    >
                      <p className='z-5 relative top-0 px-5 text-center text-lg font-semibold text-white'>
                        {(posts[0] as any)?.transactionType}
                      </p>
                    </div>
                  </div>
                  <div className='relative'>
                    <NextImage
                      useSkeleton
                      className='relative xl:h-[330px] h-[225px] w-full rounded-lg'
                      src={(posts[0] as any)?.first_photo}
                      layout='fill'
                      alt='Icon'
                    />
                  </div>
                  <div className='mt-5 px-5'>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
              <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm text-white hover:bg-gray-500'>
                <p>{(posts[0] as any)?.BedroomsTotal} Bedroom</p>
              </div>
              <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm text-white hover:bg-gray-500'>
                <p>{(posts[0] as any)?.BathroomTotal} Bathroom</p>
              </div>
              {(posts[0] as any)?.SizeInterior && (
                <div className='md:w-[150px] w-[80px] rounded-xl bg-gray-400 px-3 py-2 text-center md:text-lg text-sm text-white hover:bg-gray-500'>
                  <p>
                    {(posts[0] as any)?.SizeInterior}{' '}
                    {popupInfo?.SizeInterior?.includes(
                      'sqft'
                    )
                      ? ''
                      : 'sqft'}
                  </p>
                </div>
              )}
            </div>

            <p className='mb-1 text-[#B48237] text-xl md:text-xl font-bold'>
              {(posts[0] as any)?.StreetAddress}
            </p>
            <p className='mb-1 text-gray-900 font-bold'>
              <span className='capitalize'>
                {(posts[0] as any)?.City},{' '}
              </span>{' '}
              {(posts[0] as any)?.Province} -{' '}
              {(posts[0] as any)?.PostalCode}
            </p>

            <p className='mb-2 md:text-md text-sm'>
              {(posts[0] as any)?.PublicRemarks}
            </p>
            <p className='mb-1 text-xl text-[#B48237]'>
              ${' '}
              {parseFloat(
                (posts[0] as any)?.Price
              ).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
                  <p className='mt-2 px-5 text-[11px] font-semibold tracking-wide text-gray-700'>
                    MLS&reg; Number{(posts[0] as any)?.DdfListingID}
                  </p>
                </Link>
            </div>
            ) : (
              <div
              className='h-[50vh] xl:h-[100vh]'>
                <div className="card-width mx-auto flex cursor-pointer flex-col justify-start rounded-lg bg-white shadow hover:shadow-2xl hover:shadow-slate-800 h-[100vh] xl:h-[90vh]">
                <p className="text-center text-[50px] pt-[60%] text-[#B48237] justify-center"> No listings found....</p>
                </div>
                </div>
            )}
        </div>
        </div>
      )}
    </div>
  );
};

// Debounce function to delay the execution of fetchData
type DebouncedFunction<T extends any[]> = (...args: T) => void;

function debounce<T extends any[]>(func: (...args: T) => void, delay: number): DebouncedFunction<T> {
  let timeoutId: NodeJS.Timeout;
  return function (...args: T) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default MapBox;
