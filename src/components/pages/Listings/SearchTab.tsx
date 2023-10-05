'use client';
import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import Scroll from '@/components/utils/Scroll';

const filterData = [
  { name: 'House', value: 'House' },
  { name: 'Garden', value: 'Garden' },
  { name: 'Pool', value: 'Pool' },
];

const SearchTab = () => {
  const [filterDataShow, setFilterDataShow] = useState(false);
  const [filters, setFilters] = useState(filterData);
  const [filtersData, setFiltersData] = useState([]);
  const [buyShow, setBuyShow] = useState(true);
  const [rentShow, setRentShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const domNode: any = useRef();
  const handleRemove = (data: string) => {
    setFilters(filters.filter((filter) => filter.name !== data));
  };

  useEffect(() => {
    const fetchData = async () => {
      const city = searchField.split(',')[0] || searchField;
      const street = searchField.split(',')[1] || searchField;
      const province = searchField.split(',')[2] || searchField;
      const result = await getSearchQuery({
        cityParam: city ? city : '',
        streetParam: street ? street : '',
        provinceParam: province ? province : '',
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
    <div className='mt-[15%] min-h-[500px] w-full px-5 pb-10 md:max-w-[1400px]'>
      <div className='flex gap-2'>
        <div
          onClick={() => {
            setBuyShow(true);
            setRentShow(false);
          }}
          className={`${
            buyShow ? 'bg-white' : 'bg-gray-400 text-white'
          } cursor-pointer rounded-t px-3 py-2`}
        >
          <p>Buy</p>
        </div>
        <div
          onClick={() => {
            setBuyShow(false);
            setRentShow(true);
          }}
          className={`${
            rentShow ? 'bg-white' : 'bg-gray-400 text-white'
          } cursor-pointer rounded-t px-3 py-2`}
        >
          <p>Rent</p>
        </div>
      </div>
      <div
        className='rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white  p-5'
        ref={domNode}
      >
        {buyShow ? (
          <div>
            <div className='my-2 flex gap-2'>
              {filters.map(
                (filter: { name: string; value: string }, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handleRemove(filter.value);
                    }}
                    className='flex cursor-pointer items-center rounded border-2 px-2 py-0.5 text-[14px] text-gray-400'
                  >
                    <p className=''>{filter.name}</p>
                    <RxCross2 className='ml-1 ' />
                  </div>
                )
              )}
            </div>
            <div className='flex flex-col justify-around gap-2 md:flex-row'>
              <div className='search flex w-full items-center rounded border-2 bg-gray-200 px-3 py-1 md:w-[450px]'>
                <BsSearch className='mr-1 text-gray-400 ' />
                <input
                  className='w-full border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Search Street City, Province, RP number'
                  onChange={handleChange}
                />
              </div>
              <div className='search flex items-center rounded border-2 bg-gray-200 px-3 py-1'>
                <GrLocation className='mr-1 text-gray-400 ' />
                <input
                  className='border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Enter business location'
                />
              </div>
              <div className='search flex items-center rounded border-2 bg-gray-200 px-3 py-1'>
                <MdOutlineDateRange className='mr-1 text-gray-400 ' />
                <input
                  className='border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Date oldest to newest'
                />
              </div>
              <div className='relative'>
                <div
                  onClick={() => {
                    setFilterDataShow(!filterDataShow);
                  }}
                  className='search flex w-[130px] cursor-pointer items-center rounded-[5px] border-2 bg-gray-900 px-3 py-1 text-white'
                >
                  <p className='text-md'>Filter Results</p>
                </div>

                {filterDataShow ? (
                  <>
                    {/* <div className="arrow  absolute h-[20px]  w-[20px] bg-black rotate-45" id="arrow"/> */}
                    <div className='absolute left-0 z-10 mt-5 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div
                        className='divide-gray/20 max-h-[400px] divide-y overflow-y-scroll py-2'
                        role='none'
                      >
                        {filterData?.map((element) => {
                          return (
                            <div
                              key={element.value}
                              className={`flex ${
                                filters.includes({
                                  name: element.name,
                                  value: element.value,
                                })
                                  ? 'text-primary'
                                  : 'text-[#000000]'
                              } cursor-pointer items-center justify-between`}
                              onClick={() => {
                                setFilters((prevFilters) => [
                                  ...prevFilters,
                                  { name: element.name, value: element.value },
                                ]);

                                setFilterDataShow(false);
                              }}
                            >
                              <p className={`  px-4  py-2 text-[14px] `}>
                                {element.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        {rentShow ? (
          <div>
            <div className='my-2 flex gap-2'>
              {filters.map(
                (filter: { name: string; value: string }, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handleRemove(filter.value);
                    }}
                    className='flex cursor-pointer items-center rounded border-2 px-2 py-0.5 text-[14px] text-gray-400'
                  >
                    <p className=''>{filter.name}</p>
                    <RxCross2 className='ml-1 ' />
                  </div>
                )
              )}
            </div>
            <div className='flex flex-col justify-around gap-2 md:flex-row'>
              <div className='search flex w-full items-center rounded border-2 bg-gray-200 px-3 py-1 md:w-[450px]'>
                <BsSearch className='mr-1 text-gray-400 ' />
                <input
                  className='w-full border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Search Street City, Province, RP number'
                  onChange={handleChange}
                />
              </div>
              <div className='search flex items-center rounded border-2 bg-gray-200 px-3 py-1'>
                <GrLocation className='mr-1 text-gray-400 ' />
                <input
                  className='border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Enter business location'
                />
              </div>
              <div className='search flex items-center rounded border-2 bg-gray-200 px-3 py-1'>
                <MdOutlineDateRange className='mr-1 text-gray-400 ' />
                <input
                  className='border-none bg-gray-200 outline-none'
                  type='text'
                  placeholder='Date oldest to newest'
                />
              </div>
              <div className='relative'>
                <div
                  onClick={() => {
                    setFilterDataShow(!filterDataShow);
                  }}
                  className='search flex w-[130px] cursor-pointer items-center rounded-[5px] border-2 bg-gray-900 px-3 py-1 text-center text-white'
                >
                  <p className='text-md'>Filter Results</p>
                </div>

                {filterDataShow ? (
                  <>
                    {/* <div className="arrow  absolute h-[20px]  w-[20px] bg-black rotate-45" id="arrow"/> */}
                    <div className='absolute left-0 z-10 mt-5 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div
                        className='divide-gray/20 max-h-[400px] divide-y overflow-y-scroll py-2'
                        role='none'
                      >
                        {filterData?.map((element) => {
                          return (
                            <div
                              key={element.value}
                              className={`flex ${
                                filters.includes({
                                  name: element.name,
                                  value: element.value,
                                })
                                  ? 'text-primary'
                                  : 'text-[#000000]'
                              } cursor-pointer items-center justify-between`}
                              onClick={() => {
                                setFilters((prevFilters) => [
                                  ...prevFilters,
                                  { name: element.name, value: element.value },
                                ]);

                                setFilterDataShow(false);
                              }}
                            >
                              <p className={`  px-4  py-2 text-[14px] `}>
                                {element.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='relative z-50 mt-[-20px] w-full'>
        {searchShow ? (
          filtersData?.length > 0 ? (
            <Scroll
              style={{
                height: '22vh',
                boxShadow: '0px 4px 15px rgba(125, 35, 224, 0.2)',
              }}
              className='overflow-y-scroll'
            >
              {filtersData?.map((post: any, idx: number) => {
                return (
                  <div key={idx} className=''>
                    <p className='my-2 cursor-pointer px-5 text-[#115E59]'>
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
