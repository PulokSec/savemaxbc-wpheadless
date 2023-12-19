import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = [
    '/page-sitemap.xml/',
    '/blog-sitemap.xml/',
    '/location-sitemap.xml/',
  ];
  const sitemapIndex = data?.map((page: any) => {
    return {
      url: `https://savemaxbc.com${page}`,
    };
  });
  return [...sitemapIndex];
}
