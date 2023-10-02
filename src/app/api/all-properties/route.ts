import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = 12; // Number of records per page
  const currentPage = Number(searchParams.get('page')) || 1; // Get the page number from the query parameter (default to 1)
  const offset = (currentPage - 1) * pageSize;
  const listings = await query({
    query:
      'SELECT City, Province, PostalCode, Neighbourhood, CommunityName, BedroomsTotal, BathroomTotal, DdfListingID, TransactionType, StreetAddress, PublicRemarks, Lease, LeasePerUnit, Latitude, Longitude, ListingID, Features,WaterFrontType, MoreInformationLink CoolingType, HeatingType FROM 3d_rps_property LIMIT ? OFFSET ?',
    values: [pageSize, offset],
  });
  const totalRows = (await query({
    query: 'SELECT COUNT(*) as total FROM 3d_rps_property',
    values: [],
  })) as { total: number }[];

  const totalCount = totalRows[0].total;

  const res = {
    listings: listings,
    totalCount: totalCount,
  };
  const data = JSON.stringify(res);
  return new Response(data, {
    status: 200,
  });
}
