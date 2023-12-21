import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import MortgageContact from '@/components/pages/Contact/MortgageContact';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 89231 }) {
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
        Mortgagecalculator {
          bannerSection {
            bannerImage {
              sourceUrl
              altText
            }
            bannerHeading
          }
          calculatorPageContent
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

export default async function MortgageCalculator() {
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
      <BannerWithButton
        bannerData={data?.pages?.nodes[0]?.Mortgagecalculator?.bannerSection}
        headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
      />

      <div className='bg-cover bg-no-repeat pb-40'>
        <div className='pb-20 pt-10 md:py-20'>
          <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-5xl'>
            Mortgage Calculator
          </h1>
        </div>
        <div
          className='md:text-md mx-auto mt-5 h-full max-h-[1765px] w-full max-w-[1400px] px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              data?.pages?.nodes[0]?.Mortgagecalculator?.calculatorPageContent,
          }}
        ></div>
      </div>
      <MortgageContact
        phone='778-863-4080'
        address='11925 80 Avenue, Delta, BC V4C 1Y1'
        email='info@kazhassan.com'
      />
      <Footer
        navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
