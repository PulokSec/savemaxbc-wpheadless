'use client';
import { RotateCcw, SearchCheck, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Select from 'react-select';

type Props = {
  setModalOpen?: any;
  modalOpen?: boolean;
  transactionFields: any;
};

const propertyOptions = [
  { value: 'Choose Property Type', label: 'Choose Property Type' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Business', label: 'Business' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Industrial', label: 'Industrial' },
  { value: 'Multi-family', label: 'Multi-family' },
  { value: 'Office', label: 'Office' },
  { value: 'Recreational', label: 'Recreational' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Single Family', label: 'Single Family' },
  { value: 'Vacant Land', label: 'Vacant Land' },
  { value: 'Other', label: 'Other' },
];

const businessOptions = [
  { value: 'Choose Business Type', label: 'Choose Business Type' },
  { value: 'Accommodation', label: 'Accommodation' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Arts & Entertainment', label: 'Arts & Entertainment' },
  { value: 'Automobile', label: 'Automobile' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Fishing and Hunting', label: 'Fishing and Hunting' },
  { value: 'Food Services and Beverage', label: 'Food Services and Beverage' },
  { value: 'Forestry', label: 'Forestry' },
  {
    value: 'Health Care and Social Assistance',
    label: 'Health Care and Social Assistance',
  },
  { value: 'Industrial', label: 'Industrial' },
  { value: 'Institutional', label: 'Institutional' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Personal Services', label: 'Personal Services' },
  { value: 'Professional', label: 'Professional' },
  { value: 'Recreational', label: 'Recreational' },
  { value: 'Residential', label: 'Residential' },
  { value: 'Resort', label: 'Resort' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Other', label: 'Other' },
];

const buildingOptions = [
  { value: 'Choose Building Type', label: 'Choose Building Type' },
  // { value: 'Apartment', label: 'Apartment' },
  // { value: 'Commercial Mix', label: 'Commercial Mix' },
  // { value: 'Duplex', label: 'Duplex' },
  // { value: 'Floathome', label: 'Floathome' },
  // { value: 'Flourplex', label: 'Flourplex' },
  { value: 'House', label: 'House' },
  { value: 'Condo', label: 'Condominium' },
  // { value: 'Manufactured Home', label: 'Manufactured Home' },
  // { value: 'Manufactured Home/Mobile', label: 'Manufactured Home/Mobile' },
  // { value: 'Mobile Family', label: 'Mobile Family' },
  // { value: 'Multi Tenant Industrial', label: 'Multi Tenant Industrial' },
  // { value: 'Offices', label: 'Offices' },
  // { value: 'Recreational', label: 'Recreational' },
  // { value: 'Residential Commercial Mix', label: 'Residential Commercial Mix' },
  // { value: 'Retail', label: 'Retail' },
  { value: 'Row / Townhouse', label: 'Row / Townhouse' },
  //   { value: 'Triplex', label: 'Triplex' },
  //   { value: 'Warehouse', label: 'Warehouse' },
  //   { value: 'Other', label: 'Other' },
];

const transactionOptions = [
  { value: 'Choose Transaction Type', label: 'Choose Transaction Type' },
  { value: 'For Lease', label: 'For Lease' },
  { value: 'For Rent', label: 'For Rent' },
  { value: 'For Sale', label: 'For Sale' },
  { value: 'For Sale Or Rent', label: 'For Sale Or Rent' },
];

const FilterModal = (props: Props) => {
  const { modalOpen, setModalOpen, transactionFields } = props;
  const [city, setCity] = useState('');
  const [transactionField, setTransactionField] = useState<string | any>();
  const [propertyField, setPropertyField] = useState<string | any>();
  const [businessField, setBusinessField] = useState<string | any>();
  const [buildingField, setBuildingField] = useState<string | any>();
  const [bedroom, setBedroom] = useState<number>(0);
  const [bathroom, setBathroom] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const router = useRouter();

  const handleRangeChange = (event: any, setFunction: (arg0: any) => void) => {
    setFunction(event.target.value);
  };

  const handleReset = () => {
    setBedroom(3);
    setBathroom(0);
    setPrice(0);
    setTransactionField(transactionOptions[0].value);
    setPropertyField(propertyOptions[0].value);
    setBusinessField(businessOptions[0].value);
    setBuildingField(buildingOptions[0].value);
    setCity('');
  };
  const handleSearch = () => {
    // search function
    router.push(
      `/our-listings?city=${city}&streetAddress=${city}&province=${city}&transactionType=${transactionField?.value?.toString()}&businessType=${businessField?.value?.toString()}&propertyType=${propertyField?.value?.toString()}&type=${buildingField?.value?.toString()}&bedroom=${bedroom?.toString()}&bathroom=${bathroom?.toString()}&price=${price?.toString()}`
    );
  };
  return (
    <>
      <div
        className='fixed inset-0 z-40 bg-black opacity-50'
        onClick={() => setModalOpen(false)}
      ></div>
      <div
        className={` fixed left-1/2 top-1/2 z-50 mx-auto flex h-auto w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white py-16 shadow-lg  md:w-3/4 md:py-10 lg:top-1/2 lg:h-auto lg:w-2/3`}
      >
        <div className='relative  '>
          <div className='fixed right-3 top-3'>
            <X
              onClick={() => setModalOpen(false)}
              className=' h-6 w-6 cursor-pointer text-sky-950 transition-all duration-300 ease-in-out hover:scale-125'
            />
          </div>
        </div>

        <div className='mx-auto mb-5 w-11/12 px-2 md:px-10'>
          <input
            className='mx-auto h-14 w-full rounded border-none bg-gray-200 pl-5 outline-none'
            type='text'
            placeholder='Search Street City, Province, RP number'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className='mx-auto mb-5 flex w-11/12 flex-col items-center justify-between gap-4 px-2 md:flex-row md:px-10'>
          <div className='mx-auto w-full md:w-1/2'>
            <Select
              defaultValue={transactionField}
              onChange={setTransactionField}
              options={transactionOptions}
              placeholder={transactionOptions[0].value}
              value={transactionField}
            />
          </div>
          <div className='mx-auto w-full md:w-1/2'>
            <Select
              defaultValue={propertyField}
              onChange={setPropertyField}
              options={propertyOptions}
              placeholder={propertyOptions[0].value}
              value={propertyField}
            />
          </div>
        </div>
        <div className='mx-auto mb-5 flex w-11/12 flex-col items-center justify-between gap-4 px-2 md:flex-row md:px-10'>
          <div className='mx-auto w-full md:w-1/2'>
            <Select
              defaultValue={businessField}
              onChange={setBusinessField}
              options={businessOptions}
              placeholder={businessOptions[0].value}
              value={businessField}
            />
          </div>
          <div className='mx-auto w-full md:w-1/2'>
            <Select
              defaultValue={buildingField}
              onChange={setBuildingField}
              options={buildingOptions}
              placeholder={buildingOptions[0].value}
              value={buildingField}
            />
          </div>
        </div>
        <div className='mx-auto my-2 flex w-11/12 items-center gap-4 px-2 md:px-10'>
          <p className='w-1/2'>Bedrooms: {bedroom}</p>
          <p className='w-1/2'>Bathrooms: {bathroom}</p>
        </div>
        <div className='mx-auto flex w-11/12 items-center gap-4 px-2 md:px-10'>
          <input
            className='w-full '
            type='range'
            name='bedroom'
            id='bedroom'
            min='1'
            max='10'
            step='1'
            value={bedroom}
            onChange={(e) => handleRangeChange(e, setBedroom)}
          />
          <input
            className='w-full '
            type='range'
            name='bathroom'
            id='bathroom'
            min='1'
            max='10'
            step='1'
            value={bathroom}
            onChange={(e) => handleRangeChange(e, setBathroom)}
          />
        </div>
        <div className='mx-auto my-3 flex w-11/12 items-center gap-4 px-2 md:px-10'>
          <p className='w-1/2'>Price: ${price}</p>
        </div>
        <div className='flex w-11/12 items-center gap-4 px-2 md:px-10'>
          <input
            className='w-full '
            type='range'
            name='price'
            id='price'
            min='0'
            max='1000000'
            step='25000'
            value={price}
            onChange={(e) => handleRangeChange(e, setPrice)}
          />
        </div>
        <div className='mt-10 flex items-center justify-center gap-5'>
          <div
            onClick={handleReset}
            className='flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600'
          >
            <RotateCcw className='h-5 w-5' />
            <p>Reset</p>
          </div>
          <div
            onClick={handleSearch}
            className='flex cursor-pointer items-center gap-2 rounded-lg bg-sky-950 px-6 py-3 text-center text-white duration-500 ease-in-out hover:bg-[#061632] hover:transition-all'
          >
            <SearchCheck className='h-5 w-5' />
            <p>Search</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
