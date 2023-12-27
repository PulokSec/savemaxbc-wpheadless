import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import BenefitsSection from '@/components/elements/BenefitsSection';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import NextImage from '@/components/NextImage';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import ChoiceCard from '@/components/pages/Locations/ChoiceCard';
import SouthSurreyRealtorServiceLeftRight from '@/components/pages/Locations/SouthSurreyRealtorServiceLeftRight';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66659 }) {
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
        duplexSaleSouthSurrey {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
          }
          aboutSection {
            title
            rightText
            leftImage {
              sourceUrl
              altText
            }
          }
          choiceBanner {
            bannerImage {
              sourceUrl
              altText
            }
            bannerTitle
            bannerSubtitle
            bannerDescription
          }
          choiceFeature {
            title
            description
            image {
              sourceUrl
              altText
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
  // console.log('data', data);
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

export default async function DuplexSaleSouthSurrey() {
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
              data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.bannerSection
            }
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className=''>
            <div className='max-w-screen overflow-x-hidden '>
              <section>
                <div
                  className={`${
                    data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.aboutSection
                      ?.title
                      ? 'py-10 lg:py-20'
                      : ''
                  } mx-auto `}
                >
                  <div className='w-full py-10 lg:py-20'>
                    <div className='grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-auto lg:mx-0 lg:max-w-none lg:gap-0'>
                      <div className='col-span-12 ml-5 md:col-span-12 md:ml-5 lg:col-span-5 lg:col-start-1 lg:pl-10 2xl:col-start-2'>
                        <div className=''>
                          <div
                            className='md:text-md text-xs lg:text-lg px-2 md:px-0'
                            dangerouslySetInnerHTML={{
                              __html:
                                data?.pages?.nodes[0]?.duplexSaleSouthSurrey
                                  ?.aboutSection?.rightText,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-span-12 col-start-2 col-end-12 lg:col-span-5 lg:col-start-7 2xl:col-start-8'>
                        <NextImage
                          useSkeleton
                          className='w-[100%]'
                          src={
                            data?.pages?.nodes[0]?.duplexSaleSouthSurrey
                              ?.aboutSection?.leftImage?.sourceUrl
                          }
                          alt={
                            data?.pages?.nodes[0]?.duplexSaleSouthSurrey
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

          <div
            style={{
              background: `url(${data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.choiceBanner?.bannerImage?.sourceUrl}) no-repeat center center`,
              backgroundSize: '100% 100%',
            }}
            className='flex h-[350px] items-center 2xl:h-[45vh] '
          >
            <div className='mx-auto max-w-[1250px] p-3 text-center'>
              <h2 className='text-[30px] font-bold lg:mt-5 xl:text-[40px]'>
                {
                  data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.choiceBanner
                    ?.bannerTitle
                }
              </h2>
              <div
                className='mx-auto mt-5 w-full md:w-2/4'
                dangerouslySetInnerHTML={{
                  __html:
                    data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.choiceBanner
                      ?.bannerDescription,
                }}
              ></div>
            </div>
          </div>

          <div className='bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat pb-[20px] text-white'>
            <div className='mx-auto max-w-[1250px] p-3'>
              <div className=' my-10'>
                {data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.choiceFeature?.map(
                  (cardData: any, index: number) => (
                    <ChoiceCard
                      cardData={cardData}
                      index={index + 1}
                      key={index}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <SouthSurreyRealtorServiceLeftRight
            data={data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.estateServices}
          />
          <div className='-mt-60 md:-mt-28 lg:-mt-48 xl:mt-0'>
            <BenefitsSection
              featuredData={
                data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.benefitsSection
              }
            />
          </div>

          <div className='-mt-40 lg:-mt-48'>
            <HomeBuyerSection
              featuredData={
                data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.homebuyingSection
              }
            />
          </div>

          <section
            className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] md:justify-between'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.contactSection?.image?.sourceUrl})`,
            }}
          >
            <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
              {data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.contactSection
                ?.title && (
                <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
                  {
                    data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.contactSection
                      ?.title
                  }
                </h2>
              )}

              {data?.pages?.nodes[0]?.duplexSaleSouthSurrey?.contactSection
                ?.description && (
                <div
                  className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:text-lg'
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.pages?.nodes[0]?.duplexSaleSouthSurrey
                        ?.contactSection?.description,
                  }}
                ></div>
              )}
              <div className='flex items-center justify-center'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
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
