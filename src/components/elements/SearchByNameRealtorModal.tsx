import { RotateCcw, SearchCheck, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {
  setNameSearchModal: any;
  allRealtors: any;
};

const SearchByNameRealtorModal = (props: Props) => {
  const { setNameSearchModal, allRealtors } = props;
  const [name, setName] = useState<string | any>('');
  const [number, setNumber] = useState<string | any>('');
  const [filteredRealtors, setFilteredRealtors] = useState();
  const router = useRouter();

  // console.log('realtors', filteredRealtors);

  const handleReset = () => {
    setName('');
    setNumber('');
  };
  const handleSearch = () => {
    // const filtered = allRealtors.filter(
    //   (realtor: any) =>
    //     realtor.name.toLowerCase().includes(name.toLowerCase()) &&
    //     realtor.phone.includes(number)
    // );
    // setFilteredRealtors(filtered);
    router.push(`realtors?name=${name}&number=${number}`);
  };
  return (
    <>
      <div
        className='fixed inset-0 z-40 bg-black opacity-50'
        onClick={() => setNameSearchModal(false)}
      ></div>
      <div
        className={` fixed left-1/2 top-1/2 z-50 mx-auto flex h-auto w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-white py-16 shadow-lg md:w-1/2 md:py-10 lg:top-1/2 lg:h-auto lg:w-1/3`}
      >
        <div className='relative  '>
          <div className='fixed right-3 top-3'>
            <X
              onClick={() => setNameSearchModal(false)}
              className=' h-6 w-6 cursor-pointer text-sky-950 transition-all duration-300 ease-in-out hover:scale-125'
            />
          </div>
        </div>

        <div className='mx-auto mb-5 w-11/12 px-2 md:px-10'>
          <p className='mb-2'>Realtor Name</p>
          <input
            className='mx-auto h-14 w-full rounded border-gray-700 bg-gray-50 pl-5 outline-none'
            type='text'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className='mx-auto mb-5 w-11/12 px-2 md:px-10'>
          <p className='mb-2'>Phone Number</p>
          <input
            className='mx-auto h-14 w-full rounded border-gray-700 bg-gray-50 pl-5 outline-none'
            type='number'
            placeholder='Number'
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
        </div>

        <div className='mt-6 flex items-center justify-center gap-5 md:mt-10'>
          <div
            className='flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600'
            onClick={handleReset}
          >
            <RotateCcw className='h-5 w-5' />
            <p>Reset</p>
          </div>
          <div
            className='flex cursor-pointer items-center gap-2 rounded-lg bg-sky-950 px-6 py-3 text-center text-white duration-500 ease-in-out hover:bg-[#061632] hover:transition-all'
            onClick={handleSearch}
          >
            <SearchCheck className='h-5 w-5' />
            <p>Search</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByNameRealtorModal;
