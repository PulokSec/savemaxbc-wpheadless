'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import Header from '@/components/shared/Header';
import Scroll from '@/components/utils/Scroll';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
};
export default function Banner(props: MyProps) {
  const { bannerData, headerData, settingsData } = props;
  const [filtersData, setFiltersData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const domNode: any = useRef();
  const router = useRouter();
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchField?.length > 0) {
      router.push(`/listing?query=${searchField}`);
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
    <div
      className='relative h-[80vh] w-full bg-cover bg-no-repeat md:h-[100vh]'
      style={{
        backgroundImage: `url(${bannerData?.bannerImage?.sourceUrl})`,
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto py-16'>
        <div className='mx-auto mt-[15%] flex w-full flex-col items-center justify-center px-5 text-center md:mt-[10%] md:px-10'>
          <p className='text-leading-3 text-lg font-black text-white md:text-5xl'>
            {bannerData?.bannerHeading}
          </p>
          <p className='text-leading-3 text-md mt-5 font-semibold text-white md:text-3xl'>
            {bannerData?.bannerSubtitle}
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <form
              onSubmit={(e) => handleSubmit(e)}
              ref={domNode}
              className='mt-3 flex flex-row items-center justify-center'
            >
              <input
                onClick={() => setSearchShow(true)}
                className='search h-[42px] w-full rounded-[1000px] px-5 text-[14px] drop-shadow-2xl placeholder:pb-4 placeholder:text-[12px] md:ml-10 md:h-[52px] md:w-[400px] lg:w-[487px] lg:text-[20px] lg:placeholder:text-[14px]'
                type='search'
                onChange={handleChange}
                placeholder='Search'
              />
              <button
                onClick={(e: any) => handleSubmit(e)}
                type='submit'
                className='border-bg-blue relative  right-[35px] cursor-pointer rounded-[50%] border bg-sky-950 p-3 md:right-[50px] md:p-4'
              >
                <GoSearch className=' text-white md:w-5' />
              </button>
            </form>
          </div>
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
                            {post?.StreetAddress} {post?.City}/{post?.Province}
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
          <div
            className='mt-8 text-center font-medium text-white'
            dangerouslySetInnerHTML={{
              __html: bannerData?.bannerDescription,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
