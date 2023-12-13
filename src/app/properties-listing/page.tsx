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
  // console.log(searchParams);

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
        {searchParams?.category === 'recent' ? (
          <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
            {searchParams?.city ? searchParams?.city : ''} Recent{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              Listings
            </span>
          </h1>
        ) : searchParams?.category === 'house' ? (
          <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
            {searchParams?.city ? searchParams?.city : ''} Homes{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              Listings
            </span>
          </h1>
        ) : searchParams?.category === 'townhouse' ? (
          <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
            {searchParams?.city ? searchParams?.city : ''} Townhouses{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              Listings
            </span>
          </h1>
        ) : searchParams?.category === 'condominium' ? (
          <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
            {searchParams?.city ? searchParams?.city : ''} Condominium{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              Listings
            </span>
          </h1>
        ) : (
          <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
            Featured{' '}
            <span className='text-leading-3 font-bold text-[#525659]'>
              Listings
            </span>
          </h1>
        )}

        <PaginationSearch
          allPosts={allPosts?.listings}
          totalCount={allPosts?.totalCount}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
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
