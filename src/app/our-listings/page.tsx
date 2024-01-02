import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';
import { getFilterQuery } from '@/lib/dataFetching';

import GetInTouch from '@/components/pages/Listings/GetInTouch';
import ListingBanner from '@/components/pages/Listings/ListingBanner';
import PaginationSearch from '@/components/pages/Listings/PaginationSearch';
import Footer from '@/components/shared/Footer';

const query = gql`
  query {
    pages(where: { id: 89301 }) {
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
        ourListings {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
          }
          listingTitle
          getInTouch {
            title
            backgroundImage {
              sourceUrl
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
export default async function OurListings({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const allPosts = await getFilterQuery({
    pageParam: parseInt(searchParams?.page?.toString() || '1'),
    type: searchParams?.type?.toString() || '',
    cityParam: searchParams?.city?.toString() || '',
    provinceParam: searchParams?.province?.toString() || '',
    price: parseInt(searchParams?.price?.toString() || '0'),
    streetParam: searchParams?.streetAddress?.toString() || '',
    transactionType: searchParams?.transactionType?.toString() || '',
    propertyType: searchParams?.propertyType?.toString() || '',
    bedroom: parseInt(searchParams?.bedroom?.toString() || '0'),
    bathroom: parseInt(searchParams?.bathroom?.toString() || '0'),
    businessType: searchParams?.businessType?.toString() || '',
  });
  // console.log(allPosts);

  return (
    <>
      <main>
        <ListingBanner
          bannerData={data?.pages?.nodes[0]?.ourListings?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <h1 className='mt-20 text-center text-lg md:text-5xl lg:mt-60'>
          {data?.pages?.nodes[0]?.ourListings?.listingTitle?.split(' ')[0]}{' '}
          <span className='text-leading-3 font-bold text-[#515151]'>
            {data?.pages?.nodes[0]?.ourListings?.listingTitle?.split(' ')[1]}
          </span>
        </h1>
        <PaginationSearch
          allPosts={allPosts?.listings}
          totalCount={allPosts?.totalCount}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
        />
        <GetInTouch
          bottomSection={data?.pages?.nodes[0]?.ourListings?.getInTouch}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
