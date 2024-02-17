import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const BottomFeatureSection = dynamic(
  () => import('@/components/elements/BottomFeatureSection'),
  { ssr: false }
);

const JoinSection = dynamic(() => import('@/components/elements/JoinSection'), {
  ssr: false,
});
const SuccessSection = dynamic(
  () => import('@/components/elements/SuccessSection'),
  { ssr: false }
);
const WhoWeAre = dynamic(() => import('@/components/elements/WhoWeAre'), {
  ssr: false,
});
const WhyChooseCareersPage = dynamic(
  () => import('@/components/elements/WhyChooseCareersPage'),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: false,
});

import CareersBanner from '@/components/pages/Careers/CareerBanner';

const query = gql`
  query {
    pages(where: { id: 14 }) {
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
        careers {
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
          aboutSection {
            topHead
            topHeadCopy
            topDescription
            description
            featureTitle
            featureDescription
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          successSection {
            featureTitle
            featureDescription
            linkUrl
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          joinSection {
            featureTitle
            featureDescription
            linkUrl
            image {
              node {
                altText
                sourceUrl
              }
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
          bottomFeatureSection {
            featureTitle
            featureTitle2
            featureDescription
            backgroundImage {
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
        next: { revalidate: 5 },
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

export default async function CareersPage() {
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
        <CareersBanner
          bannerData={data?.pages?.nodes[0]?.careers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.careers?.topFeatureTitle}
          topDesc={data?.pages?.nodes[0]?.careers?.topFeatureDescription}
        />
        <WhoWeAre featuredData={data?.pages?.nodes[0]?.careers?.aboutSection} />
        <WhyChooseCareersPage
          featuredData={data?.pages?.nodes[0]?.careers?.choiceSection}
        />
        <SuccessSection
          featuredData={data?.pages?.nodes[0]?.careers?.successSection}
        />
        <JoinSection
          featuredData={data?.pages?.nodes[0]?.careers?.joinSection}
        />
        <section
          className='mt-10 flex h-[60vh] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:justify-between lg:mt-20 xl:h-[80vh]'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.pages?.nodes[0]?.careers?.bottomFeatureSection?.backgroundImage?.node?.sourceUrl})`,
            overflow: 'hidden',
          }}
        >
          <div className='mt-10 text-center xl:mt-20'>
            {data?.pages?.nodes[0]?.careers?.bottomFeatureSection
              ?.featureTitle &&
              data?.pages?.nodes[0]?.careers?.bottomFeatureSection
                ?.featureTitle2 && (
                <>
                  <h2 className='mt-5 px-5 text-lg font-bold leading-[36px] text-[#f3f4f6] md:text-xl md:leading-[40px] lg:mt-10 lg:text-[40px] lg:leading-[80px]'>
                    {
                      data?.pages?.nodes[0]?.careers?.bottomFeatureSection
                        ?.featureTitle
                    }{' '}
                    <br />{' '}
                    <span className='text-2xl font-bold text-white md:text-2xl lg:text-5xl'>
                      {
                        data?.pages?.nodes[0]?.careers?.bottomFeatureSection
                          ?.featureTitle2
                      }
                    </span>
                  </h2>
                </>
              )}

            {data?.pages?.nodes[0]?.careers?.bottomFeatureSection
              ?.featureDescription && (
              <div
                className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-xs md:pb-0 lg:text-lg'
                dangerouslySetInnerHTML={{
                  __html:
                    data?.pages?.nodes[0]?.careers?.bottomFeatureSection
                      ?.featureDescription,
                }}
              ></div>
            )}

            <div className='flex items-center justify-center'>
              <a
                href='/contact-us'
                className='text-uppercase mt-5 rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
        {/* <BottomFeatureSection
          bottomSection={data?.pages?.nodes[0]?.careers?.bottomFeatureSection}
        /> */}
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
