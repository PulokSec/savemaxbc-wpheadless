import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const listingId = String(searchParams.get('listingId'));
  const photos = await query({
    query:
      'SELECT * FROM `3d_rps_property_photos` WHERE `ListingID` = ? ORDER BY `SequenceID` ASC',
    values: [listingId],
  });

  const data = JSON.stringify(photos);
  return new Response(data, {
    status: 200,
  });
}
