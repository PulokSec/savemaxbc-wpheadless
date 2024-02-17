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

import AllRealtorsSection from '@/components/elements/AllRealtorsSection';
import FindRealtorBanner from '@/components/elements/FindRealtorBanner';

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
          topFeatureDescription
          topFeatureTitle
          aboutSection {
            topHead
            topDescription
            featureTitle
            featureDescription
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          exploreSection {
            featureTitle
            featureDescription
            imageRight {
              node {
                altText
                sourceUrl
              }
            }
            featuredDivLeft {
              title
              description
            }
            featuredDivRight {
              title
              description
            }
            imageLeft {
              node {
                altText
                sourceUrl
              }
            }
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
  const path = new URL(data?.pages?.nodes[0]?.seo?.canonicalUrl).pathname;
  const canonical_url = `${process.env.NEXT_PUBLIC_BASEURL}${path}`;
  return {
    title: data?.pages?.nodes[0]?.seo?.title,
    description: data?.pages?.nodes[0]?.seo?.description,
    alternates: {
      canonical: canonical_url,
    },
    robots: { index: true, follow: true },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    // manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: canonical_url,
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

export default async function FindARealtor() {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  // console.log(data);
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
          <AllRealtorsSection
            allRealtors={data?.pages?.nodes[0]?.findARealtor?.allRealtors}
          />
          <FindSection
            featuredData={data?.pages?.nodes[0]?.findARealtor?.aboutSection}
          />
          <NewPointFeature
            featuredData={data?.pages?.nodes[0]?.findARealtor?.exploreSection}
          />

          <GetInTouch
            bottomSection={
              data?.pages?.nodes[0]?.findARealtor?.bottomFeatureSection
            }
            usingFor='find-a-realtor'
          />
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
