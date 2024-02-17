import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import React from 'react';

import SignIn from '@/components/authContents/SignIn';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const query = gql`
  query {
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
  return {
    title: 'Log In - Save Max',
    description: 'Log In - Save Max',
    alternates: {
      canonical: 'https://savemaxbc.com/log-in/',
    },
    robots: { index: false, follow: false },
    // manifest: `/favicon/site.webmanifest`,
    twitter: {
      card: 'summary_large_image',
      title: 'Log In - Save Max',
      description: 'Log In - Save Max',
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

export default async function LogIn() {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
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
                <h3 className='mb-3 text-2xl font-bold md:text-3xl'>Log In</h3>
                <p className='font-medium'>
                  Join millions of Canadians searching for homes on SaveMax per
                  month.
                </p>
                <SignIn />
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
