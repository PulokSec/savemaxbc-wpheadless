import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = 12; // Number of records per page
  const currentPage = Number(searchParams.get('page')) || 1; // Get the page number from the query parameter (default to 1)
  const offset = (currentPage - 1) * pageSize;

  // Get search terms from query parameters
  const searchCity = searchParams.get('city') || '';
  const searchStreetAddress = searchParams.get('streetAddress') || '';
  const searchProvince = searchParams.get('province') || '';

  // Build the SQL query with search parameters
  const sqlQuery = `
  SELECT City, Province, PostalCode, Neighbourhood, CommunityName, BedroomsTotal, BathroomTotal, DdfListingID, TransactionType, StreetAddress, PublicRemarks, Lease, LeasePerUnit, Latitude, Longitude, ListingID, Features, WaterFrontType, MoreInformationLink, CoolingType, HeatingType
  FROM 3d_rps_property
  WHERE 
    (City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%'))
    AND (StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%'))
    AND (Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%'))
  LIMIT ? OFFSET ?
`;

  const values = [
    searchCity,
    searchCity,
    searchCity,
    searchStreetAddress,
    searchStreetAddress,
    searchStreetAddress,
    searchProvince,
    searchProvince,
    searchProvince,
    pageSize,
    offset,
  ];

  const listings = await query({
    query: sqlQuery,
    values: values,
  });

  // Build the SQL query for the total count with search parameters
  const totalQuery = `
  SELECT COUNT(*) as total
  FROM 3d_rps_property
  WHERE 
    (City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%'))
    AND (StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%'))
    AND (Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%'))
`;

  const totalValues = [
    searchCity,
    searchCity,
    searchCity,
    searchStreetAddress,
    searchStreetAddress,
    searchStreetAddress,
    searchProvince,
    searchProvince,
    searchProvince,
  ];

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
