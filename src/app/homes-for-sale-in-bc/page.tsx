import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import HomeForSaleLanding from '@/components/pages/Home/HomeLanding';

const query = gql`
  query {
    pages(where: { id: 65743 }) {
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
        homeForSaleInBc {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerSubtitle
            bannerDescription
          }
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
          considerSection {
            featureTitle
            featureDescription
            topHead
            topDescription
            image {
              sourceUrl
              altText
            }
          }
          choiceSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          aboutSection {
            aboutTitle
            aboutDescription
            aboutDescriptionBottom
            aboutImage {
              sourceUrl
              altText
            }
          }
          homebuyingSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          contactSection {
            contactTitle
            contactDescription
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            contactImage {
              sourceUrl
              altText
            }
            phone
            email
            addressOne
            addressTwo
            facebookLink
            instagramLink
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

export default async function HomeForSalePage() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <>
      <main>
        <section className='bg-white'>
          <div>
            <HomeForSaleLanding allData={data} />
          </div>
        </section>
      </main>
    </>
  );
}
