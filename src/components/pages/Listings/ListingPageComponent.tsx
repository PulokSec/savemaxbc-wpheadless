'use client';
import React, { Suspense, useEffect, useState } from 'react';

import { getAllProperties, getSearchQuery } from '@/lib/dataFetching';

import FeaturedListings from '@/components/pages/Listings/FeaturedListings';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import ListingGetInTouch from '@/components/pages/Listings/ListingGetInTouch';
import ListingPagination from '@/components/pages/Listings/ListingPagination';
import PaginationSearch from '@/components/pages/Listings/PaginationSearch';
import Footer from '@/components/shared/Footer';
import Skeleton from '@/components/Skeleton';
import Loader from '@/components/utils/Loader';

type Props = {
  data: any;
  searchParams: any;
};

interface AllPosts {
  listings?: any;
  total_results?: any;
}

const ListingPageComponent = (props: Props) => {
  const { data, searchParams } = props;
  const [allPosts, setAllPosts] = useState<AllPosts>();
  const [recentPosts, setRecentPosts] = useState();
  const [housePosts, setHousePosts] = useState();
  const [townPosts, setTownPosts] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [queryParams, setQueryParams] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let allData = {
        listings: [],
        totalCount: 0,
      };

      if (searchParams?.query) {
        const commonParams = {
          pageParam: parseInt(searchParams?.page?.toString() || '1'),
        };

        if (
          searchParams?.type === 'House' ||
          searchParams?.type === 'Town' ||
          searchParams?.type === 'Condo'
        ) {
          allData = await getAllProperties({
            ...commonParams,
            typeParam: searchParams.type,
            queryParam: searchParams?.query,
          });
        } else {
          setQueryParams(true);
          const [city,query] =
            searchParams?.query?.split(',') || [];
          allData = await getSearchQuery({
            queryParam: city || query,
            ...commonParams,
          });
        }
      }
      const recentPosts = await getAllProperties({
        pageParam: parseInt(searchParams?.page?.toString() || '1'),
        typeParam: searchParams?.type?.toString() || '',
        queryParam: searchParams?.city?.toString() || 'Surrey',
      });
      const housePosts = await getAllProperties({
        pageParam: parseInt(searchParams?.page?.toString() || '1'),
        typeParam: searchParams?.type?.toString() || 'House',
        queryParam: searchParams?.city?.toString() || 'Surrey',
      });
      const townPosts = await getAllProperties({
        pageParam: parseInt(searchParams?.page?.toString() || '1'),
        typeParam: searchParams?.type?.toString() || 'Town',
        queryParam: searchParams?.city?.toString() || 'Surrey',
      });
      setRecentPosts(recentPosts);
      setHousePosts(housePosts);
      setTownPosts(townPosts);
      setAllPosts(allData);
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  return (
    <div>
      <main>
        {!loading && allPosts && recentPosts && housePosts && townPosts ? (
          <>
            <Suspense fallback={<Skeleton />}>
              <ListingBanner
                bannerData={data?.pages?.nodes[0]?.listings?.bannerSection}
                headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
                settingsData={
                  data?.settingsOptions?.savemaxOptions?.headerSettings
                }
              />
              {searchParams?.query && !queryParams ? (
                <PaginationSearch
                  allPosts={allPosts?.listings}
                  totalCount={allPosts?.total_results}
                  currentPageID={parseInt(
                    searchParams?.page?.toString() || '1'
                  )}
                />
              ) : searchParams?.query && queryParams ? (
                <ListingPagination
                  allPosts={allPosts?.listings}
                  totalCount={allPosts?.total_results}
                  currentPageID={parseInt(
                    searchParams?.page?.toString() || '1'
                  )}
                />
              ) : (
                <FeaturedListings
                  searchParams={searchParams}
                  titleData={data?.pages?.nodes[0]?.listings?.listingSection}
                  usingFor='listings'
                  recentPosts={recentPosts}
                  housePosts={housePosts}
                  townPosts={townPosts}
                />
              )}
              <ListingGetInTouch
                bottomSection={data?.pages?.nodes[0]?.listings?.getInTouch}
              />
              <p
                className='mx-auto max-w-[1200px] px-4 py-5 text-center text-[13px] md:text-sm'
                dangerouslySetInnerHTML={{
                  __html: data?.pages?.nodes[0]?.listings?.disclaimer,
                }}
              ></p>
              <Footer
                navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
                settingsData={
                  data?.settingsOptions?.savemaxOptions?.footerSettings
                }
              />
            </Suspense>
          </>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
};

export default ListingPageComponent;
