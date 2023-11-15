import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';
import { getAllProperties } from '@/lib/dataFetching';

import FeaturedListings from '@/components/pages/Listings/FeaturedListings';
import CardSection from '@/components/pages/Locations/CardSection';
import ChoiceBanner from '@/components/pages/Locations/ChoiceBanner';
import ChoiceSection from '@/components/pages/Locations/ChoiceSection';
import EssentialSection from '@/components/pages/Locations/EssentialSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import OfferBanner from '@/components/pages/Locations/OfferBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 374 }) {
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
        southSurrey {
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
          offerBanner {
            offerTitle
            offerSubtitle
            offerDescription
            backgroundImage {
              sourceUrl
              altText
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
          offerSection {
            title
            description
            image {
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
          choiceSection {
            title
            description
            image {
              sourceUrl
              altText
            }
          }
          homebuyingSection {
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

export default async function SouthSurrey() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const allPosts = await getAllProperties({
    pageParam: parseInt('1'),
  });
  console.log(data);
  return (
    <>
      <main>
        <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxbc.com/wp-content/uploads/2023/09/Middle_part_bg.png")] bg-cover bg-no-repeat'>
          <LocationBanner
            bannerData={data?.pages?.nodes[0]?.southSurrey?.bannerSection}
            headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
            topTitle={data?.pages?.nodes[0]?.southSurrey?.topFeatureTitle}
            topDesc={data?.pages?.nodes[0]?.southSurrey?.topFeatureDescription}
          />
          <FeaturedListings
            allPosts={allPosts?.listings}
            titleData={data?.pages?.nodes[0]?.southSurrey?.listingSection}
            topHead={
              data?.pages?.nodes[0]?.southSurrey?.listingSection?.topHead
            }
            listingDescription={
              data?.pages?.nodes[0]?.southSurrey?.listingSection
                ?.listingDescription
            }
          />
          <CardSection
            cardSection={data?.pages?.nodes[0]?.southSurrey?.cardSection}
          />
          <OfferBanner
            offerBannerData={data?.pages?.nodes[0]?.southSurrey?.offerBanner}
            featuredData={data?.pages?.nodes[0]?.southSurrey?.offerSection}
          />
          <ChoiceBanner
            choiceBannerData={data?.pages?.nodes[0]?.southSurrey?.choiceBanner}
          />
          <ChoiceSection
            featuredData={data?.pages?.nodes[0]?.southSurrey?.choiceSection}
          />
          <EssentialSection
            featuredData={data?.pages?.nodes[0]?.southSurrey?.essentialSection}
          />
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
