import { gql } from '@apollo/client';
import Head from 'next/head';

import { getClient } from '@/lib/apollo';

import HomeLanding from '@/components/pages/Home/HomeLanding';

const query = gql`
  query {
    pages(where: { id: 10 }) {
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
        HomePage {
          bannerSection {
            bannerImage {
              sourceUrl
            }
            bannerHeading
            bannerSubtitle
            bannerDescription
          }
          featureSection {
            featureBackground {
              sourceUrl
              altText
            }
            featuredDiv {
              title
              description
              image {
                sourceUrl
                altText
              }
            }
          }
          aboutSection {
            aboutTitle
            aboutDescription
            aboutImage {
              sourceUrl
              altText
            }
          }
          ensureSection {
            title
            description
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            galleryBg {
              sourceUrl
              altText
            }
            gallery {
              title
              image {
                sourceUrl
                altText
              }
            }
          }
          contactSection {
            heading
            backgroundImage {
              sourceUrl
              altText
            }
            contactImage {
              sourceUrl
              altText
            }
            phone
            email
            addressOne
            addressTwo
            facebookLink
            instagramLink
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
export default async function HomePage() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  console.log(data);
  return (
    <>
      <Head>
        {data?.pages?.nodes?.map((meta: any) => {
          return (
            <>
              <title>{meta?.seo?.title}</title>
              <meta name='description' content={meta?.seo?.description} />
              <link rel='canonical' href={meta?.seo?.canonicalUrl} />
              <meta property='og:title' content={meta?.seo?.title} />
              <meta
                property='og:description'
                content={meta?.seo?.description}
              />
              <meta
                property='og:image'
                content={meta?.seo?.openGraph?.image?.url}
              />
            </>
          );
        })}
      </Head>
      <main>
        <section className='bg-white'>
          <div className=''>
            <div>
              <HomeLanding allData={data} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
