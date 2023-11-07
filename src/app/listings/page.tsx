import { gql } from '@apollo/client';
import Head from 'next/head';

import { getClient } from '@/lib/apollo';
import { getAllProperties } from '@/lib/dataFetching';

import FeaturedListings from '@/components/pages/Listings/FeaturedListings';
import GetInTouch from '@/components/pages/Listings/GetInTouch';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 18 }) {
      nodes {
        seo {
          title
          description
          canonicalUrl
          focusKeywords
          openGraph {
            image {
              url
            }
          }
          jsonLd {
            raw
          }
        }
        listings {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
          }
          listingSection {
            recentListingsTitle
            detachedHomesTitle
            semiDetachedTitle
            rentalHomesTitle
          }
          getInTouch {
            title
            backgroundImage {
              sourceUrl
            }
          }
        }
      }
    }
    settingsOptions {
      savemaxOptions {
        headerSettings {
          uploadLogo {
            sourceUrl
            altText
          }
        }
        generalSettings {
          schemaProductRating
        }
        footerSettings {
          socialUrl {
            facebook
            twitter
            instagram
          }
          copyrightText
          footerLeftWidget {
            title
            phone
            emailAddress
            address
          }
          footerLogoSection {
            logoText
            logoUpload {
              altText
              sourceUrl
            }
          }
        }
      }
    }
    menus(where: { location: MENU_2 }) {
      nodes {
        name
        slug
        menuItems(first: 50) {
          nodes {
            url
            target
            parentId
            label
            cssClasses
            description
            id
            childItems {
              nodes {
                uri
                label
              }
            }
          }
        }
      }
    }
  }
`;
export default async function Listings({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
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
        <ListingBanner
          bannerData={data?.pages?.nodes[0]?.listings?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        {/* <FeaturedListings
          allPosts={allPosts?.listings}
          totalCount={allPosts?.totalCount}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
        /> */}
        <FeaturedListings
          allPosts={allPosts?.listings}
          titleData={data?.pages?.nodes[0]?.listings?.listingSection}
        />
        <GetInTouch
          bottomSection={data?.pages?.nodes[0]?.listings?.getInTouch}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
