import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import { getSingleProperty } from '@/lib/dataFetching';

import SingleListingComponent from '@/components/pages/Listings/SingleListingComponent';
import { notFound } from 'next/navigation';

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
export async function generateMetadata({
  params,
}: {
  params: { listingId: string };
}): Promise<Metadata> {
  const link = params.listingId;
  const listingId = link.split('-').pop();
  const allDetails = await getSingleProperty({
    listingId: listingId,
  });
  const imageUrl = allDetails?.first_photo;

  return {
    title: allDetails?.property_details[0]?.StreetAddress,
    description: allDetails?.property_details[0]?.PublicRemarks,
    alternates: {
      canonical: `https://savemaxbc.com/listing/${params.listingId}/`,
    },
    robots: { index: false, follow: false },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    // manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: `https://savemaxbc.com/listing/${params.listingId}/`,
      title: allDetails?.property_details[0]?.StreetAddress,
      description: allDetails?.property_details[0]?.PublicRemarks,
      siteName: 'https://savemaxbc.com/',
      images: imageUrl,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: allDetails?.property_details[0]?.StreetAddress,
      description: allDetails?.property_details[0]?.PublicRemarks,
      images: imageUrl,
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
  // console.log('params', params);
  const link = params.listingId;
  const listingId = link.split('-').pop();
  // console.log('id', listingId);
  // const parts = link.split('-');
  // const listingId = parts[parts.length - 1];
  // console.log('listing id', listingId);
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });

  const allDetails = await getSingleProperty({
    listingId: listingId,
  });
  if(allDetails?.property_details?.length === 0) {
    notFound();
  }
// console.log(allDetails);
  return (
    <>
      <SingleListingComponent data={data} allDetails={allDetails} />
    </>
  );
}
