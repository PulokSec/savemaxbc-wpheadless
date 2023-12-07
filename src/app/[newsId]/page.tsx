import { gql } from '@apollo/client';
import { Metadata } from 'next';

import { getClient } from '@/lib/apollo';

import BlogBanner from '@/components/elements/BlogBanner';
import Footer from '@/components/shared/Footer';

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

export default async function SingleNews({
  params,
}: {
  params: { newsId: string };
}) {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const singleQuery = gql`
    query {
      post(id: "${params.newsId}", idType: URI) {
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        content(format: RENDERED)
        title(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        date
      }
    }
  `;
  const singleBlog = await getClient().query({
    query: singleQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const timeStamp = new Date(singleBlog?.data?.post?.date);
  const day = timeStamp.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    timeStamp
  );
  const year = timeStamp.getFullYear();

  // Create the formatted date string
  const date = `${day} ${month} ${year}`;
  return (
    <>
      <main className='font-primary'>
        <BlogBanner
          bannerImage={singleBlog?.data?.post?.featuredImage?.node}
          bannerHeading={singleBlog?.data?.post?.title}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className='mx-auto mt-10 max-w-[1250px] p-3 leading-5'>
          <h1 className='mb-5 text-4xl font-bold'>
            {singleBlog?.data?.post?.title}
          </h1>
          <p className='mb-5 text-sm'>{date}</p>
          <p className='text-md mb-5 font-bold'>
            Author : {singleBlog?.data?.post?.author?.node?.name}
          </p>
          <div
            className=''
            dangerouslySetInnerHTML={{
              __html: singleBlog?.data?.post?.content || '',
            }}
          />
        </div>
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
      </main>
    </>
  );
}
