import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import Head from 'next/head';

import PropertiesListingComponent from '@/components/pages/Listings/PropertiesListingComponent';

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
              node {
                sourceUrl
              }
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
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    settingsOptions {
      savemaxOptions {
        headerSettings {
          uploadLogo {
            node {
              altText
              sourceUrl
            }
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
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
    menus(where: { location: PRIMARY }) {
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
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  return {
    title: 'Explore Premier Real Estate Listings In BC With Save Max',
    description: 'Discover exceptional properties for sale in BC. Find your dream home with expert realtors at Save Max Westcoast. Your gateway to luxury living awaits.',
    alternates: {
      canonical: 'https://savemaxbc.com/properties-listing/',
    },
    robots: { index: true, follow: true },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    // manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/properties-listing/',
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
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  // console.log(searchParams);

  return (
    <>
      <Head>
        <title>Latest Listings</title>
      </Head>
      <main>
        <PropertiesListingComponent data={data} searchParams={searchParams} />
      </main>
    </>
  );
}
