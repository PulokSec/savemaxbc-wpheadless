import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import ApartmentSaleBanner from '@/components/elements/ApartmentSaleBanner';
import BottomFeatureSection from '@/components/elements/BottomFeatureSection';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import PointFeature from '@/components/elements/PointFeature';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import ChoiceBanner from '@/components/pages/Locations/ChoiceBanner';
import ChoiceSection from '@/components/pages/Locations/ChoiceSection';
import EssentialSection from '@/components/pages/Locations/EssentialSection';
import HomeBuyingProcess from '@/components/pages/Locations/HomebuyingProcess';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66058 }) {
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
        apartmentForSaleSurrey {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          exploreSection {
            featureTitle
            featureDescription
            imageRight {
              sourceUrl
              altText
            }
            featuredDivLeft {
              title
              description
            }
            featuredDivRight {
              title
              description
            }
            imageLeft {
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
          homeprocessSection {
            backgroundImage {
              sourceUrl
              altText
            }
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
            bottomFeatureDescription
          }
          homebuyingSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          essentialSection {
            backgroundImage {
              sourceUrl
              altText
            }
            featureTitle
            featureSubtitle
            featureDescription
            featuredData {
              title
              description
              image {
                sourceUrl
                altText
              }
            }
            bottomDescription
          }
          choiceSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          bottomSection {
            title
            description
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

export default async function ApartmentForSaleSurrey() {
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
        <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/Middle-part-bg.png")] bg-cover bg-no-repeat'>
          <ApartmentSaleBanner
            bannerData={
              data?.pages?.nodes[0]?.apartmentForSaleSurrey?.bannerSection
            }
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className='mx-auto mt-10 max-w-[1400px] lg:mt-20'>
            <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
              {data?.pages?.nodes[0]?.apartmentForSaleSurrey?.topFeatureTitle}
            </h1>
            <div
              className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.nodes[0]?.apartmentForSaleSurrey
                    ?.topFeatureDescription,
              }}
            ></div>
          </div>
          <PointFeature
            featuredData={
              data?.pages?.nodes[0]?.apartmentForSaleSurrey?.exploreSection
            }
          />
          <div className='pt-10 lg:mt-0'>
            <ChoiceBanner
              choiceBannerData={
                data?.pages?.nodes[0]?.apartmentForSaleSurrey?.choiceBanner
              }
            />
          </div>

          <ChoiceSection
            featuredData={
              data?.pages?.nodes[0]?.apartmentForSaleSurrey?.choiceFeature
            }
            usingFor='apartment'
          />

          <div className='mb-10'>
            <HomeBuyerSection
              featuredData={
                data?.pages?.nodes[0]?.apartmentForSaleSurrey?.homebuyingSection
              }
            />
          </div>
          <EssentialSection
            featuredData={
              data?.pages?.nodes[0]?.apartmentForSaleSurrey?.essentialSection
            }
          />

          <div className='-mt-96 lg:-mt-52'>
            <HomeBuyingProcess
              featuredData={
                data?.pages?.nodes[0]?.apartmentForSaleSurrey
                  ?.homeprocessSection
              }
            />
          </div>
          <div className='-mt-80 md:-mt-0 lg:-mt-80 xl:-mt-40'>
            <WhyChooseUs
              featuredData={
                data?.pages?.nodes[0]?.apartmentForSaleSurrey?.choiceSection
              }
            />
          </div>
          <div className='-mt-44 md:-mt-20'>
            <BottomFeatureSection
              bottomSection={
                data?.pages?.nodes[0]?.apartmentForSaleSurrey?.bottomSection
              }
            />
          </div>
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
