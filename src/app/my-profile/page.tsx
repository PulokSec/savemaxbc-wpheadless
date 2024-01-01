import { gql } from '@apollo/client';
import { Metadata } from 'next';
import React from 'react';

import { getClient } from '@/lib/apollo';

import AuthContent from '@/components/authContents/AuthContent';
import ProfileLanding from '@/components/pages/MyProfile/ProfileLanding';
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
    title: 'My Profile - Savemax',
    description: 'My Profile - Savemax',
    robots: { index: false, follow: false },

    // icons: {
    //   icon: '/favicon/favicon.ico',
    //   shortcut: '/favicon/favicon-16x16.png',
    //   apple: '/favicon/apple-touch-icon.png',
    // },
    manifest: `/favicon/site.webmanifest`,
    openGraph: {
      url: 'https://savemaxbc.com/',
      title: 'My Profile - Savemax',
      description: 'My Profile - Savemax',
      siteName: 'https://savemaxbc.com/',
      images: data?.pages?.nodes[0]?.seo?.openGraph?.image?.url,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'My Profile - Savemax',
      description: 'My Profile - Savemax',
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
    <AuthContent>
      <main>
        <section className='bg-white'>
          <div>
            <Header
              navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.headerSettings
              }
            />
            <ProfileLanding />
            <Footer
              navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
              settingsData={
                data?.settingsOptions?.savemaxOptions?.footerSettings
              }
            />
          </div>
        </section>
      </main>
    </AuthContent>
  );
}
