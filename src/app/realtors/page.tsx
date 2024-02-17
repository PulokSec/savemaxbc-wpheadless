import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FindSection = dynamic(() => import('@/components/elements/FindSection'), {
  ssr: false,
});
const NewPointFeature = dynamic(
  () => import('@/components/elements/NewPointFeature'),
  { ssr: false }
);
const GetInTouch = dynamic(
  () => import('@/components/pages/Listings/GetInTouch'),
  { ssr: false }
);
const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: false,
});

import FindRealtorBanner from '@/components/elements/FindRealtorBanner';
import RealtorSearchResult from '@/components/elements/RealtorSearchResult';

const query = gql`
  query {
    pages(where: { id: 16 }) {
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
        findARealtor {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannerHeading
            bannerDescription
          }

          bottomFeatureSection {
            title
            featureDescription
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          allRealtors {
            title
            description
            realtorCard {
              name
              phone
              email
              image {
                node {
                  altText
                  sourceUrl
                }
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
    title: data?.pages?.nodes[0]?.seo?.title,
    description: data?.pages?.nodes[0]?.seo?.description,

    alternates: {
      canonical: 'https://savemaxbc.com/realtors/',
    },
    robots: { index: true, follow: true },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    // manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/realtors/',
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

export default async function Realtors({ searchParams }: any) {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  // console.log(data);
  const allRealtors =
    data?.pages?.nodes[0]?.findARealtor?.allRealtors?.realtorCard;
  const name = searchParams.name || '';
  const number = searchParams.number || '';
  const filteredRealtors = allRealtors.filter(
    (realtor: any) =>
      realtor.name.toLowerCase().includes(name.toLowerCase()) &&
      realtor.phone.includes(number)
  );

  return (
    <>
      <main>
        <FindRealtorBanner
          bannerData={data?.pages?.nodes[0]?.findARealtor?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.findARealtor?.topFeatureTitle}
          topDesc={data?.pages?.nodes[0]?.findARealtor?.topFeatureDescription}
        />

        <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/12/bg.png")] bg-cover bg-no-repeat'>
          <div className='mt-10'>
            <RealtorSearchResult allRealtors={filteredRealtors} />
          </div>
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
