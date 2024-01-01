import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';
const BottomServiceSection = dynamic(
  () => import('@/components/service-menu-components/BottomServiceSection'),
  { ssr: false }
);
const ServicePointFeature = dynamic(
  () => import('@/components/service-menu-components/ServicePointFeature'),
  { ssr: false }
);
const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: false,
});

import SharedBanner from '@/components/elements/SharedBanner';

const query = gql`
  query {
    pages(where: { id: 445 }) {
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
        commercialBuyers {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          serviceFeatureSection {
            featureTitle
            featureSubtitle
            featuredImageRight {
              sourceUrl
              altText
            }
            featuredDivLeft {
              tabNo
              title
              description
            }
            featuredDivRight {
              tabNo
              title
              description
            }
            featuredImageLeft {
              sourceUrl
              altText
            }
          }
          bottomSection {
            backgroundImage {
              sourceUrl
              altText
            }
            description
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

export default async function CommercialBuyers() {
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
        <SharedBanner
          bannerData={data?.pages?.nodes[0]?.commercialBuyers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.commercialBuyers?.topFeatureTitle}
          topDesc={
            data?.pages?.nodes[0]?.commercialBuyers?.topFeatureDescription
          }
        />
        <div className='mt-24 md:mt-24 lg:mt-60'>
          <div className='text-center'>
            <h1 className='w-full text-center text-xl text-[#585858] md:text-2xl lg:text-3xl'>
              {
                data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
                  ?.featureTitle
              }
            </h1>
            <h2 className='mt-1 w-full text-center text-2xl md:mt-4 md:text-3xl lg:text-5xl'>
              {
                data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
                  ?.featureSubtitle
              }
            </h2>
          </div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
          }
        />
        <BottomServiceSection
          bottomSection={data?.pages?.nodes[0]?.commercialBuyers?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
