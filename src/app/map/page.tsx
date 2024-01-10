import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';
import { getMapSearchQuery } from '@/lib/dataFetching';

import MapSearch from '@/components/elements/MapSearch';
import GetInTouch from '@/components/pages/Listings/GetInTouch';
import NewListingBanner from '@/components/pages/Listings/NewListingBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 89327 }) {
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
        map {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
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
export default async function MapPage({
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

  // console.log(allPosts);
  const listings = await getMapSearchQuery({
    searchQuery: searchParams?.query?.toString() || '',
  });

  // const geoJsonData = {
  //   type: 'FeatureCollection',
  //   features: listings?.map((item: any) => ({
  //     type: 'Feature',
  //     properties: {
  //       // Add any additional properties here
  //       // cardImageUrl: item?.cardImageUrl,
  //       post: item,
  //     },
  //     geometry: {
  //       type: 'Point',
  //       coordinates: [item?.location?.lng, item?.location?.lat],
  //     },
  //   })),
  // };

  // // Write GeoJSON data to a file
  // const geoJsonFilePath = '../../../assets/geoData.geojson'; // Replace with the desired path
  // fs.writeFileSync(geoJsonFilePath, JSON.stringify(geoJsonData, null, 2));

  // console.log(`GeoJSON file generated successfully at: ${geoJsonFilePath}`);

  return (
    <>
      <main>
        <NewListingBanner
          usingFor='map'
          bannerData={data?.pages?.nodes[0]?.map?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <MapSearch
          posts={listings?.listings}
          totalCount={listings?.totalCount}
          latitude={parseFloat(listings?.listings[0]?.Latitude)}
          longitude={parseFloat(listings?.listings[0]?.Longitude)}
        />
        <div className='mt-10'>
          <GetInTouch bottomSection={data?.pages?.nodes[0]?.map?.getInTouch} />
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
