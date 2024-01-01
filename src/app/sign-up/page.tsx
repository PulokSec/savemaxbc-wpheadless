import { gql } from '@apollo/client';
import { Dot } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import SignUp from '@/components/authContents/SignUp';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const query = gql`
  query {
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
    title: 'Sign Up - SaveMax',
    description: 'Sign Up - SaveMax',
    robots: { index: false, follow: false },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/',
      title: 'Sign Up - SaveMax',
      description: 'Sign Up - SaveMax',
      siteName: 'https://savemaxbc.com/',
      images: data?.pages?.nodes[0]?.seo?.openGraph?.image?.url,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sign Up - SaveMax',
      description: 'Sign Up - SaveMax',
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

export default async function Page() {
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
      <section className='bg-white'>
        <div>
          <Header
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          />
          <div className='h-screen'>
            <div className='mx-auto my-20 flex w-11/12 flex-col items-center justify-center border border-gray-300 bg-white px-5 py-14 drop-shadow-xl md:w-[500px] md:px-10 xl:my-28'>
              <div className='flex flex-col items-start justify-start'>
                <h3 className='mb-3 text-2xl font-bold md:text-3xl'>Sign Up</h3>
                <p className='font-medium'>
                  Join millions of Canadians searching for homes on SaveMax per
                  month.
                </p>
                <ul className='my-6 -ml-3 text-gray-800'>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    Faster listings than everyone
                  </li>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    See 27% more homes & sold history
                  </li>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    Instant access to photos & features
                  </li>
                </ul>
                <SignUp />
              </div>
            </div>
          </div>
          <Footer
            navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
            settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
          />
        </div>
      </section>
    </main>
  );
}
