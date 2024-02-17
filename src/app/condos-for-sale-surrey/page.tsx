import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import React from 'react';

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
              node {
                sourceUrl
              }
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
              node {
                altText
                sourceUrl
              }
            }
            featuredDiv {
              description
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
          featureSection2 {
            featureTitle
            featureDescription
            featureBackground {
              node {
                altText
                sourceUrl
              }
            }
            featuredDiv {
              description
              image {
                node {
                  altText
                  sourceUrl
                }
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
              node {
                altText
                sourceUrl
              }
            }
            rightText
          }
          benefitsSection2 {
            title
            description
            leftImage {
              node {
                altText
                sourceUrl
              }
            }
            rightText
          }
          topAreasSection {
            title
            description
            leftImage {
              node {
                altText
                sourceUrl
              }
            }
            rightText
          }
          topAreasSection2 {
            title
            description
            leftImage {
              node {
                altText
                sourceUrl
              }
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
  // const path = new URL(data?.pages?.nodes[0]?.seo?.canonicalUrl).pathname;
  // const canonical_url = `${process.env.NEXT_PUBLIC_BASEURL}${path}`;
  return {
    title: data?.pages?.nodes[0]?.seo?.title,
    description: data?.pages?.nodes[0]?.seo?.description,
    alternates: {
      canonical: 'https://savemaxbc.com/condos-for-sale-surrey/',
    },
    robots: { index: true, follow: true },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    // manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/condos-for-sale-surrey/',
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
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  return (
    <main>
      <section className='bg-white'>
        <div>
          <CondosSaleSurreyLanding allData={data} />
        </div>
      </section>
    </main>
  );
}
