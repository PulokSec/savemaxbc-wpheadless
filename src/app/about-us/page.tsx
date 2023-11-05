import { gql } from '@apollo/client';
import React from 'react';

import { getClient } from '@/lib/apollo';

import AboutFeature from '@/components/elements/AboutFeature';
import SharedBanner from '@/components/elements/SharedBanner';
import Footer from '@/components/shared/Footer';
const query = gql`
  query {
    pages(where: { id: 12 }) {
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
        aboutUs {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
          }
          aboutFeatureSection {
            topHead
            subHead
            featuredData {
              name
              shortDescription
              description
              designation
              subDesignation
              aboutImage {
                sourceUrl
                altText
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
export default async function page() {
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
        <SharedBanner
          bannerData={data?.pages?.nodes[0]?.aboutUs?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <AboutFeature
          featureSection={data?.pages?.nodes[0]?.aboutUs?.aboutFeatureSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
