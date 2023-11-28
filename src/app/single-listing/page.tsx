import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import ListingMap from '@/components/pages/Listings/ListingMap';
import ListingTable from '@/components/pages/Listings/ListingTable';
import SingleListingBanner from '@/components/pages/Listings/SingleListingBanner';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';


const query = gql`
  query {
    pages(where: { id: 66418 }) {
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
        singleListing {
          address
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

export default async function SingleListing() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <main>
      <section className='bg-white'>
        <div>
          <Header
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />

          <SingleListingBanner
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          />

          <div className='mx-auto max-w-[1400px] p-2 md:p-5 xl:py-10 '>
            <div className='mb-4 flex flex-wrap items-center gap-2'>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>4 Bedroom</p>
              </div>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>3 Bathroom</p>
              </div>
              <div className='w-[150px] rounded-xl bg-gray-400 px-3 py-2 text-center text-lg text-white hover:bg-gray-500'>
                <p>2250 sqft</p>
              </div>
            </div>

            <h2 className=' mb-1 text-[#B48237]'>58121 Fancher Road</h2>
            <h3 className='mb-1 text-gray-900'>
              Laidlaw, British Columbia V0X 1L2
            </h3>

            <p className='mb-2'>
              Welcome to this beautiful home nestled on 3.266 acres of
              picturesque land, this property offers breathtaking mountain views
              that will leave you in awe. This cozy 4 bedroom home is perfect
              for families of all sizes to create lasting memories. You will
              find modern amenities and updates throughout the home, EV charger.
              Vaulted ceiling in living room with stone fireplace. The primary
              suite offers a bonus sitting area. The vast acreage opens up
              endless possibilities; large 40X60 workshop (200amp), new drilled
              well (2023), small stables, loads of parking for all of your toys,
              and you very own swimming hole. This property is located 10
              minutes from Hope providing access to shopping, dining and other
              amenities. Don't miss the opportunity to make this property your
              own slice of paradise. (id:55160)
            </p>
            <h4 className='mb-1 text-xl text-[#B48237]'>$1,999,900</h4>
          </div>

          <ListingTable navigation={data?.menus?.nodes[0]?.menuItems?.nodes} />

          <ListingMap map={data?.menus?.nodes[0]?.singleListing?.address} />

          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </div>
      </section>
    </main>
  );
}
