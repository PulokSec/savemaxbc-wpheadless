import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import FilterModal from '@/components/shared/FilterModal';
import Scroll from '@/components/utils/Scroll';

type Props = {
  setModalOpen?: any;
  modalOpen?: boolean;
};

const SearchModal = (props: Props) => {
  const { modalOpen, setModalOpen } = props;
  const [filtersData, setFiltersData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const domNode: any = useRef();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const query= searchField;
      const result = await getSearchQuery({
        queryParam: query,
        pageParam: 1,
      });
      setFiltersData(result?.listings);
    };
    fetchData();
  }, [searchField]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
    if (e.target.value.length > 0) {
      setSearchShow(true);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchField?.length > 0) {
      setSearchShow(false);
      setOpenFilterModal(true);
    }
  };
  //  const handleClick = (e: any) => {
  //   e.preventDefault();
  //   if (searchField?.length > 0) {
  //     router.push(`/listing?query=${searchField}`);
  //   }
  // };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!searchField.length) {
        setSearchShow(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [searchField]);

  UseClickOutside(domNode.current, () => {
    setSearchShow(false);
  });
  return (
    <>
      {!openFilterModal ? (<>
        <div
        className='fixed inset-0 z-40 bg-black opacity-50'
        onClick={() => setModalOpen(false)}
      ></div>
      <div
        className={`${
          searchField.length ? '' : ''
        } fixed left-1/2 top-1/2 z-50 mx-auto flex h-[350px] w-11/12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-white shadow-lg  md:w-[600px] lg:top-1/2 lg:h-[400px]`}
      >
        <div className='relative  '>
          <div className='fixed right-3 top-3'>
            <X
              onClick={() => setModalOpen(false)}
              className=' h-6 w-6 cursor-pointer text-sky-950 transition-all duration-300 ease-in-out hover:scale-125'
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='mb-1 pt-4 text-gray-800'>Search Your Home</h3>
          <p className='mb-4 font-medium text-gray-800'>
            Find thousands of homes of our listing
          </p>
          <div className='flex flex-col items-center justify-center'>
            <form
              onSubmit={(e) => handleSubmit(e)}
              ref={domNode}
              className='mt-3 flex flex-row items-center justify-center'
            >
              <input
                onClick={() => setSearchShow(true)}
                className='search h-[42px] w-full rounded-[1000px] px-5 text-[14px] drop-shadow-2xl placeholder:pb-4 placeholder:text-[12px] md:ml-10 md:h-[52px] md:w-[400px] lg:text-[20px] lg:placeholder:text-[14px]'
                type='search'
                onChange={handleChange}
                placeholder='Search'
              />
              <button
                onClick={(e: any) => handleSubmit(e)}
                type='submit'
                className='border-bg-blue relative right-[35px] cursor-pointer rounded-[50%] border bg-[#061632] p-3 hover:bg-sky-950 md:right-[54px] md:p-4'
              >
                <GoSearch className=' text-white md:w-5 ' />
              </button>
            </form>
            <div className='mt-2'>
              {searchShow ? (
                filtersData?.length > 0 ? (
                  <div className='w-full rounded-md bg-white lg:w-[450px]'>
                    <Scroll
                      style={{
                        height: '22vh',
                        boxShadow: '0px 4px 15px rgba(125, 35, 224, 0.2)',
                      }}
                      className='relative overflow-y-scroll'
                    >
                      {filtersData?.map((post: any, idx: number) => {
                        return (
                          <div
                            onClick={() =>
                              router.push(
                                `/listing/${post?.StreetAddress?.replaceAll(
                                  ' ',
                                  '-'
                                ).toLowerCase()}-${post?.City?.replaceAll(
                                  ' ',
                                  '-'
                                ).toLowerCase()}-${post?.Province?.replaceAll(
                                  ' ',
                                  '-'
                                ).toLowerCase()}-${post?.PostalCode}-${
                                  post?.ListingID
                                }`
                              )
                            }
                            key={idx}
                            className='text-start'
                          >
                            <p className='my-2 cursor-pointer px-5 text-[14px] text-[#082F49]'>
                              {post?.StreetAddress} {post?.City}/
                              {post?.Province}
                            </p>
                          </div>
                        );
                      })}
                    </Scroll>
                  </div>
                ) : (
                  <div className='flex w-full items-center justify-center rounded-md bg-white'>
                    <p className='w-full p-3 text-center lg:w-[450px]'>
                      No matched Properties
                    </p>
                  </div>
                )
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div></>):
(
                <FilterModal
                  setModalOpen={setOpenFilterModal}
                  modalOpen={openFilterModal}
                  preInput={searchField}
                />
              )
              }
    </>
  );
};

export default SearchModal;
