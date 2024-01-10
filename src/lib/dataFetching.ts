export async function getAllProperties({
  pageParam = 1,
  typeParam,
  cityParam,
}: {
  pageParam?: number;
  typeParam?: string;
  cityParam?: string;
} = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL +
      `/api/all-properties?type=${typeParam}&city=${cityParam}&page=${pageParam}`,
    { method: 'GET', cache: 'no-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getSearchQuery({
  pageParam = 0,
  cityParam = '',
  provinceParam = '',
  streetParam = '',
}: {
  pageParam?: number;
  cityParam?: string;
  provinceParam?: string;
  streetParam?: string;
} = {}): Promise<any> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL +
      `/api/search-query?city=${cityParam}&streetAddress=${streetParam}&province=${provinceParam}&page=${pageParam}`,
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
    { method: 'GET', cache: 'force-cache' }
  );
  if (res?.status !== 200) {
    throw new Error('failed to fetch properties');
  }
  return await res.json();
}

export async function getFilterQuery({
  pageParam = 0,
  cityParam = '',
  provinceParam = '',
  streetParam = '',
  transactionType = '',
  businessType = '',
  propertyType = '',
  type = '',
  bedroom = 0,
  bedroomMax = 10,
  bathroom = 0,
  bathroomMax = 10,
  price = 0,
  priceMax = 1000000,
}: {
  pageParam?: number;
  cityParam?: string;
  provinceParam?: string;
  streetParam?: string;
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASEURL +
      `/api/filter-search?city=${cityParam}&streetAddress=${streetParam}&province=${provinceParam}&transactionType=${transactionType}&businessType=${businessType}&propertyType=${propertyType}&type=${type}&bedroom=${bedroom}&bedroomMax=${bedroomMax}&bathroom=${bathroom}&bathroomMax=${bathroomMax}&price=${price}&priceMax=${priceMax}&page=${pageParam}`,
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
    process.env.NEXT_PUBLIC_BASEURL +
      `/api/single-property?listingId=${listingId}`,
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
    { method: 'GET', cache: 'force-cache' }
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
