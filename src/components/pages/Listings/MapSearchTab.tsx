'use client';
import React, { useEffect, useRef, useState } from 'react';
import { GrLocation } from 'react-icons/gr';

import { getMapLocation } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import Scroll from '@/components/utils/Scroll';
import useQueryParams from '@/components/utils/useQueryParams';

const MapSearchTab = () => {
  const [mapField, setMapField] = useState(null || '');
  const domNode: any = useRef();
  const { setQueryParam } = useQueryParams();
  const [filtersData, setFiltersData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (mapField?.length > 0) {
      setQueryParam('query', mapField);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await getMapLocation({
        searchQuery: mapField,
        limit: 100,  // Adjust the limit based on your requirements
      });
      setFiltersData(result?.listings);
    };
    fetchData();
  }, [mapField]);

  const handleMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapField(e.target.value);
    if (e.target.value.length > 0) {
      setSearchShow(true);
    }
  };
  UseClickOutside(domNode.current, () => {
    setSearchShow(false);
  });

  return (
    <div className='container mx-auto my-10 w-full px-5 md:my-14 md:max-w-[1400px]'>
      <div
        className='mx-auto w-full rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-white p-3 shadow md:w-[600px] md:p-5'
        ref={domNode}
      >
        <div>
          <form
            onSubmit={(e: any) => handleSubmit(e)}
            className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2'
          >
            <div className='search flex w-[300px] items-center rounded border-2 bg-gray-200 px-3 py-1 md:w-[450px]'>
              <GrLocation className='mr-1 text-gray-400 ' />
              <input
                className='w-full border-none bg-gray-200 outline-none'
                type='text'
                placeholder='Enter search location'
                onChange={(e:any)=>handleMapChange(e)}
                value={mapField}
              />
            </div>
            <div className=''>
              <div
                onClick={handleSubmit}
                className='search flex w-[130px] cursor-pointer items-center justify-center rounded-[5px] border-2 bg-gray-900 px-3 py-3.5 text-center text-white'
              >
                <p className='text-md'>Search</p>
              </div>
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
                    key={idx}
                    className=''
                  >
                    <p onClick={(e:any) =>
                      {
                        setMapField(`${post?.StreetAddress}`);
                      }
                    } className='my-2 cursor-pointer px-5 text-[14px] text-[#082f49]'>
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

export default MapSearchTab;
