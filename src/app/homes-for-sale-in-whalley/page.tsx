import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import DuplexSouthSurreyBanner from '@/components/pages/Locations/DuplexSouthSurreyBanner';
import HomesWhalleyComponent from '@/components/pages/Locations/HomesWhalleyComponent';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 112862 }) {
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
        homesForSaleInWhalley {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannerHeading
          }
          topFeatureTitle
          topFeatureDescription
          button
          aboutSection {
            leftText
            rightImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          choiceBanner {
            bannerImage {
              node {
                altText
                sourceUrl
              }
            }
            bannerTitle
            bannerSubtitle
            bannerDescription
          }
          choiceFeature {
            title
            description
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          benefitsSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
            bottomDescription
          }
          homebuyingSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          estateServices {
            title
            description
            servicesDiv {
              description
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
          featureTitle
          featureDescription
          estateServicesCopy {
            title
            description
            servicesDiv {
              description
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }

           buyingProcess {
            title
            description
            servicesDiv {
              description
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }

          bottomSection
          contactSection {
            title
            description
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

export default async function HomesForSaleInWhalley() {
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
      <DuplexSouthSurreyBanner bannerData={data?.pages?.nodes[0]?.homesForSaleInWhalley?.bannerSection} 
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <HomesWhalleyComponent data={data?.pages?.nodes[0]?.homesForSaleInWhalley} />
      <Footer navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
