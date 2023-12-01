import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Head from 'next/head';

import { getClient } from '@/lib/apollo';
import { getAllProperties } from '@/lib/dataFetching';

import GetInTouch from '@/components/pages/Listings/GetInTouch';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import PaginationSearch from '@/components/pages/Listings/PaginationSearch';
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
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return {
    title: data?.pages?.nodes[0]?.seo?.title,
    description: data?.pages?.nodes[0]?.seo?.description,
    robots: { index: false, follow: false },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/',
      title: data?.pages?.nodes[0]?.seo?.title,
      description: data?.pages?.nodes[0]?.seo?.description,
      siteName: 'https://savemaxbc.com/',
      images: data?.pages?.nodes[0]?.seo?.openGraph?.image?.url,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.pages?.nodes[0]?.seo?.title,
      description: data?.pages?.nodes[0]?.seo?.description,
      // images: [`${siteConfig.url}/images/og.jpg`],
      creator: '@PulokSec',
    },
    authors: [
      {
        name: 'Cansoft Tech',
        url: 'https://cansoft.com/',
      },
    ],
  };
}
export default async function PropertiesListing({
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
    typeParam: searchParams?.type?.toString() || '',
    cityParam: searchParams?.city?.toString() || '',
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
        <PaginationSearch
          allPosts={allPosts?.listings}
          totalCount={allPosts?.totalCount}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
        />
        {/* <FeaturedListings
          allPosts={allPosts?.listings}
          titleData={data?.pages?.nodes[0]?.listings?.listingSection}
          usingFor='listings'
        /> */}
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
