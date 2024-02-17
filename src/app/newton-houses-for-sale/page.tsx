import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import BenefitsSection from '@/components/elements/BenefitsSection';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import ChoiceCard from '@/components/pages/Locations/ChoiceCard';
import DuplexSouthSurreyBanner from '@/components/pages/Locations/DuplexSouthSurreyBanner';
import SouthSurreyRealtorServiceLeftRight from '@/components/pages/Locations/SouthSurreyRealtorServiceLeftRight';
import Footer from '@/components/shared/Footer';
import NextImage from '@/components/NextImage';

const query = gql`
  query {
    pages(where: { id: 112760 }) {
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
        newtonHousesForSale {
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

export default async function NewtonHousesForSale() {
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
          <DuplexSouthSurreyBanner
            bannerData={
              data?.pages?.nodes[0]?.newtonHousesForSale?.bannerSection
            }
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
           

            <div className='max-w-screen overflow-x-hidden mb-10'>
               <div
                  className={` mx-auto `}
                >
                  <div className='w-full py-10 lg:py-20'>
                    <div className='grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mx-auto lg:mx-0 lg:max-w-none lg:gap-0'>
                      <div className='col-span-12 ml-5 md:col-span-12 md:ml-5 lg:col-span-5 lg:col-start-1 lg:pl-10 2xl:col-start-2'>
                        <div className=''>
                          <div
                            className='md:text-md px-2 text-xs md:px-0 lg:text-lg'
                            dangerouslySetInnerHTML={{
                              __html:
                                data?.pages?.nodes[0]?.newtonHousesForSale
                                  ?.aboutSection?.leftText,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className='col-span-12 col-start-2 col-end-12 lg:col-span-5 lg:col-start-7 2xl:col-start-8'>
                        <NextImage
                          useSkeleton
                          className='w-[100%]'
                          src={
                            data?.pages?.nodes[0]?.newtonHousesForSale
                              ?.aboutSection?.rightImage?.node?.sourceUrl
                          }
                          alt={
                            data?.pages?.nodes[0]?.newtonHousesForSale
                              ?.aboutSection?.rightImage?.node?.altText
                          }
                          width='600'
                          height='200'
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>

          <div className='mt-20'>
            <div
            style={{
              background: `url(${data?.pages?.nodes[0]?.newtonHousesForSale?.choiceBanner?.bannerImage?.node?.sourceUrl}) no-repeat center center`,
              backgroundSize: '100% 100%',
            }}
            className='flex h-[350px] items-center justify-center md:h-[400px] lg:h-[500px] 2xl:h-[700px] '
          >
            <div className='mx-auto max-w-[1200px] p-2 text-center'>
              <h2 className='pt-14 text-[24px] font-bold md:pt-10 lg:mt-5 xl:text-[40px]'>
                {
                  data?.pages?.nodes[0]?.newtonHousesForSale?.choiceBanner?.bannerTitle
                }
              </h2>
              <div
                className='mx-auto mt-2 md:mt-5 w-full md:w-3/4'
                dangerouslySetInnerHTML={{
                  __html:
                    data?.pages?.nodes[0]?.newtonHousesForSale?.choiceBanner?.bannerDescription,
                }}
              ></div>
            </div>
          </div>
          </div>

          <div className='bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat pb-[20px] text-white'>
            <div className='mx-auto max-w-[1250px] p-3'>
              <div className=' my-10'>
                {data?.pages?.nodes[0]?.newtonHousesForSale?.choiceFeature?.map(
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

         
           <div>
            <SouthSurreyRealtorServiceLeftRight data={data?.pages?.nodes[0]?.newtonHousesForSale?.estateServices} />
            <div className='mt-10 mb-20 md:my-20 flex items-center justify-center'>
              <a
                href='/contact-us'
                className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
              >
                Contact Us
              </a>
            </div>  
           

          

          </div> 
          <div className='-mt-72 md:-mt-28 lg:-mt-48 xl:mt-0'>
            <BenefitsSection
              featuredData={
                data?.pages?.nodes[0]?.newtonHousesForSale?.benefitsSection
              }
            />
          </div>

          <div className='-mt-40 lg:-mt-48'>
            <HomeBuyerSection
              featuredData={
                data?.pages?.nodes[0]?.newtonHousesForSale?.homebuyingSection
              }
            />
          </div>
            
          <SouthSurreyRealtorServiceLeftRight
            data={data?.pages?.nodes[0]?.newtonHousesForSale?.estateServicesCopy}
          />

          <div className='mt-10 mb-20 md:my-20 flex items-center justify-center'>
              <a
                href='/apply-now'
                className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
              >
                Apply Now
              </a>
          </div> 
          
          <section
            className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] md:justify-between'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.pages?.nodes[0]?.newtonHousesForSale?.contactSection?.image?.node?.sourceUrl})`,
            }}
          >
            <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
              {data?.pages?.nodes[0]?.newtonHousesForSale?.contactSection?.title && (
                <h2 className='text-center text-2xl md:text-3xl lg:text-4xl px-5'>
                  {
                    data?.pages?.nodes[0]?.newtonHousesForSale?.contactSection?.title
                  }
                </h2>
              )}

              {data?.pages?.nodes[0]?.newtonHousesForSale?.contactSection?.description && (
                <div
                  className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:px-16 lg:text-lg'
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.pages?.nodes[0]?.newtonHousesForSale?.contactSection?.description,
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
