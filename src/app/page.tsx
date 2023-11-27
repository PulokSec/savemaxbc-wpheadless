import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import AboutSection from '@/components/pages/Home/AboutSection';
import Banner from '@/components/pages/Home/Banner';
import ContactSection from '@/components/pages/Home/ContactSection';
import HighestLevelService from '@/components/pages/Home/HighestLevelService';
import NewFeatureSection from '@/components/pages/Home/NewFeatureSection';
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
          featureTitle
          featureSubtitle
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
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            gallery {
              title
              desc
              image {
                sourceUrl
                altText
              }
            }
          }
          contactSection {
            contactTitle
            contactDescription
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

export default async function HomePage() {
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
        <section className='bg-white'>
          <div>
            <Banner
              bannerData={data?.pages?.nodes[0]?.HomePage?.bannerSection}
              headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.headerSettings
              }
            />
            <NewFeatureSection
              featuredData={data?.pages?.nodes[0]?.HomePage?.featureSection}
              featuredTitle={data?.pages?.nodes[0]?.HomePage?.featureTitle}
              featuredSubtitle={
                data?.pages?.nodes[0]?.HomePage?.featureSubtitle
              }
            />
            <AboutSection
              aboutData={data?.pages?.nodes[0]?.HomePage?.aboutSection}
            />
            <HighestLevelService
              serviceData={data?.pages?.nodes[0]?.HomePage?.ensureSection}
            />
            <ContactSection
              contactData={data?.pages?.nodes[0]?.HomePage?.contactSection}
            />
            <Footer
              navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.footerSettings
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
