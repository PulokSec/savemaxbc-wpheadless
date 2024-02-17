'use client';
import React, { Suspense } from 'react';

import ListingMap from '@/components/pages/Listings/ListingMap';
import ListingTable from '@/components/pages/Listings/ListingTable';
import SingleListingBanner from '@/components/pages/Listings/SingleListingBanner';
import Footer from '@/components/shared/Footer';
import Skeleton from '@/components/Skeleton';

type Props = {
  data: any;
  allDetails: any;
};

const SingleListingComponent = (props: Props) => {
  const { data, allDetails } = props;
  // console.log('all single listing', allDetails);
  const firstImage = allDetails?.first_photo;
  // const images = allDetails?.all_photos;
  const images = Object.values(allDetails?.all_photos);
  // console.log('images', images);
  return (
    <div>
      <main>
        <Suspense fallback={<Skeleton />}>
          <SingleListingBanner
            listingId = {allDetails?.listingId}
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            allImages={images}
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />

          <div className='mx-auto max-w-[1400px] p-2 md:p-5 xl:py-10 '>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>{allDetails?.property_details[0]?.BedroomsTotal} Bedroom</p>
              </div>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>{allDetails?.property_details[0]?.BathroomTotal} Bathroom</p>
              </div>
              {allDetails[0]?.property_details[0]?.SizeInterior && (
                <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                  <p>
                    {allDetails?.property_details[0]?.SizeInterior}{' '}
                    {allDetails?.property_details[0]?.SizeInterior?.includes(
                      'sqft'
                    )
                      ? ''
                      : 'sqft'}
                  </p>
                </div>
              )}
            </div>

            <h2 className=' mb-1 text-[#B48237]'>
              {allDetails?.property_details[0]?.StreetAddress}
            </h2>
            <h3 className='mb-1 text-gray-900'>
              <span className='capitalize'>
                {allDetails?.property_details[0]?.City},{' '}
              </span>{' '}
              {allDetails?.property_details[0]?.Province} -{' '}
              {allDetails?.property_details[0]?.PostalCode}
            </h3>

            <p className='mb-2'>
              {allDetails?.property_details[0]?.PublicRemarks}
            </p>
            <h4 className='mb-1 text-xl text-[#B48237]'>
              ${' '}
              {parseFloat(
                allDetails?.property_details[0]?.Price
              ).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h4>
          </div>

          <ListingTable
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            details={allDetails}
          />

          <ListingMap
            latitude={allDetails?.property_details[0]?.Latitude}
            longitude={allDetails?.property_details[0]?.Longitude}
            address={allDetails?.property_details[0]?.StreetAddress}
          />
          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </Suspense>
      </main>
    </div>
  );
};

export default SingleListingComponent;
