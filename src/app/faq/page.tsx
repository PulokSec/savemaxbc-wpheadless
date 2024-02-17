import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import FaqBanner from '@/components/elements/FaqBanner';
import FaqSection from '@/components/pages/Faq/FaqSection';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 312 }) {
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
        faqPage {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannerHeading
          }

          faqSection {
            faqTitle
            faqDataDiv {
              title
              description
            }
            faqImage {
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

export default async function FaqPage() {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  // console.log(data);
  return (
    <>
      <main>
        <FaqBanner
          bannerData={data?.pages?.nodes[0]?.faqPage?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <FaqSection faqData={data?.pages?.nodes[0]?.faqPage?.faqSection} />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
