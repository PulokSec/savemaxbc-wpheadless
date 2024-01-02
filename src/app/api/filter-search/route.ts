import { query } from '@/lib/db';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageSize = 12;
  const currentPage = Number(searchParams.get('page')) || 1;
  const offset = (currentPage - 1) * pageSize;

  // Extract search parameters from URL
  const searchCity = searchParams.get('city') || '';
  const searchStreetAddress = searchParams.get('streetAddress') || '';
  const searchProvince = searchParams.get('province') || '';
  const transactionType = searchParams.get('transactionType') || '';
  const businessType = searchParams.get('businessType') || '';
  const propertyType = searchParams.get('propertyType') || '';
  const type = searchParams.get('type') || '';
  const bedroom = searchParams.get('bedroom') || '';
  const bedroomMax = searchParams.get('bedroomMax') || '';
  const bathroom = searchParams.get('bathroom') || '';
  const bathroomMax = searchParams.get('bathroomMax') || '';
  const price = searchParams.get('price') || '';
  const priceMax = searchParams.get('priceMax') || '';

  // Build the SQL query with search parameters and sort by LastUpdated in descending order
  const sqlQuery = `
    SELECT City, Province, PostalCode, Price, Neighbourhood, CommunityName, BedroomsTotal, LastUpdated, PostalCode, BathroomTotal, DdfListingID, TransactionType, Type, StreetAddress, PublicRemarks, Lease, LeasePerUnit, Latitude, Longitude, ListingID, Features, WaterFrontType, MoreInformationLink, CoolingType, BusinessType, PropertyType, HeatingType
    FROM 3d_rps_property
    WHERE 
      (City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%'))
      AND (StreetAddress LIKE CONCAT('%', ?, '%') OR Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%'))
      AND (Province LIKE CONCAT('%', ?, '%') OR City LIKE CONCAT('%', ?, '%') OR StreetAddress LIKE CONCAT('%', ?, '%'))
      OR (TransactionType LIKE CONCAT('%', ?, '%') AND BusinessType LIKE CONCAT('%', ?, '%') AND PropertyType LIKE CONCAT('%', ?, '%') AND Type LIKE CONCAT('%', ?, '%') AND BedroomsTotal >= ? AND BedroomsTotal <= ? AND BathroomTotal >= ? AND BathroomTotal <= ? AND Price >= ? AND Price <= ?)
    ORDER BY LastUpdated DESC
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
    transactionType,
    businessType,
    propertyType,
    type,
    bedroom,
    bedroomMax,
    bathroom,
    bathroomMax,
    price,
    priceMax,
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
      OR (TransactionType LIKE CONCAT('%', ?, '%') AND BusinessType LIKE CONCAT('%', ?, '%') AND PropertyType LIKE CONCAT('%', ?, '%') AND Type LIKE CONCAT('%', ?, '%') AND BedroomsTotal >= ? AND BedroomsTotal <= ? AND BathroomTotal >= ? AND BathroomTotal <= ? AND Price >= ? AND Price <= ?)
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
    transactionType,
    businessType,
    propertyType,
    type,
    bedroom,
    bedroomMax,
    bathroom,
    bathroomMax,
    price,
    priceMax,
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
