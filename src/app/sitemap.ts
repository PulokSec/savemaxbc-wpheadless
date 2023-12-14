import { gql } from '@apollo/client';
import { MetadataRoute } from 'next';

import { getClient } from '@/lib/apollo';

const queryPage = gql`
  query {
    pages(first: 100) {
      nodes {
        uri
      }
    }
  }
`;
const queryPost = gql`
  query {
    posts(first: 100) {
      nodes {
        uri
      }
    }
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageData = await getClient().query({
    query: queryPage,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const postData = await getClient().query({
    query: queryPost,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const pages = pageData?.data?.pages?.nodes?.map((page: any) => {
    return {
      url: `https://savemaxbc.com${page.uri}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    };
  });
  const posts = postData?.data?.posts?.nodes?.map((page: any) => {
    return {
      url: `https://savemaxbc.com${page.uri}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    };
  });
  return [...pages, ...posts];
}
