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
    pages(where: { id: 10 }) {
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
        HomePage {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerSubtitle
            bannerDescription
          }
          featureSection {
            featureBackground {
              sourceUrl
              altText
            }
            featuredDiv {
              title
              description
              image {
                sourceUrl
                altText
              }
            }
          }
          aboutSection {
            aboutTitle
            aboutDescription
            aboutImage {
              sourceUrl
              altText
            }
          }
          ensureSection {
            title
            description
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            galleryBg {
              sourceUrl
              altText
            }
            gallery {
              title
              image {
                sourceUrl
                altText
              }
            }
          }
          contactSection {
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            contactImage {
              sourceUrl
              altText
            }
            phone
            email
            addressOne
            addressTwo
            facebookLink
            instagramLink
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
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <FeaturedServices />
      </section>
      <BottomFeature />
      <Footer
        navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
