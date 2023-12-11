import { gql } from '@apollo/client';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { getClient } from '@/lib/apollo';
import { getPhotos, getSingleProperty } from '@/lib/dataFetching';

import ListingMap from '@/components/pages/Listings/ListingMap';
import ListingTable from '@/components/pages/Listings/ListingTable';
import SingleListingBanner from '@/components/pages/Listings/SingleListingBanner';
import Footer from '@/components/shared/Footer';
import Skeleton from '@/components/Skeleton';

const query = gql`
  query {
    pages(where: { id: 20 }) {
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

export default async function SingleProperty({
  params,
}: {
  params: { listingId: string };
}) {
  console.log(params);
  const link = params.listingId;
  const listingId = link.split('-').pop();
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const images = await getPhotos({ listingId: listingId });

  const allDetails = await getSingleProperty({
    listingId: listingId,
  });

  return (
    <>
      <main>
        <Suspense fallback={<Skeleton />}>
          <SingleListingBanner
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            allImages={images}
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />

          <div className='mx-auto max-w-[1400px] p-2 md:p-5 xl:py-10 '>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>{allDetails[0]?.BedroomsTotal} Bedroom</p>
              </div>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>{allDetails[0]?.BathroomTotal} Bathroom</p>
              </div>
              {allDetails[0]?.SizeInterior && (
                <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                  <p>{allDetails[0]?.SizeInterior}</p>
                </div>
              )}
            </div>

            <h2 className=' mb-1 text-[#B48237]'>58121 Fancher Road</h2>
            <h3 className='mb-1 text-gray-900'>
              {allDetails[0]?.City} {allDetails[0]?.Province}{' '}
              {allDetails[0]?.PostalCode}
            </h3>

            <p className='mb-2'>{allDetails[0]?.PublicRemarks}</p>
            <h4 className='mb-1 text-xl text-[#B48237]'>
              ${allDetails[0]?.Price}
            </h4>
          </div>

          <ListingTable
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            details={allDetails[0]}
          />

          <ListingMap
            latitude={allDetails[0]?.Latitude}
            longitude={allDetails[0]?.Longitude}
          />
          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </Suspense>
      </main>
    </>
  );
}
