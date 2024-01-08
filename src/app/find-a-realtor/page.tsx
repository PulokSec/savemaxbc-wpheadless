import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

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
import Image from 'next/image';
import AllRealtorsSection from '@/components/elements/AllRealtorsSection';

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
              sourceUrl
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
              sourceUrl
              altText
            }
          }
          exploreSection {
            featureTitle
            featureDescription
            imageRight {
              sourceUrl
              altText
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
              sourceUrl
              altText
            }
          }
          bottomFeatureSection {
            title
            featureDescription
            backgroundImage {
              sourceUrl
              altText
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
                sourceUrl
                altText
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

export default async function CareersPage() {
  const { data } = await getClient().query({
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

        <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/bg.png")] bg-cover bg-no-repeat'>
          <FindSection
            featuredData={data?.pages?.nodes[0]?.findARealtor?.aboutSection}
          />

          <AllRealtorsSection
            allRealtors={data?.pages?.nodes[0]?.findARealtor?.allRealtors}
          />

          <NewPointFeature
            featuredData={data?.pages?.nodes[0]?.findARealtor?.exploreSection}
          />

          <GetInTouch
            bottomSection={
              data?.pages?.nodes[0]?.findARealtor?.bottomFeatureSection
            }
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
