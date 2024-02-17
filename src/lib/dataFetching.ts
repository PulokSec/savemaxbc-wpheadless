
export async function getAllProperties({
  pageParam = 1,
  typeParam,
  queryParam,
}: {
  pageParam?: number;
  typeParam?: string;
  queryParam?: string;
} = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/all-properties?type=${typeParam}&query=${queryParam}&page=${pageParam}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getSearchQuery({
  pageParam = 0,
  queryParam = '',
}: {
  pageParam?: number;
  queryParam?: string;
} = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/search-query?query=${queryParam}&page=${pageParam}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}


export async function getMapSearchQuery({
  searchQuery = '',
}: { searchQuery?: string } = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL + `/api/map-search?query=${searchQuery}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}


export async function getMapLocation({
  searchQuery = '',
  limit = 100,
}: { searchQuery?: string; limit?: number } = { searchQuery: '', limit: 100 }): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/map-search?query=${searchQuery}&limit=${limit}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getCustomListing({
  agentId = '',
  queryParam = '',
  limit = 12,
  pageParam = 1,
}: { agentId?: string; limit?: number; pageParam : number; queryParam : string } = { agentId: '', limit: 12,pageParam : 1, queryParam : '' }): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/custom-listing?query=${queryParam}&agentid=${agentId}&limit=${limit}&page=${pageParam}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getMapRadius({
  latitude = '',
  longitude = '',
  radius = '',
  limit = 100,
}: { latitude: string; longitude: string; radius: string ; limit? : number } = { latitude: '', longitude: '', radius: '' }): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/map-search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&limit=${limit}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getFilterQuery({
  pageParam = 0,
  queryParam = '',
  transactionType = '',
  businessType = '',
  propertyType = '',
  type = '',
  bedroom = 0,
  bedroomMax = 0,
  bathroom = 0,
  bathroomMax = 0,
  price = 0,
  priceMax = 0,
}: {
  pageParam?: number;
  queryParam?: string;
  transactionType?: string;
  businessType?: string;
  propertyType?: string;
  type?: string;
  bedroom?: number;
  bedroomMax?: number;
  bathroom?: number;
  bathroomMax?: number;
  price?: number;
  priceMax?: number;
} = {}): Promise<any> {
  // Create an object to store only the parameters with data
  const queryParams: { [key: string]: string } = {};

  // Add parameters to the object only if they have data
  if (pageParam > 1) queryParams.page = pageParam.toString();
  if (queryParam?.length > 1) queryParams.query = queryParam;
  if (transactionType?.length > 1) queryParams.transactionType = transactionType;
  if (businessType?.length > 1) queryParams.businessType = businessType;
  if (propertyType?.length > 1) queryParams.propertyType = propertyType;
  if (type?.length > 1) queryParams.type = type;
  if (bedroom > 1) queryParams.bedroom = bedroom.toString();
  if (bedroomMax > 1) queryParams.bedroomMax = bedroomMax.toString();
  if (bathroom > 1) queryParams.bathroom = bathroom.toString();
  if (bathroomMax > 1) queryParams.bathroomMax = bathroomMax.toString();
  if (price > 1) queryParams.price = price.toString();
  if (priceMax > 1) queryParams.priceMax = priceMax.toString();

  const queryString = new URLSearchParams(queryParams).toString();
  console.log(queryString);

  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_URL +
      `/wp-json/api/v1/filter-search?${queryString}`,
    { method: 'GET', cache: 'no-cache' }
  );

  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }

  return await res.json();
}

export async function getSingleProperty({
  listingId = '',
}: { listingId?: string } = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL +
      `/wp-json/api/v1/single-property?listingId=${listingId}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getMapProperties({
  searchQuery = '',
}: { searchQuery?: string } = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL + `/api/map-filter?query=${searchQuery}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getPhotos({
  listingId = '',
}: { listingId?: string } = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL + `/api/photos?listingId=${listingId}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch photo');
  }
  return await res.json();
}
