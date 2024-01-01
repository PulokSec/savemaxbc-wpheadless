import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';

import { getClient } from '@/lib/apollo';
const ServicesBottomBanner = dynamic(
  () => import('@/components/pages/Services/ServicesBottomBanner'),
  { ssr: false }
);
const FeaturedServices = dynamic(
  () => import('@/components/pages/Services/FeaturedServices'),
  { ssr: false }
);

import ServiceBanner from '@/components/pages/Services/ServiceBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 22 }) {
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
        services {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            topBannerHeading
            bannerHeading
            bannerDescription
          }
          featuredServiceTitle
          featuredServiceSection {
            title
            description
            image {
              sourceUrl
              altText
            }
          }
          bottomSection {
            title
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
export default async function ServicePage() {
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
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <ServiceBanner
          bannerData={data?.pages?.nodes[0]?.services?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <FeaturedServices
          featuredData={data?.pages?.nodes[0]?.services?.featuredServiceSection}
          featuredTitle={data?.pages?.nodes[0]?.services?.featuredServiceTitle}
        />
      </section>

      <ServicesBottomBanner
        bottomSection={data?.pages?.nodes[0]?.services?.bottomSection}
      />
      <Footer
        navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
