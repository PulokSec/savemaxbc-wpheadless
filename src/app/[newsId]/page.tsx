import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BlogBanner from '@/components/elements/BlogBanner';
import Footer from '@/components/shared/Footer';

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
export async function generateMetadata({
  params,
}: {
  params: { newsId: string };
}): Promise<Metadata> {
  const seo = gql`
  query {
    post(id: "${params.newsId}", idType: URI) {
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
  `;
  const client = await getClient();
  const { data } = await client.query({
    query: seo,
  });

   if (data?.post?.seo?.canonicalUrl === undefined || data?.post?.seo?.canonicalUrl === null) {
    notFound();
  }

  const path = new URL(data?.post?.seo?.canonicalUrl).pathname;

 
  
  const canonical_url = `${process.env.NEXT_PUBLIC_BASEURL}${path}`;
  return {
    title: data?.post?.seo?.title,
    description: data?.post?.seo?.description,
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
      title: data?.post?.seo?.title || 'Not Found',
      description: data?.post?.seo?.description,
      siteName: 'https://savemaxbc.com/',
      images: data?.post?.seo?.openGraph?.image?.url,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.post?.seo?.title,
      description: data?.post?.seo?.description,
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
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
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
  const singleBlog = await client.query({
    query: singleQuery,
  });
  if (singleBlog?.data?.post?.date === undefined) {
    notFound();
  }
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
      <main>
        <BlogBanner
          bannerImage={singleBlog?.data?.post?.featuredImage}
          bannerHeading={singleBlog?.data?.post?.title}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
        />
        <div className='mx-auto mb-10 mt-10 max-w-[1250px] p-3 leading-5'>
          <h1 className='mb-5 text-4xl font-bold'>
            {singleBlog?.data?.post?.title}
          </h1>
          <p className='mb-5 text-sm'>{date}</p>
          <p className='text-md mb-5 font-bold'>
            Author : {singleBlog?.data?.post?.author?.node?.name}
          </p>
          <div
            className='space-y-4 text-[17px] leading-6 lg:text-lg'
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
