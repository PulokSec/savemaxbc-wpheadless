'use client';
import React from 'react';

type MyProps = {
  navigation: any;
  details: any;
};

export default function ListingTable(props: MyProps) {
  const { navigation, details } = props;
  const propertyType = [
    {
      type: 'MLS Number',
      value: details?.property_details[0]?.DdfListingID || '',
    },
    {
      type: 'Property Type',
      value: details?.property_details[0]?.PropertyType || '',
    },
    {
      type: 'View Type',
      value: details?.property_details[0]?.ViewType || '',
    },
    {
      type: 'Type',
      value: details?.property_details[0]?.Type || '',
    },
  ];
  const parkingType = [
    {
      type: 'Garage',
      value: '2',
    },
    {
      type: 'Property Type',
      value: details?.property_details[0]?.PropertyType || '',
    },
    {
      type: 'View Type',
      value: details?.property_details[0]?.ViewType || '',
    },
  ];
  const landType = [
    {
      type: 'Acreage',
      value: details?.property_details[0]?.Acreage || '',
    },
    {
      type: 'Size Irregular',
      value: details?.property_details[0]?.SizeIrregular || '',
    },
    {
      type: 'Size Total',
      value: details?.property_details[0]?.SizeTotal || '',
    },
  ];

  const buildingType = [
    {
      type: 'Bedrooms Total',
      value: details?.property_details[0]?.BedroomsTotal || '',
    },
    {
      type: 'Bathroom Total',
      value: details?.property_details[0]?.BathroomTotal || '',
    },
    {
      type: 'Basement Type',
      value: details?.property_details[0]?.BasementType || '',
    },
    {
      type: 'Appliances',
      value: details?.property_details[0]?.Appliances || '',
    },
    {
      type: 'Constructed Date',
      value: details?.property_details[0]?.ConstructedDate || '',
    },
    {
      type: 'Construction Style Attachment',
      value: details?.property_details[0]?.ConstructionStyleAttachment || '',
    },
    {
      type: 'Construction Style Split Level',
      value: details?.property_details[0]?.ConstructionStyleSplitLevel || '',
    },
    {
      type: 'Size Interior',
      value: details?.property_details[0]?.SizeInterior?.includes('sqft')
        ? `${details?.property_details[0]?.SizeInterior}`
        : `${details?.property_details[0]?.SizeInterior} sqft` || '',
    },
  ];
  return (
    <div className='mx-auto mb-5 max-w-[1400px] p-2 md:p-5 xl:py-5'>
      <h3 className='mb-2 text-gray-800'>Property Details</h3>
      <div className='mx-auto mb-6 w-full'>
        {propertyType.map((item, idx) => (
          <div
            key={idx}
            className='flex h-10 items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200'
          >
            <p className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </p>
            <p className='text-[15px]'>{item.value}</p>
          </div>
        ))}
      </div>
      <h3 className='mb-2 text-gray-800'>Building</h3>
      <div className='border-1 mx-auto mb-4 w-full rounded-3xl border-gray-100'>
        {buildingType.map((item, idx) => (
          <div
            key={idx}
            className={`${idx === 0 && 'border-t-gray-300'} ${
              idx % 2 === 0
                ? 'border-b-gray-100 bg-gray-100 '
                : 'border-b-gray-50 bg-gray-50 '
            } ${
              item.type === 'Appliances' ? 'h-20 md:h-10' : 'h-10'
            } flex items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200`}
          >
            <p
              className={`${
                item.type === 'Appliances' ? 'mr-2 md:mr-0' : ''
              } text-[15px] font-semibold text-gray-700`}
            >
              {item.type}
            </p>
            <p className='text-[15px]'>{item.value}</p>
          </div>
        ))}
      </div>
      <h3 className='mb-2 text-gray-800'>Parking</h3>
      <div className='border-1 mx-auto mb-4 w-full rounded-3xl border-gray-100'>
        {parkingType.map((item, idx) => (
          <div
            key={idx}
            className={`${idx === 0 && 'border-t-gray-300'} ${
              idx % 2 === 0
                ? 'border-b-gray-100 bg-gray-100 '
                : 'border-b-gray-50 bg-gray-50 '
            } flex h-10 items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200`}
          >
            <p className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </p>
            <p className='text-[15px]'>{item.value}</p>
          </div>
        ))}
      </div>
      <h3 className='mb-2 text-gray-800'>Land</h3>
      <div className='border-1 mx-auto mb-4 w-full rounded-3xl border-gray-100'>
        {landType.map((item, idx) => (
          <div
            key={idx}
            className={`${idx === 0 && 'border-t-gray-300'} ${
              idx % 2 === 0
                ? 'border-b-gray-100 bg-gray-100 '
                : 'border-b-gray-50 bg-gray-50 '
            } flex h-10 items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200`}
          >
            <p className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </p>
            <p className='text-[15px]'>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
