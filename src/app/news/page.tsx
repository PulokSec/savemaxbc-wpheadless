import { gql } from '@apollo/client';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { getClient } from '@/lib/apollo';

const NewsSection = dynamic(() => import('@/components/elements/NewsSection'), {
  ssr: false,
});
const NewsBottom = dynamic(() => import('@/components/pages/News/NewsBottom'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/shared/Footer'), {
  ssr: false,
});

import NewsBanner from '@/components/pages/News/NewsBanner';

const query = gql`
  query {
    pages(where: { id: 20 }) {
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
        news {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerButton
          }
          bottomSection {
            featureTitle
            backgroundImage {
              sourceUrl
            }
            linkText
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
    posts {
      nodes {
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        excerpt(format: RENDERED)
        title(format: RENDERED)
        uri
        date
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        offsetPagination {
          total
          hasPrevious
          hasMore
        }
      }
    }
  }
`;
export async function generateMetadata(): Promise<Metadata> {
  // You can set this dynamically based on user input or route parameter

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

export default async function News({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const perPage = 12;
  const currentPage = parseInt(searchParams?.page || '1');
  const prevPage = currentPage - 1;
  const firstPage = prevPage > 1 ? prevPage * 12 : 12;

  const newsCursor = gql`
    query GetPrevNews($previousPage: Int!) {
      posts(first: $previousPage) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          offsetPagination {
            total
            hasPrevious
            hasMore
          }
        }
      }
    }
  `;
  const prevData = await getClient().query({
    query: newsCursor,
    variables: { previousPage: firstPage },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const endCursor =
    prevPage > 0 ? prevData?.data?.posts?.pageInfo.endCursor : '';

  const newsQuery = gql`
    query GetNews($perPage: Int!, $after: String) {
      pages(where: { id: 20 }) {
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
          news {
            bannerSection {
              bannerImage {
                sourceUrl
              }
              bannerHeading
              bannerSubheading
              bannerButton
            }
            bottomSection {
              featureTitle
              featureSubtitle
              backgroundImage {
                sourceUrl
              }
              linkText
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
      posts(first: $perPage, after: $after) {
        nodes {
          author {
            node {
              avatar {
                url
              }
              name
            }
          }
          excerpt(format: RENDERED)
          title(format: RENDERED)
          uri
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          offsetPagination {
            total
            hasPrevious
            hasMore
          }
        }
      }
    }
  `;

  const { data } = await getClient().query({
    query: newsQuery,
    variables: { perPage, after: endCursor },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const totalPages = Math.ceil(
    data?.posts?.pageInfo.offsetPagination.total / perPage
  );
  return (
    <>
      <main>
        <NewsBanner
          bannerData={data?.pages?.nodes[0]?.news?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          usingFor='news'
        />
        <NewsSection
          totalPages={totalPages}
          currentPageID={parseInt(searchParams?.page?.toString() || '1')}
          newsSection={data?.posts?.nodes}
        />
        <NewsBottom
          bottomSection={data?.pages?.nodes[0]?.news?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
