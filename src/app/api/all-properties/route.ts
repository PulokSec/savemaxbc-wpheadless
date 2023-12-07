import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = 12; // Number of records per page
  const currentPage = Number(searchParams.get('page')) || 1; // Get the page number from the query parameter (default to 1)
  const typeToSearch = searchParams.get('type'); // Get the type from the query parameter (default to all)
  const cityToSearch = searchParams.get('city'); // Get the city from the query parameter (default to all)
  const offset = (currentPage - 1) * pageSize;
  const hasCityFilter = cityToSearch !== undefined && cityToSearch !== null;
  const hasTypeFilter = typeToSearch !== undefined && typeToSearch !== null;

  const listingsQuery = `
    SELECT City, Province, PostalCode, Neighbourhood, CommunityName, BedroomsTotal, BathroomTotal, Price, DdfListingID, Type, TransactionType, LastUpdated, StreetAddress, PublicRemarks, Lease, LeasePerUnit, Latitude, Longitude, ListingID, Features, WaterFrontType, MoreInformationLink, CoolingType, HeatingType
    FROM 3d_rps_property
    WHERE
      (${hasTypeFilter ? 'Type LIKE ?' : 'Type IS NOT NULL'})
      ${hasCityFilter ? 'AND City LIKE ?' : ''}
    LIMIT ? OFFSET ?
  `;

  const listings = await query({
    query: listingsQuery,
    values: [
      ...(hasTypeFilter ? [`%${typeToSearch}%`] : []),
      ...(hasCityFilter ? [`%${cityToSearch}%`] : []),
      pageSize,
      offset,
    ],
  });

  const totalRowsQuery = `
    SELECT COUNT(*) as total
    FROM 3d_rps_property
    WHERE
      (${hasTypeFilter ? 'Type LIKE ?' : 'Type IS NOT NULL'})
      ${hasCityFilter ? 'AND City LIKE ?' : ''}
  `;

  const totalRows = (await query({
    query: totalRowsQuery,
    values: [
      ...(hasTypeFilter ? [`%${typeToSearch}%`] : []),
      ...(hasCityFilter ? [`%${cityToSearch}%`] : []),
    ],
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
