'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import Scroll from '@/components/utils/Scroll';
import useQueryParams from '@/components/utils/useQueryParams';

const filterData = [
  { name: 'House', value: 'House' },
  { name: 'Townhouse', value: 'Town' },
  { name: 'Condominium', value: 'Condo' },
];

const SearchTab = () => {
  const [filters, setFilters] = useState([{ name: '', value: '' }]);
  const [filterDataShow, setFilterDataShow] = useState(false);
  const [filtersData, setFiltersData] = useState([]);
  const [buyShow, setBuyShow] = useState(true);
  const [rentShow, setRentShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [mapField, setMapField] = useState('');
  const [type, setType] = useState('');
  const domNode: any = useRef();
  const router = useRouter();
  const { setQueryParam } = useQueryParams();
  const handleRemove = (data: string) => {
    setFilters(
      filters.filter((filter: { name: string }) => filter.name !== data)
    );
  };
  const handleSelect = (data: string) => {
    setType(data);
    setQueryParam('type', data);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchField?.length > 0 && searchField?.length > mapField?.length) {
      router.push(`/listing?query=${searchField}`);
    }
    if (mapField?.length > 0 && mapField?.length > searchField?.length) {
      router.push(`/map?query=${mapField}`);
    }
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
  const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapField(e.target.value);
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
    <div className='mt-[10%] min-h-[500px] w-full px-5 md:max-w-[1400px] md:pb-10'>
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
        className='rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white  p-5  shadow'
        ref={domNode}
      >
        {buyShow ? (
          <div>
            <div className='my-2 flex gap-2'>
              {filters?.map(
                (filter: { name: string; value: string }, idx: number) => {
                  return (
                    filter?.name?.length > 0 && (
                      <div
                        key={idx}
                        onClick={() => {
                          handleRemove(filter.name);
                        }}
                        className='flex cursor-pointer items-center rounded border-2 px-2 py-0.5 text-[14px] text-gray-400'
                      >
                        <p className=''>{filter.name}</p>
                        <RxCross2 className='ml-1 ' />
                      </div>
                    )
                  );
                }
              )}
            </div>
            <form
              onSubmit={(e: any) => handleSubmit(e)}
              className='flex flex-col justify-around gap-2 md:flex-row'
            >
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
                  onChange={handleMapChange}
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
                              key={element.name}
                              className={`flex ${
                                filters.includes({
                                  name: element.name,
                                  value: element.value,
                                })
                                  ? 'text-primary'
                                  : 'text-[#000000]'
                              } cursor-pointer items-center justify-between`}
                              onClick={() => {
                                setFilters(() => [
                                  { name: element.name, value: element.value },
                                ]);
                                handleSelect(element.value);
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
            </form>
          </div>
        ) : (
          ''
        )}
        {rentShow ? (
          <div>
            <div className='my-2 flex gap-2'>
              {filters?.map(
                (filter: { name: string; value: string }, idx: number) => {
                  return filter?.name?.length > 0 ? (
                    <div
                      key={idx}
                      onClick={() => {
                        handleRemove(filter.name);
                      }}
                      className='flex cursor-pointer items-center rounded border-2 px-2 py-0.5 text-[14px] text-gray-400'
                    >
                      <p className=''>{filter.name}</p>
                      <RxCross2 className='ml-1 ' />
                    </div>
                  ) : null;
                }
              )}
            </div>
            <form
              onSubmit={(e: any) => handleSubmit(e)}
              className='flex flex-col justify-around gap-2 md:flex-row'
            >
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
                  onChange={handleMapChange}
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
                              key={element.name}
                              className={`flex ${
                                filters.includes({
                                  name: element.name,
                                  value: element.value,
                                })
                                  ? 'text-primary'
                                  : 'text-[#000000]'
                              } cursor-pointer items-center justify-between`}
                              onClick={() => {
                                setFilters(() => [
                                  { name: element.name, value: element.value },
                                ]);
                                handleSelect(element.value);
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
            </form>
          </div>
        ) : (
          ''
        )}
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
