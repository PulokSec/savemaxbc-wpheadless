'use client';
import React from 'react';

type MyProps = {
  navigation: any;
};

const propertyType = [
  {
    type: 'MLS Number',
    value: 'R2834925',
  },
  {
    type: 'Property Type',
    value: 'Single Family',
  },
  {
    type: 'View Type',
    value: 'Mountain View, View Of Water',
  },
];
const parkingType = [
  {
    type: 'Garage',
    value: '2',
  },
  {
    type: 'Property Type',
    value: 'Single Family',
  },
  {
    type: 'View Type',
    value: 'Mountain View, View Of Water',
  },
];
const landType = [
  {
    type: 'Acreage',
    value: 'Yes',
  },
  {
    type: 'Size Irregular',
    value: '3.29',
  },
  {
    type: 'Size Total',
    value: '3.29 Ac',
  },
];

const buildingType = [
  {
    type: 'Bedrooms Total',
    value: '4',
  },
  {
    type: 'Bathroom Total',
    value: '3',
  },
  {
    type: 'Basement Type',
    value: 'Crawl Space',
  },
  {
    type: 'Appliances',
    value: 'Washer, Dryer, Refrigerator, Stove, Dishwasher',
  },
  {
    type: 'Constructed Date',
    value: '2004',
  },
  {
    type: 'Construction Style Attachment',
    value: 'Detached',
  },
  {
    type: 'Construction Style Split Level',
    value: 'Split Level',
  },
  {
    type: 'Size Interior',
    value: '2050 Sqft',
  },
  
];

export default function ListingTable(props: MyProps) {
  return (
    <div className='mx-auto mb-5 max-w-[1400px] p-2 md:p-5 xl:py-5'>
      <h3 className='mb-2 text-gray-800'>Property Details</h3>
      <div className='mx-auto mb-6 w-full'>
        {propertyType.map((item, idx) => (
          <div
            key={idx}
            className={`${idx === 0 && 'border-t-gray-300'} ${
              idx % 2 === 0
                ? 'border-b-gray-100 bg-gray-100 '
                : 'border-b-gray-50 bg-gray-50 '
            } flex h-10 items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200`}
          >
            <h5 className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </h5>
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
            } flex h-10 items-center justify-between overflow-auto border-2 px-1 hover:border-b-gray-200 hover:bg-gray-200`}
          >
            <h5 className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </h5>
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
            <h5 className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </h5>
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
            <h5 className='text-[15px] font-semibold text-gray-700'>
              {item.type}
            </h5>
            <p className='text-[15px]'>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
