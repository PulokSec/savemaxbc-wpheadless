import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const listingId = Number(searchParams.get('listingId')); // Get the page number from the query parameter (default to 1)
  console.log(listingId);
  const listing = await query({
    query: 'SELECT * FROM 3d_rps_property WHERE `ListingID` = ? ',
    values: [listingId],
  });

  const data = JSON.stringify(listing);
  return new Response(data, {
    status: 200,
  });
}
