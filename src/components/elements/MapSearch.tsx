'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';

import { getPhotos, getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import Loader from '@/components/utils/Loader';
import Scroll from '@/components/utils/Scroll';
import useQueryParams from '@/components/utils/useQueryParams';
const MultiMapComponent = dynamic(() => import('@/components/utils/MultiMap'), {
  ssr: false,
});
const MapBox = dynamic(() => import('@/components/utils/MapBox'), {
  loading: () => <Loader />,
  ssr: false,
});
const filterData = [
  { name: 'House', value: 'House' },
  { name: 'Townhouse', value: 'Town' },
  { name: 'Condominium', value: 'Condo' },
];
type MyProps = {
  query: string;
  pageParam: number;
};

const MapSearch = (props: MyProps) => {
  const { query, pageParam } = props;
  const [filters, setFilters] = useState([{ name: '', value: '' }]);
  const [filterDataShow, setFilterDataShow] = useState(false);
  const [filtersData, setFiltersData] = useState(Array<any>());
  const [posts, setPosts] = useState(Array<any>());
  const [searchShow, setSearchShow] = useState(false);
  const [mapField, setMapField] = useState(query);
  const [type, setType] = useState('');
  const [count, setCount] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const domNode: any = useRef();
  const { setQueryParam } = useQueryParams();

  console.log(posts);

  const handleRemove = (data: string) => {
    setFilters(
      filters.filter((filter: { name: string }) => filter.name !== data)
    );
  };
  const handleSelect = (data: string) => {
    setType(data);
    setQueryParam('query', data);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (mapField?.length > 0) {
      setQueryParam('query', mapField);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const city = mapField?.split(',')[0] || mapField || query;
        const street = mapField?.split(',')[1] || mapField || query;
        const province = mapField?.split(',')[2] || mapField || query;
        const result = await getSearchQuery({
          cityParam: city ? city : '',
          streetParam: street ? street : '',
          provinceParam: province ? province : '',
          pageParam: pageParam ? pageParam : 1,
        });
        setFiltersData(result?.listings);
        setLatitude(result?.listings[0]?.Latitude);
        setLongitude(result?.listings[0]?.Longitude);
        setCount(result?.totalCount);
      } catch (error) {
        console.log(error);
      }
    };

    if (mapField.length > 0 || query.length > 0 || pageParam > 0) {
      fetchData();
    }
  }, [mapField, pageParam, query]);

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all(
        filtersData?.map(async (post: any) => {
          const image = await getPhotos({ listingId: post?.ListingID });
          const bufferOriginal = Buffer.from(image[0].Photos.data);
          const cardImageUrl = JSON.parse(bufferOriginal.toString('utf8'))
            ?.LargePhoto?.filename;
          const location = {
            lat: parseFloat(post?.Latitude),
            lng: parseFloat(post?.Longitude),
          };
          return {
            post,
            cardImageUrl,
            location,
          };
        })
      );

      setPosts(data as any);
    }

    if (filtersData?.length > 0) {
      fetchData();
    }
  }, [filtersData]);

  const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapField(e.target.value);
    if (e.target.value.length > 0) {
      setSearchShow(true);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!mapField.length) {
        setSearchShow(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mapField]);

  UseClickOutside(domNode.current, () => {
    setSearchShow(false);
  });

  return (
    <section>
      <div className='container relative mx-auto mb-10'>
        <div className='container mx-auto mt-[10%] max-h-[500px] min-h-[250px] w-full px-5 md:max-w-[1400px] md:pb-10'>
          <div
            className='rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white  p-5  shadow'
            ref={domNode}
          >
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
                <div className='search flex w-3/4 items-center rounded border-2 bg-gray-200 px-3 py-1'>
                  <GrLocation className='mr-1 text-gray-400 ' />
                  <input
                    className='w-full border-none bg-gray-200 outline-none'
                    type='text'
                    placeholder='Enter business location'
                    onChange={handleMapChange}
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
                                className={`z-1000 flex ${
                                  filters.includes({
                                    name: element.name,
                                    value: element.value,
                                  })
                                    ? 'text-primary'
                                    : 'text-[#000000]'
                                } cursor-pointer items-center justify-between`}
                                onClick={() => {
                                  setFilters(() => [
                                    {
                                      name: element.name,
                                      value: element.value,
                                    },
                                  ]);
                                  handleSelect(element.value);
                                  setFilterDataShow(false);
                                }}
                              >
                                <p
                                  className={`  z-1000  px-4 py-2 text-[14px] `}
                                >
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
                        onClick={() => {
                          setLatitude(post?.Latitude);
                          setLongitude(post?.Longitude);
                        }}
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
      </div>
      <div className=''>
        <MapBox
          allPosts={posts}
          totalCount={count}
          lng={parseFloat(longitude)}
          lat={parseFloat(latitude)}
        />
      </div>
    </section>
  );
};

export default MapSearch;
