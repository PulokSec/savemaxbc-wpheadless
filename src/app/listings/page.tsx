import Head from 'next/head';

import { getAllProperties } from '@/lib/dataFetching';

import FeaturedListings from '@/components/pages/Listings/FeaturedListings';
import GetInTouch from '@/components/pages/Listings/GetInTouch';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import Footer from '@/components/shared/Footer';

export default async function Listings({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const allPosts = await getAllProperties({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
  });
  // console.log(allPosts?.listings);

  return (
    <>
      <Head>
        <title>Latest Listings</title>
      </Head>
      <main>
        <ListingBanner />
        {/* <FeaturedListings
          allPosts={allPosts?.listings}
          totalCount={allPosts?.totalCount}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
        /> */}
        <FeaturedListings allPosts={allPosts?.listings} />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
