import { gql } from '@apollo/client';
import Head from 'next/head';
import React from 'react';

import { getClient } from '@/lib/apollo';

import BottomFeature from '@/components/pages/Services/BottomFeature';
import FeaturedServices from '@/components/pages/Services/FeaturedServices';
import ServiceBanner from '@/components/pages/Services/ServiceBanner';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 22 }) {
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
        services {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            topBannerHeading
            bannerHeading
            bannerDescription
          }
          featuredServiceTitle
          featuredServiceSection {
            title
            description
            image {
              sourceUrl
              altText
            }
          }
          bottomSection {
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
export default async function ServicePage() {
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
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <ServiceBanner
          bannerData={data?.pages?.nodes[0]?.services?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <FeaturedServices
          featuredData={data?.pages?.nodes[0]?.services?.featuredServiceSection}
          featuredTitle={data?.pages?.nodes[0]?.services?.featuredServiceTitle}
        />
      </section>
      <BottomFeature
        bottomSection={data?.pages?.nodes[0]?.services?.bottomSection}
      />
      <Footer
        navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
