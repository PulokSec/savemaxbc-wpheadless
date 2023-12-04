import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import NextImage from '@/components/NextImage';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Footer from '@/components/shared/Footer';
import SouthSurreyRealtorServiceLeftRight from '@/components/pages/Locations/SouthSurreyRealtorServiceLeftRight';

const query = gql`
  query {
    pages(where: { id: 66520 }) {
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
        southSurreyRealtors {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
          }
          topBannerTitle
          topBannerDescription
          aboutSection {
            title
            rightText
            leftImage {
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
          estateServices {
            title
            description
            servicesDiv {
              description
              image {
                sourceUrl
                altText
              }
            }
          }
          contactSection {
            title
            description
            image {
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
  console.log('data', data);
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

export default async function southSurreyRealtors() {
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
            bannerData={
              data?.pages?.nodes[0]?.southSurreyRealtors?.bannerSection
            }
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className='py-20'>
            <h2 className='px-5 text-center text-2xl md:text-3xl lg:text-4xl'>
              {data?.pages?.nodes[0]?.southSurreyRealtors?.topBannerTitle}
            </h2>
            <div
              className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.southSurreyRealtors
                    ?.topBannerDescription,
              }}
            ></div>
          </div>
          <div className='bg-gray-100'>
            <div className='max-w-screen overflow-x-hidden '>
              <section>
                <div
                  className={`${
                    data?.pages?.nodes[0]?.southSurreyRealtors?.aboutSection
                      ?.title
                      ? 'py-10 lg:py-20'
                      : ''
                  } mx-auto `}
                >
                  <div className={`mx-auto max-w-[1400px] `}>
                    <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
                      {
                        data?.pages?.nodes[0]?.southSurreyRealtors?.aboutSection
                          ?.title
                      }
                    </h2>
                  </div>

                  <div className='w-full '>
                    <div className='mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-auto lg:mx-0 lg:mt-20 lg:max-w-none lg:gap-0'>
                      <div className='col-span-12 ml-5 md:col-span-12 md:ml-5 lg:col-span-5 lg:col-start-1 lg:pl-10 2xl:col-start-2'>
                        <div className=''>
                          <div
                            className='md:text-md text-xs lg:text-lg'
                            dangerouslySetInnerHTML={{
                              __html:
                                data?.pages?.nodes[0]?.southSurreyRealtors
                                  ?.aboutSection?.rightText,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-span-4 col-start-8 col-end-12 md:col-span-3 md:col-start-11 md:col-end-12 lg:col-span-5 lg:col-start-7 2xl:col-start-8'>
                        <NextImage
                          useSkeleton
                          className='md:w-100 w-40 lg:w-[100%]'
                          src={
                            data?.pages?.nodes[0]?.southSurreyRealtors
                              ?.aboutSection?.leftImage?.sourceUrl
                          }
                          alt={
                            data?.pages?.nodes[0]?.southSurreyRealtors
                              ?.aboutSection?.leftImage?.altText
                          }
                          width='600'
                          height='200'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <HomeBuyerSection
            featuredData={
              data?.pages?.nodes[0]?.southSurreyRealtors?.homebuyingSection
            }
          />
          {/*  */}
          <SouthSurreyRealtorServiceLeftRight
            data={data?.pages?.nodes[0]?.southSurreyRealtors?.estateServices}
          />

          <section
            className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] md:justify-between'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.pages?.nodes[0]?.southSurreyRealtors?.contactSection?.image?.sourceUrl})`,
            }}
          >
            <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
              {data?.pages?.nodes[0]?.southSurreyRealtors?.contactSection
                ?.title && (
                <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
                  {
                    data?.pages?.nodes[0]?.southSurreyRealtors?.contactSection
                      ?.title
                  }
                </h2>
              )}

              {data?.pages?.nodes[0]?.southSurreyRealtors?.contactSection
                ?.description && (
                <div
                  className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:text-lg'
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.pages?.nodes[0]?.southSurreyRealtors?.contactSection
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
        </div>
      </section>
    </main>
  );
}
