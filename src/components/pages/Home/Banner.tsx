import React from 'react';
import { GoSearch } from 'react-icons/go';

import Header from '@/components/shared/Header';
export default function Banner() {
  return (
    <div
      className=' h-[80vh] w-full md:h-[100vh]'
      style={{
        backgroundImage:
          "url('https://savemaxbc.com/wp-content/uploads/2023/09/landing_page.jpg')",
        position: 'relative',
        height: '100vh',
        width: '100%',
        clipPath: 'inset(0 0 0 0)',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto mt-[50%] flex w-full flex-col items-center justify-center text-center md:mt-[20%]'>
          <p className='text-leading-3 text-lg font-bold text-white md:text-5xl'>
            TOP REALTORS IN BC :
          </p>
          <p className='text-leading-3 text-md mt-5 text-white md:text-3xl'>
            BUY OR SELL YOUR HOMES WITH OUR EXPERT AGENTS
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <form
              // onSubmit={() => {
              //   dispatch(setSearchQuery(searchField));
              //   router.push(`/search`);
              // }}
              // ref={domNode}
              // style={style}
              className='mt-3 flex flex-row items-center justify-center'
            >
              <input
                // onClick={() => setSearchShow(true)}
                className='search h-[42px] w-full rounded-[1000px] px-5 text-[14px] drop-shadow-2xl placeholder:pb-4 placeholder:text-[12px] md:h-[52px]  md:w-[487px] md:text-[20px] md:placeholder:text-[14px]'
                type='search'
                // onChange={handleChange}
                // defaultValue={search?.name || ""}
                placeholder='Search'
              />
              <span className='border-bg-blue relative  right-[35px] rounded-[50%] border bg-sky-950 p-3 md:right-[50px] md:p-4'>
                <GoSearch className=' text-white md:w-5' />
              </span>
              {/* {searchShow && (
        <Scroll
          style={{
            height: "30vh",
            boxShadow: "0px 4px 15px rgba(125, 35, 224, 0.2)",
          }}
          className="overflow-y-scroll "
        >
          {filteredItems.length > 0 ? (
            <>
              {filteredItems.map((item, index) => (
                <Card key={index} currentValue={item} />
              ))}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              No matched Courses or Institutions
            </div>
          )}
        </Scroll>
      )} */}
            </form>
          </div>
          <div className='mt-8 text-center text-white'>
            <p className='text-md'>
              Save Max provides all the active listings in Canada.
            </p>
            <p className='text-md'>
              You can find your perfect property with a click of a button
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}