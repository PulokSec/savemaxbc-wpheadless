export async function GET() {
  const data = [
    '/commercial-property-for-sale-in-bc/',
    '/commercial-property-for-lease-in-bc/',
    '/duplex-for-sale-in-south-surrey/',
    '/townhouse-for-sale-in-south-surrey/',
    '/south-surrey-realtors/',
    '/condos-for-sale-surrey/',
    '/apartment-for-sale-in-surrey/',
    '/townhouses-for-sale-surrey/',
    '/house-for-sale-in-surrey/',
    '/realtors-in-surrey/',
    '/homes-for-sale-south-surrey/',
    '/condos-for-sale-in-guildford-surrey-bc/',
    '/condos-for-sale-south-surrey/',
    '/cloverdale-condos-for-sale/',
    '/our-townhouse-for-sale-in-guildford/',
    '/realtors-in-surrey-guildford/',
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
  ];
  const locationSitemaps = data.map((item: any) => ({
    loc: `https://savemaxbc.com${item?.toString()}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.9,
  }));
  const fields = [...locationSitemaps];
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
