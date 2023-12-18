import { gql } from '@apollo/client';
const query = gql`
  query {
    posts(first: 100) {
      nodes {
        uri
      }
    }
  }
`;
import { getClient } from '@/lib/apollo';
export async function GET() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  const postsSitemaps = data?.posts?.nodes.map((item: any) => ({
    loc: `https://asimali.ca${item?.uri?.toString()}`,
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
