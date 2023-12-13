import React from 'react';

import { getAllProperties } from '@/lib/dataFetching';

import ListingCarousel from '@/components/pages/Listings/ListingCarousel';

type MyProps = {
  // totalCount: number;
  // currentPageID: number;
  titleData: any;
  topHead?: any;
  listingDescription?: any;
  usingFor?: any;
  searchParams?: any;
};

export default async function FeaturedListings(props: MyProps) {
  const { titleData, usingFor, topHead, listingDescription, searchParams } =
    props;

  const recentPosts = await getAllProperties({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
    typeParam: searchParams?.type?.toString() || '',
    cityParam: searchParams?.city?.toString() || 'Surrey',
  });
  const housePosts = await getAllProperties({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
    typeParam: searchParams?.type?.toString() || 'House',
    cityParam: searchParams?.city?.toString() || 'Surrey',
  });
  const townPosts = await getAllProperties({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
    typeParam: searchParams?.type?.toString() || 'Town',
    cityParam: searchParams?.city?.toString() || 'Surrey',
  });

  return (
    <div>
      <section className='mt-20 lg:mt-60'>
        <div className='mt-20 2xl:mt-32'>
          {usingFor === 'listings' && (
            <h1 className='text-center text-lg md:text-5xl'>
              {titleData?.recentListingsTitle?.split(/ (.*)/)[0]}{' '}
              <span className='text-leading-3 font-bold text-[#525659]'>
                {titleData?.recentListingsTitle?.split(/ (.*)/)[1]}
              </span>
            </h1>
          )}
          {topHead && listingDescription ? (
            <div className=''>
              <p className='text-md mt-5 w-full text-center font-bold text-[#525659] md:text-xl lg:text-2xl'>
                {topHead}
              </p>
              <h1 className='mt-5 text-center text-lg md:text-4xl'>
                {titleData?.recentListingsTitle}
              </h1>
              <div
                className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: listingDescription,
                }}
              ></div>
            </div>
          ) : topHead ? (
            <>
              <p className='text-md mt-2 w-full font-bold text-[#525659] md:text-xl lg:text-2xl'>
                {topHead}
              </p>
              <h1 className='text-center text-lg md:text-5xl'>
                {titleData?.recentListingsTitle}
              </h1>
            </>
          ) : listingDescription ? (
            <>
              <h1 className='text-center text-lg md:text-5xl'>
                {titleData?.recentListingsTitle}
              </h1>
              <div
                className='md:text-md mt-5 text-xs leading-6 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html: listingDescription,
                }}
              ></div>
            </>
          ) : null}
          <ListingCarousel posts={recentPosts?.listings} />
          <div className='mt-5 text-center md:mt-10'>
            <a
              href='/properties-listing?city=Surrey&category=recent'
              className='text-uppercase relative z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm  hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:mt-[-20px] md:px-3.5'
            >
              See More
            </a>
          </div>
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.detachedHomesTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              {titleData?.detachedHomesTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={housePosts?.listings} />
          <div className='mt-5 text-center md:mt-10'>
            <a
              href='/properties-listing?city=Surrey&type=House&category=house'
              className='text-uppercase relative z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm  hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:mt-[-20px] md:px-3.5'
            >
              See More
            </a>
          </div>
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.semiDetachedTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              {titleData?.semiDetachedTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={townPosts?.listings} />
          <div className='mt-5 text-center md:mt-10'>
            <a
              href='/properties-listing?city=Surrey&type=Town&category=townhouse'
              className='text-uppercase relative z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm  hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:mt-[-20px] md:px-3.5'
            >
              See More
            </a>
          </div>
        </div>
        <div className='mt-20'>
          <h2 className='text-center text-lg md:text-5xl'>
            {titleData?.rentalHomesTitle?.split(/ (.*)/)[0]}{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              {titleData?.rentalHomesTitle?.split(/ (.*)/)[1]}
            </span>
          </h2>
          <ListingCarousel posts={housePosts?.listings} />
          <div className='mt-5 text-center md:mt-10'>
            <a
              href='/properties-listing?city=Surrey&type=Condo&category=condominium'
              className='text-uppercase relative z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm  hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:mt-[-20px] md:px-3.5'
            >
              See More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
