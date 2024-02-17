import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import NextImage from '@/components/NextImage';
import BottomServiceSection from '@/components/service-menu-components/BottomServiceSection';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const query = gql`
  query {
    pages(where: { id: 89512 }) {
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
        virtualTour {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannerHeading
            bannerButton
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

export default async function VirtualTour() {
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
      <main className='max-w-screen bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat'>
        <div
          className='relative h-[70vh] w-full bg-cover bg-fixed bg-[center_center] bg-no-repeat lg:h-[70vh]'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${data?.pages?.nodes[0]?.virtualTour?.bannerSection?.bannerImage?.node?.sourceUrl})`,
          }}
        >
          <Header
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='mx-auto w-full lg:px-10'>
              <h1 className='w-[350px] text-center text-xl font-bold uppercase tracking-wide text-white md:w-[600px] md:text-3xl lg:w-[900px] lg:text-5xl lg:leading-[60px] xl:w-[700px] xl:text-6xl xl:leading-[66px]'>
                {
                  data?.pages?.nodes[0]?.virtualTour?.bannerSection
                    ?.bannerHeading
                }
              </h1>
              {data?.pages?.nodes[0]?.virtualTour?.bannerSection
                ?.bannerDescription && (
                <div
                  className='mt-8 text-center text-xl text-white lg:text-3xl'
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.pages?.nodes[0]?.virtualTour?.bannerSection
                        ?.bannerDescription,
                  }}
                ></div>
              )}
              {data?.pages?.nodes[0]?.virtualTour?.bannerSection
                ?.bannerButton === 'Contact Us' && (
                <div className='flex items-center justify-center'>
                  <a
                    href='/contact-us'
                    className='text-uppercase mt-5 rounded-md border-2 px-3 py-2 text-base font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg lg:px-5 lg:py-3'
                  >
                    {
                      data?.pages?.nodes[0]?.virtualTour?.bannerSection
                        ?.bannerButton
                    }
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='container mx-auto mb-20 mt-20 md:mt-20'>
          <div className='text-center'>
            <h2 className='w-full text-center text-2xl md:text-3xl lg:text-5xl'>
              {data?.pages?.nodes[0]?.virtualTour?.topFeatureTitle}
            </h2>
            <div
              className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.virtualTour?.topFeatureDescription,
              }}
            ></div>
          </div>
        </div>

        {data?.pages?.nodes[0]?.virtualTour?.serviceFeatureSection?.featuredDiv?.map(
          (item: any, idx: number) => (
            <div key={idx}>
              <div className='mx-auto mt-0 max-w-[1400px] p-5 md:mt-10'>
                <div
                  className={`${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col items-center justify-center gap-4 lg:gap-10`}
                >
                  <div className='md:w-1/2 '>
                    <div className=''>
                      <h3 className='mb-3 font-bold'>{item.title}</h3>
                      <div
                        className='md:text-md text-xs lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className='md:w-1/2'>
                    {/* <Fade
                      direction={`${idx % 2 === 0 ? 'right' : 'left'}`}
                      delay={0.5}
                      fraction={0.2}
                      triggerOnce
                    > */}
                    <NextImage
                      useSkeleton
                      className='w-[300px] lg:w-[100%]'
                      src={item?.image?.node?.sourceUrl}
                      alt={item?.image?.node?.altText}
                      width='600'
                      height='200'
                    />
                    {/* </Fade> */}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <BottomServiceSection
          bottomSection={data?.pages?.nodes[0]?.virtualTour?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
