import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import BottomFeatureSection from '@/components/elements/BottomFeatureSection';
import JoinSection from '@/components/elements/JoinSection';
import SuccessSection from '@/components/elements/SuccessSection';
import WhoWeAre from '@/components/elements/WhoWeAre';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import CareersBanner from '@/components/pages/Careers/CareerBanner';
import Footer from '@/components/shared/Footer';

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
              sourceUrl
            }
            bannerHeading
            bannerDescription
          }
          topFeatureDescription
          topFeatureTitle
          aboutSection {
            topHead
            topDescription
            description
            featureTitle
            featureDescription
            image {
              sourceUrl
              altText
            }
          }
          successSection {
            featureTitle
            featureDescription
            linkUrl
            image {
              sourceUrl
              altText
            }
          }
          joinSection {
            featureTitle
            featureDescription
            linkUrl
            image {
              sourceUrl
              altText
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
            featureDescription
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

export default async function CareersPage() {
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
      <main>
        <CareersBanner
          bannerData={data?.pages?.nodes[0]?.careers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.careers?.topFeatureTitle}
          topDesc={data?.pages?.nodes[0]?.careers?.topFeatureDescription}
        />
        <WhoWeAre featuredData={data?.pages?.nodes[0]?.careers?.aboutSection} />
        <WhyChooseUs
          featuredData={data?.pages?.nodes[0]?.careers?.choiceSection}
        />
        <SuccessSection
          featuredData={data?.pages?.nodes[0]?.careers?.successSection}
        />
        <JoinSection
          featuredData={data?.pages?.nodes[0]?.careers?.joinSection}
        />
        <BottomFeatureSection
          bottomSection={data?.pages?.nodes[0]?.careers?.bottomFeatureSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
