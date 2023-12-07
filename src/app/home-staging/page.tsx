import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import ServicePointFeature from '@/components/service-menu-components/ServicePointFeature';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66894 }) {
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
        homeStaging {
          bannerSection {
            bannerImage {
              sourceUrl
              altText
            }
            bannerHeading
          }
          topFeatureDescription
          topFeatureTitle
          serviceFeatureSection {
            featureTitle
            featureSubtitle
            featuredImageRight {
              sourceUrl
              altText
            }
            featuredDivLeft {
              tabNo
              title
              description
            }
            featuredDivRight {
              tabNo
              title
              description
            }
            featuredImageLeft {
              sourceUrl
              altText
            }
          }
          bottomSection {
            backgroundImage {
              sourceUrl
              altText
            }
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

export default async function HomeStaging() {
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
      <main className='font-primary'>
        <BannerWithButton
          bannerData={data?.pages?.nodes[0]?.homeStaging?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className='bg-[#464646] py-20 text-white'>
          <h1 className='mx-auto max-w-[1400px] px-5 text-center text-2xl md:text-3xl lg:text-4xl'>
            {data?.pages?.nodes[0]?.homeStaging?.topFeatureTitle}
          </h1>
          <div
            className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: data?.pages?.nodes[0]?.homeStaging?.topFeatureDescription,
            }}
          ></div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.homeStaging?.serviceFeatureSection
          }
        />
        <section
          className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] md:justify-between'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.pages?.nodes[0]?.homeStaging?.bottomSection?.backgroundImage?.sourceUrl})`,
          }}
        >
          <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
            {data?.pages?.nodes[0]?.homeStaging?.bottomSection?.title && (
              <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
                {data?.pages?.nodes[0]?.homeStaging?.bottomSection?.title}
              </h2>
            )}

            {data?.pages?.nodes[0]?.homeStaging?.bottomSection?.description && (
              <div
                className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html:
                    data?.pages?.nodes[0]?.homeStaging?.bottomSection
                      ?.description,
                }}
              ></div>
            )}
            <div className='flex items-center justify-center'>
              <a
                href='/contact-us'
                className='text-uppercase rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
              >
                Contact Us
              </a>
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
