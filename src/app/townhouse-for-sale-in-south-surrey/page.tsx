import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';
import { getAllProperties } from '@/lib/dataFetching';

import BottomFeatureSection from '@/components/elements/BottomFeatureSection';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import ListingCarousel from '@/components/pages/Listings/ListingCarousel';
import CardSection from '@/components/pages/Locations/CardSection';
import ChoiceBanner from '@/components/pages/Locations/ChoiceBanner';
import ChoiceSection from '@/components/pages/Locations/ChoiceSection';
import EssentialSection from '@/components/pages/Locations/EssentialSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 66568 }) {
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
        townSouthSurrey {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerSubhead
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          cardSection {
            bottomDescription
            cardTitle
            cardSubtitle
            cardDescription
            backgroundImage {
              sourceUrl
              altText
            }
            cardData {
              cardImage {
                sourceUrl
                altText
              }
              cardTitle
              cardDescription
            }
          }
          chooseUsSection {
            featureTitle
            featureDescription
            featuredDiv {
              title
              description
            }
          }
          listingSection {
            recentListingsTitle
            topHead
            listingDescription
            detachedHomesTitle
            semiDetachedTitle
            rentalHomesTitle
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
          choiceSection {
            title
            description
            image {
              sourceUrl
              altText
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

export default async function TownhouseSaleSouthSurrey({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const townPosts = await getAllProperties({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
    typeParam: searchParams?.type?.toString() || 'Town',
    cityParam: searchParams?.city?.toString() || 'Surrey',
  });
  return (
    <main>
      <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/Middle-part-bg.png")] bg-cover bg-no-repeat'>
        <LocationBanner
          bannerData={data?.pages?.nodes[0]?.townSouthSurrey?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className=''>
          <h1 className='mt-10 px-2 text-center text-lg md:text-4xl lg:mt-14'>
            {
              data?.pages?.nodes[0]?.townSouthSurrey?.listingSection
                ?.recentListingsTitle
            }
          </h1>
          <div
            className='md:text-md mt-5 px-5 text-center text-xs leading-6 lg:px-20 lg:text-lg'
            dangerouslySetInnerHTML={{
              __html:
                data?.pages?.nodes[0]?.townSouthSurrey?.listingSection
                  ?.listingDescription,
            }}
          ></div>
          <ListingCarousel posts={townPosts?.listings} />
          <div className='mb-10 mt-5 text-center md:mt-10'>
            <a
              href='/properties-listing?city=Surrey&type=Town'
              className='text-uppercase relative z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm  hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:mt-[-20px] md:px-3.5'
            >
              See More
            </a>
          </div>
        </div>
        <CardSection
          cardSection={data?.pages?.nodes[0]?.townSouthSurrey?.cardSection}
        />
        <div className='md:h-32 lg:h-0 xl:h-32'></div>
        <div className='lg:-mt-52 2xl:mt-0'>
          <WhyChooseUs
            featuredData={
              data?.pages?.nodes[0]?.townSouthSurrey?.chooseUsSection
            }
          />
        </div>
        <div className='-mt-40 md:mt-0 lg:-mt-52 2xl:mt-0'>
          <ChoiceBanner
            choiceBannerData={
              data?.pages?.nodes[0]?.townSouthSurrey?.choiceBanner
            }
          />
        </div>
        <ChoiceSection
          featuredData={data?.pages?.nodes[0]?.townSouthSurrey?.choiceSection}
        />
        <EssentialSection
          featuredData={
            data?.pages?.nodes[0]?.townSouthSurrey?.essentialSection
          }
        />
        <BottomFeatureSection
          bottomSection={data?.pages?.nodes[0]?.townSouthSurrey?.bottomSection}
        />
      </div>
      <Footer
        navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
