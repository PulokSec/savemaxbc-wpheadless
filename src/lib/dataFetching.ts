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
  pageParam = 1,
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

export async function getSingleProperty({
  listingId = '',
}: { listingId?: string } = {}): Promise<any> {
  console.log(listingId);
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
