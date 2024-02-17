'use client';
import React, { useEffect, useState } from 'react';

import { getFilterQuery } from '@/lib/dataFetching';

import GetInTouch from '@/components/pages/Listings/GetInTouch';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import ListingPagination from '@/components/pages/Listings/ListingPagination';
import Footer from '@/components/shared/Footer';
import Loader from '@/components/utils/Loader';

type Props = {
  data: any;
  searchParams: any;
};

interface AllPosts {
  listings?: any;
  total_results?: any;
}

const PropertiesListingComponent = (props: Props) => {
  const { data, searchParams } = props;
  const [allPosts, setAllPosts] = useState<AllPosts>();
  const [loading, setLoading] = useState<boolean>(true);

  const pageParam =searchParams?.page;
  const queryParam = searchParams?.query;
  const transactionType = searchParams?.transactionType;
  const businessType = searchParams?.businessType;
  const propertyType = searchParams?.propertyType;
  const type = searchParams?.type;
  const bedroom = parseInt(searchParams?.bedroom);
  const bedroomMax = parseInt(searchParams?.bedroomMax) || 10;
  const bathroom = parseInt(searchParams?.bathroom);
  const bathroomMax = parseInt(searchParams?.bathroomMax) || 10;
  const price = parseInt(searchParams?.price);
  const priceMax = parseInt(searchParams?.priceMax) || 1000000;
  const queryParams: { [key: string]: string } = {};
      

  // Add parameters to the object only if they have data
  if (pageParam > 1) queryParams.page = pageParam.toString();
  if (queryParam?.length > 1) queryParams.query = queryParam;
  if (transactionType?.length > 1) queryParams.transactionType = transactionType;
  if (businessType?.length > 1) queryParams.businessType = businessType;
  if (propertyType?.length > 1) queryParams.propertyType = propertyType;
  if (type?.length > 1) queryParams.type = type;
  if (bedroom > 1) queryParams.bedroom = bedroom.toString();
  if (bedroomMax > 1) queryParams.bedroomMax = bedroomMax.toString();
  if (bathroom > 1) queryParams.bathroom = bathroom.toString();
  if (bathroomMax > 1) queryParams.bathroomMax = bathroomMax.toString();
  if (price > 1) queryParams.price = price.toString();
  if (priceMax > 1) queryParams.priceMax = priceMax.toString();

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getFilterQuery({
        pageParam: pageParam,
        type: type,
        queryParam: queryParam,
        transactionType: transactionType,
        propertyType: propertyType,
        businessType: businessType,
        bedroom:bedroom,
        bathroom: bathroom,
        bathroomMax: bathroomMax,
        bedroomMax: bedroomMax,
        price: price,
        priceMax: priceMax,
      });
      console.log(posts);
      setLoading(false);
      setAllPosts(posts);
    };
    fetchData();
  }, [bathroom, bathroomMax, bedroom, bedroomMax, businessType, pageParam, price, priceMax, propertyType, queryParam, searchParams, transactionType, type]);

  return (
    <div>
      <main>
        {!loading && allPosts ? (
          <>
            <ListingBanner
              bannerData={data?.pages?.nodes[0]?.listings?.bannerSection}
              headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.headerSettings
              }
            />
            {searchParams?.category === 'recent' ? (
              <h1 className='mt-14 text-center text-lg md:text-5xl lg:mt-20 capitalize'>
                {searchParams?.query ? searchParams?.query : ''} Recent{' '}
                <span className='text-leading-3 font-bold text-[#515151]'>
                  Listings
                </span>
              </h1>
            ) : searchParams?.category === 'house' ? (
              <h1 className='mt-14 text-center text-lg md:text-5xl lg:mt-20 capitalize'>
                {searchParams?.city ? searchParams?.query : ''} Homes{' '}
                <span className='text-leading-3 font-bold text-[#515151]'>
                  Listings
                </span>
              </h1>
            ) : searchParams?.category === 'townhouse' ? (
              <h1 className='mt-14 text-center text-lg md:text-5xl lg:mt-20 capitalize'>
                {searchParams?.query ? searchParams?.query : ''} Townhouses{' '}
                <span className='text-leading-3 font-bold text-[#515151]'>
                  Listings
                </span>
              </h1>
            ) : searchParams?.category === 'condominium' ? (
              <h1 className='mt-14 text-center text-lg md:text-5xl lg:mt-20 capitalize'>
                {searchParams?.query ? searchParams?.query : ''} Condominium{' '}
                <span className='text-leading-3 font-bold text-[#515151]'>
                  Listings
                </span>
              </h1>
            ) : (
              <h1 className='mt-14 text-center text-lg md:text-5xl lg:mt-20 capitalize'>
               {searchParams?.query ? searchParams?.query : ''} Featured{' '}
                <span className='text-leading-3 font-bold text-[#515151]'>
                  Listings
                </span>
              </h1>
            )}

            <ListingPagination
              allPosts={allPosts?.listings}
              totalCount={allPosts?.total_results}
              currentPageID={parseInt(searchParams?.page?.toString() || '1')}
            />
            <GetInTouch
              bottomSection={data?.pages?.nodes[0]?.listings?.getInTouch}
            />
            <p className='mx-auto max-w-[1200px] px-4 py-5 text-center text-[13px] md:text-sm'>THE DATA RELATING TO REAL ESTATE ON THIS WEBSITE COMES IN PART FROM THE MLS® RECIPROCITY PROGRAM OF THE REAL ESTATE BOARD OF GREATER VANCOUVER OR THE FRASER VALLEY REAL ESTATE BOARD. REAL ESTATE LISTINGS HELD BY PARTICIPATING REAL ESTATE FIRMS ARE MARKED WITH THE MLS® LOGO AND DETAILED INFORMATION ABOUT THE LISTING INCLUDES THE NAME OF THE LISTING AGENT. THIS REPRESENTATION IS BASED IN WHOLE OR PART ON DATA GENERATED BY THE REAL ESTATE BOARD OF GREATER VANCOUVER OR THE FRASER VALLEY REAL ESTATE</p>
            <Footer
              navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.footerSettings
              }
            />
          </>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
};

export default PropertiesListingComponent;
