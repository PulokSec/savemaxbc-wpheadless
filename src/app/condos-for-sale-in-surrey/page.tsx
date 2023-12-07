import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import CondosSaleSurreyLanding from '@/components/pages/Locations/CondosSaleSurreyLanding';

const query = gql`
  query {
    pages(where: { id: 66230 }) {
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
        condosForSaleSurrey {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerSubhead
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          featureSection {
            featureTitle
            featureDescription
            featureBackground {
              sourceUrl
              altText
            }
            featuredDiv {
              description
              image {
                sourceUrl
                altText
              }
            }
          }
          featureSection2 {
            featureTitle
            featureDescription
            featureBackground {
              sourceUrl
              altText
            }
            featuredDiv {
              description
              image {
                sourceUrl
                altText
              }
            }
          }

          choiceSectionCopy {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }

          homebuyingSectionCopy {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }

          benefitsSection {
            title
            description
            leftImage {
              sourceUrl
              altText
            }
            rightText
          }
          benefitsSection2 {
            title
            description
            leftImage {
              sourceUrl
              altText
            }
            rightText
          }
          topAreasSection {
            title
            description
            leftImage {
              sourceUrl
              altText
            }
            rightText
          }
          topAreasSection2 {
            title
            description
            leftImage {
              sourceUrl
              altText
            }
            rightText
          }
          contactSection {
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

export default async function CondosForSaleSurrey() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <main className='font-primary'>
      <section className='bg-white'>
        <div>
          <CondosSaleSurreyLanding allData={data} />
        </div>
      </section>
    </main>
  );
}
