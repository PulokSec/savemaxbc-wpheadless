import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Dot } from 'lucide-react';

const query = gql`
  query {
    pages(where: { id: 89371 }) {
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

export default async function SignUp() {
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
            <div className='mx-auto my-20 xl:my-28 border border-gray-300 flex w-11/12 flex-col items-center justify-center bg-white px-5 py-14 drop-shadow-xl md:w-[500px] md:px-10'>
              <div className='flex flex-col items-start justify-start'>
                <h3 className='mb-3 text-2xl font-semibold md:text-3xl'>
                  Sign Up
                </h3>
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
                <form
                  action=''
                  className='mx-auto flex w-full flex-col items-start justify-start space-y-4'
                >
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='First Name'
                    type='text'
                    name='first-name'
                    id='first-name'
                    required
                  />
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Last Name'
                    type='text'
                    name='last-name'
                    id='last-name'
                    required
                  />
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Email'
                    type='email'
                    name='email'
                    id='email'
                    required
                  />
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Password'
                    type='password'
                    name='password'
                    id='password'
                    required
                  />
                  <button
                    type='submit'
                    className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all duration-500 ease-in-out '
                  >
                    Sign Up
                  </button>
                </form>
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
