export function constructPhotoUrl(listingId: string, filename: string) {
  const typeTag = filename?.includes('Photo') ? 'Photo' : filename?.includes('LargePhoto') ? 'LargePhoto' : '';
  const lastIndex = getLastIndexFromFilename(filename);

  if (typeTag !== '') {
      return `https://savemaxbc.wpengine.com/wp-content/uploads/realtypress/images/listing/${listingId}/Property-${listingId}-${typeTag}-${lastIndex}.jpg`;
  } else {
      return filename; // Handle other cases if needed
  }
}

function getLastIndexFromFilename(filename: string) {
  // Extract the last index from the filename (assuming the format is "Property-{listingId}-{typeTag}-{index}.jpg")
  const matches = filename.match(/-(\d+)\.jpg$/);
  return matches ? matches[1] : '';
}