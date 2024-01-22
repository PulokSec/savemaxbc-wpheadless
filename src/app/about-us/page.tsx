import { gql } from '@apollo/client';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import { getClient } from '@/lib/apollo';

import AboutBanner from '@/components/elements/AboutBanner';
const AboutFeature = dynamic(
  () => import('@/components/elements/AboutFeature'),
  { ssr: false }
);

const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: false,
});

const query = gql`
  query {
    pages(where: { id: 12 }) {
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
        aboutUs {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerImagePc {
              sourceUrl
            }
            bannerHeading
          }
          aboutFeatureSection {
            topHead
            subHead
            featuredData {
              name
              shortDescription
              description
              designation
              subDesignation
              aboutImage {
                sourceUrl
                altText
              }
            }
          }
          bottomFeatureSection {
            title
            featureDescription
            backgroundImage {
              sourceUrl
              altText
            }
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
export default async function page() {
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
        <AboutBanner
          bannerData={data?.pages?.nodes[0]?.aboutUs?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <AboutFeature
          featureSection={data?.pages?.nodes[0]?.aboutUs?.aboutFeatureSection}
        />
        <section className='mx-auto w-full '>
          <div className='relative h-[40vh] w-full overflow-x-hidden lg:h-[60vh] xl:h-[100vh]'>
            <Image
              src={
                data?.pages?.nodes[0]?.aboutUs?.bottomFeatureSection
                  ?.backgroundImage?.sourceUrl
              }
              fill={true}
              alt={
                data?.pages?.nodes[0]?.aboutUs?.bottomFeatureSection
                  ?.backgroundImage?.altText
              }
              className='rounded-t-[100%]'
            />
            <div className='absolute h-full w-full overflow-hidden rounded-t-[100%] bg-gray-500 bg-opacity-70'>
              <div className=''>
                <p className='px-5 pt-16 text-center text-xl font-bold text-white md:pt-32 md:text-5xl lg:pt-36 xl:pt-44'>
                  {data?.pages?.nodes[0]?.aboutUs?.bottomFeatureSection?.title}
                </p>
                <div className='mt-7 text-center md:mt-14'>
                  <a
                    href='/contact-us'
                    className='text-uppercase rounded-md border-[2px] border-solid px-5 py-3 text-base font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg'
                  >
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
