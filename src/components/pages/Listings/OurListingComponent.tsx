'use client';
import React, { useEffect, useState } from 'react';

import { getCustomListing } from '@/lib/dataFetching';

import GetInTouch from '@/components/pages/Listings/GetInTouch';
import NewListingBanner from '@/components/pages/Listings/NewListingBanner';
import OurListingPaginationSearch from '@/components/pages/Listings/OurListingPaginationSearch';
import Footer from '@/components/shared/Footer';
import Loader from '@/components/utils/Loader';

type Props = {
  data: any;
  searchParams: any;
  listings?: any;
  total_results?: any;
};

interface AllPosts {
  listings?: any;
  total_results?: any;
}

const OurListingComponent = (props: Props) => {
  const { data, searchParams} = props;
  const [allPosts, setAllPosts] = useState<AllPosts>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getCustomListing({
        pageParam: parseInt(searchParams?.page?.toString() || '1'),
        agentId: searchParams?.agentId?.toString() || '7760810159',
        queryParam: searchParams?.query?.toString() || '',
      });
      setAllPosts(posts);
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  return (
    <div>
      {!loading && allPosts ? (
        <main>
          <NewListingBanner
            bannerData={data?.pages?.nodes[0]?.ourListings?.bannerSection}
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
            usingFor='our-listing'
          />
          <h1 className='mt-14 text-center text-xl md:text-5xl lg:mt-20'>
            {data?.pages?.nodes[0]?.ourListings?.listingTitle?.split(' ')[0]}{' '}
            <span className='text-leading-3 font-bold text-[#515151]'>
              {data?.pages?.nodes[0]?.ourListings?.listingTitle?.split(' ')[1]}
            </span>{' '}
            {data?.pages?.nodes[0]?.ourListings?.listingTitle?.split(' ')[2]}
          </h1>
          <OurListingPaginationSearch
            allPosts={allPosts?.listings}
            totalCount={allPosts?.total_results}
            currentPageID={parseInt(searchParams?.page?.toString() || '1')}
          />
          <GetInTouch
            bottomSection={data?.pages?.nodes[0]?.ourListings?.getInTouch}
          />
          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OurListingComponent;
