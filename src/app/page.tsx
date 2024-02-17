import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const AboutSection = dynamic(
  () => import('@/components/pages/Home/AboutSection'),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/components/pages/Home/ContactSection'),
  { ssr: true }
);
const HighestLevelService = dynamic(
  () => import('@/components/pages/Home/HighestLevelService'),
  { ssr: true }
);
const NewFeatureSection = dynamic(
  () => import('@/components/pages/Home/NewFeatureSection'),
  { ssr: true }
);
const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: true,
});
const Banner = dynamic(() => import('@/components/pages/Home/Banner'), {
  ssr: true,
})


const query = gql`
  query {
    pages(where: { id: 10 }) {
      nodes {
        homePage {
          bannerSection {
            bannerImage {
              node {
                sourceUrl
                altText
              }
            }
            bannerHeading
            bannerSubtitle
            bannerDescription
          }
          featureTitle
          featureSubtitle
          featureSection {
            featureBackground {
              node {
                altText
                sourceUrl
              }
            }
            featuredDiv {
              title
              description
              link
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
          aboutSection {
            aboutTitle
            aboutDescription
            aboutImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ensureSection {
            heading
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
            gallery {
              title
              desc
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
          contactSection {
            contactTitle
            contactDescription
            heading
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
            contactImage {
              node {
                altText
                sourceUrl
              }
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
    query: gql`
      {
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
          }
        }
      }
    `,
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

export default async function HomePage() {
  const client = await getClient();
  const { data } = await client.query({
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
              bannerData={data?.pages?.nodes[0]?.homePage?.bannerSection}
              headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.headerSettings
              }
            />
            <NewFeatureSection
              featuredData={data?.pages?.nodes[0]?.homePage?.featureSection}
              featuredTitle={data?.pages?.nodes[0]?.homePage?.featureTitle}
              featuredSubtitle={
                data?.pages?.nodes[0]?.homePage?.featureSubtitle
              }
            />
            <AboutSection
              aboutData={data?.pages?.nodes[0]?.homePage?.aboutSection}
            />
            <div
              className='relative'
              aria-label="Let's Turn Your Dream Into A Reality"
            >
              <div className='z-[1] relative'>
                <HighestLevelService
                  serviceData={data?.pages?.nodes[0]?.homePage?.ensureSection}
                />
                <ContactSection
                  contactData={data?.pages?.nodes[0]?.homePage?.contactSection}
                />
              </div>
              <Image
                src="https://savemaxbc.wpengine.com/wp-content/uploads/2024/02/Lets-Turn-Your-Dream-Into-A-Reality.webp"
                layout="fill"
                alt="Let's Turn Your Dream Into A Reality"
                loading="lazy"
                className='object-center object-cover pointer-events-none z-0 absolute'
              />
            </div>
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
