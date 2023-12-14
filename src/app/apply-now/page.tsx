import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import ApplyNowForm from '@/components/pages/Contact/ApplyNowForm';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 89107 }) {
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
        applyNow {
          bannerSection {
            bannerImage {
              sourceUrl
              altText
            }
            bannerHeading
          }
          title
          description
          phone
          email
          address
          background {
            sourceUrl
            altText
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

const fields = [{ name: 'Buying' }, { name: 'Selling' }, { name: 'Other' }];

export default async function ApplyNow() {
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
          <BannerWithButton
            bannerData={data?.pages?.nodes[0]?.applyNow?.bannerSection}
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div
            className='bg-cover bg-no-repeat '
            style={{
              backgroundImage: `url(${data?.pages?.nodes[0]?.applyNow?.background?.sourceUrl})`,
            }}
          >
            <ApplyNowForm
              title={data?.pages?.nodes[0]?.applyNow?.title}
              desc={data?.pages?.nodes[0]?.applyNow?.description}
              phone={data?.pages?.nodes[0]?.applyNow?.phone}
              email={data?.pages?.nodes[0]?.applyNow?.email}
              address={data?.pages?.nodes[0]?.applyNow?.address}
              fields={fields}
            />
          </div>

          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </div>
      </section>
    </main>
  );
}
