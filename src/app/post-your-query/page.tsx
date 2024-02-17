import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import QuestionForm from '@/components/pages/Faq/QuestionForm';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const query = gql`
  query {
    pages(where: { id: 89612 }) {
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
        postQuery {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannerHeading
          questionBg {
            node {
              altText
              sourceUrl
            }
          }
          title
          description
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
    query,
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

export default async function PostQuery() {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  // console.log(data);
  return (
    <>
      <main>
        <div
          className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat lg:h-[100vh]'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(${data?.pages?.nodes[0]?.postQuery?.bannerImage?.node?.sourceUrl})`,
          }}
        >
          <Header
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className='mt-20 flex flex-col items-center justify-center md:mt-40 lg:mt-60'>
            <div className='py-16'>
              <div className='flex max-w-[1200px] flex-col items-center justify-center px-5 lg:px-10'>
                <h1 className='w-full text-center text-[26px] font-bold uppercase leading-5 tracking-wide text-white md:text-4xl lg:text-6xl'>
                  {data?.pages?.nodes[0]?.postQuery?.bannerHeading}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-12 py-14 md:col-span-8 md:col-start-1 md:px-10 md:py-20'>
        <h2 className='mb-2 text-center text-2xl md:text-4xl'>{data?.pages?.nodes[0]?.postQuery?.title}</h2>
        <div
                        className='text-center lg:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: data?.pages?.nodes[0]?.postQuery?.description,
                        }}
                      ></div>
        </div>

        <QuestionForm />

        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
