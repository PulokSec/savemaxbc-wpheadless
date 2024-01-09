import { gql } from '@apollo/client';

import { getClient } from '@/lib/apolloMap';
import { getPhotos, getSingleProperty } from '@/lib/dataFetching';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Get search terms from query parameters
    const searchQuery = searchParams.get('query') || '';

    const query = gql`
      query {
        listings(first: 30000, where: { search: "${searchQuery}" }) {
          nodes {
            title(format: RENDERED)
          }
          pageInfo {
            startCursor
            hasPreviousPage
            hasNextPage
            endCursor
          }
        }
      }
    `;

    const listings = await getClient().query({
      query,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });

    const allData = await Promise.all(
      listings?.data?.listings?.nodes?.map(async (item: any) => {
        const regex = /\((\d+)\)/; // This regex captures the digits within parentheses

        const match = item?.title.match(regex);
        const image = await getPhotos({ listingId: match[1].toString() });
        const bufferOriginal = Buffer.from(image[0].Photos.data);
        const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
          ?.LargePhoto?.filename;
        const post = await getSingleProperty({
          listingId: match[1].toString(),
        });
        const location = {
          lat: parseFloat(post[0]?.Latitude),
          lng: parseFloat(post[0]?.Longitude),
        };

        return {
          post: post[0],
          cardImageUrl,
          location,
        };
      })
    );
    const totalCount = listings?.data?.listings?.nodes?.length || 0;

    const res = {
      listings: allData || [],
      totalCount: totalCount,
    };

    const data = JSON.stringify(res);
    return new Response(data, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching data:', error);

    // Handle the error and return an appropriate response
    const errorResponse = {
      error: 'Failed to fetch data',
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
    });
  }
}
