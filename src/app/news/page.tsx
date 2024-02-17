import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';

import NewsPageComponent from '@/components/pages/News/NewsPageComponent';

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
              node {
                sourceUrl
              }
            }
            bannerHeading
            bannerButton
          }
          bottomSection {
            featureTitle
            backgroundImage {
              node {
                sourceUrl
              }
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

  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 5 },
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

export default async function News({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const client = await getClient();
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
  const prevData = await client.query({
    query: newsCursor,
    variables: { previousPage: firstPage },
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
                node {
                  sourceUrl
                }
              }
              bannerHeading
              bannerSubheading
              bannerButton
            }
            bottomSection {
              featureTitle
              featureSubtitle
              backgroundImage {
                node {
                  sourceUrl
                }
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

  const { data } = await client.query({
    query: newsQuery,
    variables: { perPage, after: endCursor },
  });

  const totalPages = Math.ceil(
    data?.posts?.pageInfo.offsetPagination.total / perPage
  );
  return (
    <>
      <main>
        <NewsPageComponent data={data} searchParams={searchParams} totalPages={totalPages} />
      </main>
    </>
  );
}
