import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';
const query = gql`
  query {
    posts(first: 100) {
      nodes {
        uri
      }
    }
  }
`;
export async function GET() {
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  const postsSitemaps = data?.posts?.nodes.map((item: any) => ({
    loc: `https://savemaxbc.com${item?.uri?.toString()}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.9,
  }));
  const fields = [...postsSitemaps];
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${fields
    .map(
      (field) => `
  <url>
    <loc>${field.loc}</loc>
    <lastmod>${field.lastmod}</lastmod>
    <changefreq>${field.changefreq}</changefreq>
    <priority>${field.priority}</priority>
  </url>
`
    )
    .join('')}
  </urlset>`;

  return new Response(xmlContent, { headers: { 'Content-Type': 'text/xml' } });
}
