import { gql } from '@apollo/client';
import { getClient } from '@faustwp/experimental-app-router';

const query = gql`
  query {
    pages(first: 100) {
      nodes {
        uri
      }
    }
  }
`;

export async function GET() {
  const excludeItems = [
    '/commercial-property-for-sale-in-bc/',
    '/commercial-property-for-lease-in-bc/',
    '/duplex-for-sale-in-south-surrey/',
    '/townhouse-for-sale-in-south-surrey/',
    '/apartment-for-sale-in-surrey/',
    '/townhouses-for-sale-in-surrey/',
    '/townhouses-for-sale-surrey/',
    '/south-surrey-realtors/',
    '/condos-for-sale-in-surrey/',
    '/condos-for-sale-surrey/',
    '/house-for-sale-in-surrey/',
    '/home-for-sale-in-surrey/',
    '/homes-for-sale-south-surrey/',
    '/realtors-in-surrey/',
    '/realtors-surrey/',
    '/home/',
    '/property-favourites/',
    '/post-your-query/activities/',
    '/post-your-query/tags/',
    '/post-your-query/profile/',
    '/post-your-query/categories/',
    '/questions/activities/',
    '/questions/tags/',
    '/questions/categories/',
    '/questions/profile/',
    '/questions/profile/',
    '/questions/ask/',
    '/questions-3/',
    '/reset-password/',
    '/my-profile/',
    '/sign-up/',
    '/condos-for-sale-in-guildford-surrey-bc/',
    '/condos-for-sale-south-surrey/',
    '/cloverdale-condos-for-sale/',
    '/our-townhouse-for-sale-in-guildford/',
    '/realtors-in-surrey-guildford/',
    '/duplex-for-sale-in-guildford/',
    '/house-for-sale-in-cloverdale/',
    '/homes-for-sale-in-guildford-surrey/',
    '/townhouses-for-sale-in-surrey-newton/',
    '/newton-houses-for-sale/',
    '/homes-for-sale-in-whalley/',
    '/realtor-in-whalley/',
    '/cloverdale-realtors/',
    '/townhouses-for-sale-in-cloverdale/',
    '/realtor-in-morgan-heights/',
    '/homes-for-sale-in-east-clayton/',
    '/duplex-for-sale-cloverdale-bc/',
    null,
  ];
  const includedItems = ['/listing/'];
  const client = await getClient();
  const { data } = await client.query({
    query,
context: {
      fetchOptions: {
        next: { revalidate: 120 },
      },
    },
  });
  // console.log('sitemap',data?.pages?.nodes)
  const postsSitemaps = data?.pages?.nodes
    ?.filter((item: any) => !excludeItems.includes(item.uri))
    .map((item: any) => ({
      loc: `https://savemaxbc.com${item?.uri?.toString()}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
    }));

  // const fields = [...postsSitemaps, ...includedItems];

   const fields = [
    ...postsSitemaps
  ];
  // console.log('page sitemap', fields);
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${fields
    .map((field) => {
      // Check if each field has a defined value
      const loc = field.loc !== undefined ? `<loc>${field.loc}</loc>` : '';
      const lastmod =
        field.lastmod !== undefined
          ? `<lastmod>${field.lastmod}</lastmod>`
          : '';
      const changefreq =
        field.changefreq !== undefined
          ? `<changefreq>${field.changefreq}</changefreq>`
          : '';
      const priority =
        field.priority !== undefined
          ? `<priority>${field.priority}</priority>`
          : '';

      // Check if any field has a defined value before adding the <url> block
      if (loc || lastmod || changefreq || priority) {
        return `
  <url>
    ${loc}
    ${lastmod}
    ${changefreq}
    ${priority}
  </url>
`;
      } else {
        return ''; // Return an empty string if all fields are undefined
      }
    })
    .join('')}
  </urlset>`;

  return new Response(xmlContent, { headers: { 'Content-Type': 'text/xml' } });
}
