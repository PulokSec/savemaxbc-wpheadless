'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import FilterModal from '@/components/shared/FilterModal';
import Scroll from '@/components/utils/Scroll';


const SearchTab = () => {
  const [filtersData, setFiltersData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const domNode: any = useRef();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchShow(false);
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = searchField;
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
    <div className='mt-[10%] min-h-[500px] w-full px-5 md:pb-10 lg:max-w-[1400px]'>
      <div
        className='rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white p-5 shadow'
        ref={domNode}
      >
        <div>
          <form
            onSubmit={(e: any) => handleSubmit(e)}
            className='flex flex-col justify-around gap-2 lg:flex-row'
          >
            <div className='search flex w-full items-center rounded border-2 bg-gray-200 px-3 py-1 md:w-[450px] lg:w-[400px] xl:w-[450px]'>
              <BsSearch className='mr-1 text-gray-400 ' />
              <input
                className='w-full border-none bg-gray-200 outline-none'
                type='text'
                placeholder='Search Street City, Province, RP number'
                onChange={handleChange}
              />
            </div>
            <div className='relative'>
              <div
                onClick={() => setModalOpen(true)}
                className='search hover:bg mx-auto flex w-[130px] cursor-pointer items-center rounded-[5px] border-2 bg-gray-900 px-3 py-3.5 text-center text-white'
              >
                <p className='w-full text-center text-[15px]'>Filter Results</p>
              </div>
              {modalOpen && (
                <FilterModal
                  setModalOpen={setModalOpen}
                  modalOpen={modalOpen}
                  preInput={searchField}
                />
              )}
            </div>
          </form>
        </div>
      </div>
      <div className='relative z-50 mt-[-20px] w-full overflow-hidden rounded-b-xl bg-white shadow'>
        {searchShow ? (
          filtersData?.length > 0 ? (
            <Scroll
              style={{
                height: '22vh',
              }}
              className='mt-3 overflow-y-scroll '
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
                        ).toLowerCase()}-${post?.PostalCode}-${post?.ListingID}`
                      )
                    }
                    key={idx}
                    className=''
                  >
                    <p className='my-2 cursor-pointer px-5 text-[14px] text-[#082f49]'>
                      {post?.StreetAddress} {post?.City}/{post?.Province}
                    </p>
                  </div>
                );
              })}
            </Scroll>
          ) : (
            <Scroll>
              <p className='my-8 flex items-center justify-center '>
                No matched Properties
              </p>
            </Scroll>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchTab;
