import { X } from 'lucide-react';
import React from 'react';
import { GoSearch } from 'react-icons/go';

type Props = {
  setModalOpen?: any;
  modalOpen?: boolean;
};

const SearchModal = (props: Props) => {
  const { modalOpen, setModalOpen } = props;
  return (
    <>
      <div
        className='fixed inset-0 z-40 bg-black opacity-50'
        onClick={() => setModalOpen(false)}
      ></div>
      <div className='fixed left-1/2 top-1/2 z-50 mx-auto flex h-[350px] w-11/12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-white shadow-lg md:h-[300px] md:w-[600px] lg:top-1/2'>
        <div className='relative  '>
          <div className='fixed right-3 top-3'>
            <X
              onClick={() => setModalOpen(false)}
              className=' h-6 w-6 cursor-pointer text-sky-950 transition-all duration-300 ease-in-out hover:scale-125'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='mb-1 text-gray-800'>Search Your Home</h3>
          <p className='mb-4 font-medium text-gray-800'>
            Find thousands of homes of our listing
          </p>
          <div className='flex flex-col items-center justify-center'>
            <form className='mt-3 flex flex-row items-center justify-center'>
              <input
                className='search h-[42px] w-full rounded-[1000px] px-5 text-[14px] drop-shadow-2xl placeholder:pb-4 placeholder:text-[12px] md:ml-10 md:h-[52px] md:w-[400px] lg:text-[20px] lg:placeholder:text-[14px]'
                type='search'
                placeholder='Search'
              />
              <button
                type='submit'
                className='border-bg-blue relative right-[35px] cursor-pointer rounded-[50%] border bg-[#061632] p-3 hover:bg-sky-950 md:right-[54px] md:p-4'
              >
                <GoSearch className=' text-white md:w-5 ' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
