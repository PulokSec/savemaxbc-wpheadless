import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import CommercialBanner from '@/components/elements/CommercialBanner';
import AdviceServiceFeature from '@/components/service-menu-components/AdviceServiceFeature';
import BottomServiceSection from '@/components/service-menu-components/BottomServiceSection';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66960 }) {
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
        realestateServices {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannerHeading
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          serviceFeatureSection {
            featureTitle
            featureDescription
            featuredDiv {
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
          bottomSection {
            backgroundImage {
              node {
                altText
                sourceUrl
              }
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

export default async function RealService() {
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
    <>
      <main className='max-w-screen bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat'>
        <CommercialBanner
          bannerData={data?.pages?.nodes[0]?.realestateServices?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className='mt-20 md:mt-40 lg:mt-40'>
          <div className='text-center'>
            <h1 className='w-full text-center text-2xl md:text-3xl lg:text-5xl'>
              {data?.pages?.nodes[0]?.realestateServices?.topFeatureTitle}
            </h1>
            <div
              className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.realestateServices
                    ?.topFeatureDescription,
              }}
            ></div>
          </div>
        </div>
        <AdviceServiceFeature
          featuredData={
            data?.pages?.nodes[0]?.realestateServices?.serviceFeatureSection
              ?.featuredDiv
          }
        />
        <BottomServiceSection
          bottomSection={
            data?.pages?.nodes[0]?.realestateServices?.bottomSection
          }
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
