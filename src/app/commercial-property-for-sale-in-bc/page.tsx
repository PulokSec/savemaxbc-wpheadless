import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import CommercialBanner from '@/components/elements/CommercialBanner';
import CommercialServiceFeature from '@/components/service-menu-components/ComercialServiceFeatures';
import CommercialPropertyBottomSection from '@/components/service-menu-components/CommercialPropertyBottomSection';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66856 }) {
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
        commercialPropertySale {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          serviceFeatureSection {
            featureTitle
            featureDescription
            featuredDivLeft {
              tabNo
              title
              description
              image {
                sourceUrl
                altText
              }
            }
            featuredDivRight {
              tabNo
              title
              description
              image {
                sourceUrl
                altText
              }
            }
            featuredRightImage {
              sourceUrl
              altText
            }
            featuredLeftImage {
              sourceUrl
              altText
            }
          }
          bottomSection {
            backgroundImage {
              sourceUrl
              altText
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

export default async function CommercialSale() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  // console.log(data);
  return (
    <>
      <main className='max-w-screen bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-center bg-no-repeat'>
        <CommercialBanner
          bannerData={
            data?.pages?.nodes[0]?.commercialPropertySale?.bannerSection
          }
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className='mt-10 md:mt-20'>
          <div className='text-center'>
            <h1 className='mx-auto w-full px-2 text-center text-xl text-[#082f49] md:text-3xl lg:max-w-[1500px] lg:text-4xl lg:leading-[44px]'>
              {data?.pages?.nodes[0]?.commercialPropertySale?.topFeatureTitle}
            </h1>
            <div
              className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.commercialPropertySale
                    ?.topFeatureDescription,
              }}
            ></div>
          </div>
        </div>
        <div className='mt-10 md:mt-28'>
          <div className='text-center'>
            <h2 className='mx-auto w-full px-2 text-center text-2xl md:text-3xl lg:max-w-[1500px] lg:text-5xl lg:text-[42px] lg:leading-[50px]'>
              {
                data?.pages?.nodes[0]?.commercialPropertySale
                  ?.serviceFeatureSection?.featureTitle
              }
            </h2>
            <div
              className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.commercialPropertySale
                    ?.serviceFeatureSection?.featureDescription,
              }}
            ></div>
          </div>
        </div>
        <CommercialServiceFeature
          featuredData={
            data?.pages?.nodes[0]?.commercialPropertySale?.serviceFeatureSection
          }
        />
        <CommercialPropertyBottomSection
          bottomSection={
            data?.pages?.nodes[0]?.commercialPropertySale?.bottomSection
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
