import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Get search terms from query parameters
  const searchQuery = searchParams.get('query') || '';

  // Build the SQL query with search parameters
  const sqlQuery = `
  SELECT City, Province, Price, CommunityName, BathroomTotal, BedroomsTotal, PostalCode, ListingID, TransactionType, Type, StreetAddress, Latitude, Longitude
  FROM 3d_rps_property
  WHERE 
    (City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%')) AND Type IS NOT NULL
`;

  const values = [searchQuery, searchQuery, searchQuery];

  const listings = await query({
    query: sqlQuery,
    values: values,
  });

  const totalQuery = `
  SELECT COUNT(*) as total
  FROM 3d_rps_property
  WHERE 
    (City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%'))
`;

  const totalValues = [searchQuery, searchQuery, searchQuery];

  const totalRows = (await query({
    query: totalQuery,
    values: totalValues,
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
