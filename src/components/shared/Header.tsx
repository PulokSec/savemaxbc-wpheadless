'use client';
import { Dialog } from '@headlessui/react';
import { ChevronDown, ChevronRight, Landmark, LayoutList, Mail, MapPin, Phone, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

import { getSearchQuery } from '@/lib/dataFetching';

import { UseClickOutside } from '@/components/custom-hooks/UseClickOutside';
import FilterModal from '@/components/shared/FilterModal';
import SearchModal from '@/components/shared/SearchModal';
import Scroll from '@/components/utils/Scroll';

type MyProps = {
  navigation: any;
  settingsData: any;
};
export default function Header(props: MyProps) {
  const [open, setOpen] = useState(false);
  const [listingOpen, setListingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { navigation, settingsData } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filtersData, setFiltersData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [submenuItemOpen, setSubmenuItemOpen] = useState(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const domNode: any = useRef();
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (searchField?.length > 0) {
      setMobileMenuOpen(false);
      setSearchShow(false);
      setOpenFilterModal(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const query= searchField;;
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


  const handleMouseEnter = (label: any) => {
    if (label === 'Listings') {
      setListingOpen(true);
    } else if (label === 'Services') {
      setServicesOpen(true);
    }
  };

  const handleMouseLeave = (label: any) => {
     if (label === 'Listings') {
      setListingOpen(false);
    } else if (label === 'Services') {
      setServicesOpen(false);
    }
  }

  // console.log('navigation', navigation);

  return (
    <>
      {modalOpen && (
        <SearchModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
      )}
      {openFilterModal && (
                <FilterModal
                  setModalOpen={setOpenFilterModal}
                  modalOpen={openFilterModal}
                  preInput={searchField}
                />
              )}
      <div className='top-0 z-50 w-full shadow'>
        <header className='max-w-screen bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/12/menu-bg.png")] bg-cover shadow-md'>
          <nav
            className='container mx-auto flex items-center justify-between py-3'
            aria-label='Global'
          >
            <div className='flex lg:flex-1'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Savemax</span>
                <Image
                  width='220'
                  height='75'
                  src={settingsData?.uploadLogo?.node?.sourceUrl}
                  alt={settingsData?.uploadLogo?.node?.altText}
                />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <HiMenu className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='hidden items-center justify-center lg:flex lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12'>
              {navigation?.map((item: any) => {
                if (item?.parentId === null) {
                  return (
                    <div key={item.label} className='relative'>
                      <div
                        onClick={() => router.push(item.url)}
                        onMouseEnter={() => handleMouseEnter(item?.label)}
                        onMouseLeave={() => {
                          setListingOpen(false);
                          setServicesOpen(false);
                        }}
                        className={`flex cursor-pointer items-center justify-center gap-1 text-lg font-bold leading-10 ${
                          item?.childItems?.nodes?.length > 0 && open
                            ? 'from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text  text-white hover:bg-gradient-to-r hover:text-transparent'
                            : 'from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text  text-white hover:bg-gradient-to-r hover:text-transparent'
                        }`}
                      >
                        {item.label}
                        {item?.childItems?.nodes?.length > 0 &&
                           (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='h-4 w-4 from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text  text-white hover:bg-gradient-to-r hover:text-transparent'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                              />
                            </svg>
                          )}
                      </div>
                      
                      {item?.label === 'Listings' && (
                        <ul
                          onMouseEnter={() => setListingOpen(true)}
                          onMouseLeave={() => setListingOpen(false)}
                          className={`absolute right-0 z-10 mt-0 flex w-40 mx-auto text-center flex-col rounded-lg bg-[#0D1524] py-2 shadow-xl ${
                            item?.childItems?.nodes?.length > 0 && listingOpen
                              ? 'block'
                              : 'hidden'
                          }`}
                        >
                          {item.childItems.nodes.map((submenu: any) => {
                            return (
                              <li
                        key={submenu.label}
                        className="w-40 relative"
                      >
                        <a
                          href={submenu.uri}
                          className="flex w-full items-center from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text px-3 py-2 text-sm  text-white hover:bg-gradient-to-r hover:text-transparent justify-between"
                        >
                          <p>{submenu.label}</p> 
                          {submenu.label === 'Map Search' && <MapPin className='mr-1 w-4 h-4 -mt-1 text-white' /> }
                          {submenu.label === 'Our Listings' && <LayoutList className='mr-1 w-4 h-4 -mt-1 text-white' />}
                          {submenu.label === 'MLS Listings' && <Landmark className='mr-1 w-4 h-4 -mt-1 text-white' />}
                           
                        </a>
                      </li>
                            );
                          })}
                        </ul>
                      )}
                      {item?.label === 'Services' && (
                        <ul
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => {setServicesOpen(false); setSubmenuItemOpen(null)}}
                          className={`absolute left-0 z-10 mt-0 flex w-52 flex-col rounded-lg bg-[#0D1524] py-2 shadow-xl ${
                            item?.childItems?.nodes?.length > 0 && servicesOpen
                              ? 'block'
                              : 'hidden'
                          }`}
                        >
                          {item.childItems.nodes.map((submenu: any) => {
                            return (
                            <li
                        key={submenu.label}
                        onMouseEnter={() => setSubmenuItemOpen(submenu.label)}
                        // onMouseLeave={() => setSubmenuItemOpen(null)}
                        className="w-52 relative"
                      >
                        <a
                          href={submenu.uri}
                          className="flex w-full items-center from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text px-3 py-2 text-sm  text-white hover:bg-gradient-to-r hover:text-transparent justify-between"
                        >
                          <p>{submenu.label}</p> {(submenu.label !== 'Seller Service' && submenu.label !== 'Commercial Sellers') && <ChevronRight className='mr-1 w-4 h-4 -mt-1 text-white' />}
                        </a>

                        {submenuItemOpen === submenu.label && (submenu.label !== 'Seller Service' && submenu.label !== 'Commercial Sellers') && (
                          <a href={submenu.label === 'First Time Home Buyer' ? '/properties-listing?transactionType=For%20Sale&priceMax=750000' : submenu.label === 'Commercial Buyers' ? '/properties-listing?transactionType=For%20Sale&propertyType=Business' : '/listing'}
                           className="absolute -right-[90px] top-0 z-10 bg-[#0D1524] text-sm rounded-lg py-2 px-4 text-white shadow-xl"
                          >
                             
                            <p className='from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-white hover:bg-gradient-to-r hover:text-transparent'>See Listing</p>
                          </a>
                        )}
                        
                        
                      </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                }
                return null;
              })}
              <a
                href='mailto:admin@savemaxwestcoast.com'
                className='text-lg font-bold leading-10'
              >
                <AiOutlineMail
                  className='h-5 w-5 text-white hover:text-[#ad782f]'
                  aria-hidden='true'
                />
              </a>
              <a
                href='tel:778-200-5050'
                className='text-lg font-bold leading-10'
              >
                <BsTelephone
                  className='h-5 w-5 text-white hover:text-[#ad782f]'
                  aria-hidden='true'
                />
              </a>
              <div
                onClick={() => setModalOpen(!modalOpen)}
                className='cursor-pointer'
              >
                <Search className='h-5 w-5 text-white hover:text-[#ad782f]' />
              </div>

              <Link href='/my-profile' className='cursor-pointer'>
                <FaUser className='h-5 w-5 text-white hover:text-[#ad782f]' />
              </Link>
            </div>
          </nav>
          <Dialog
            as='div'
            className='lg:hidden'
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className='fixed inset-0 z-50' />
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-center bg-[#0D1524] px-6 py-6'>
                <a href='/' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Save Max Westcoast Realty Inc</span>
                  <Image
                    width='400'
                    height='200'
                    src={settingsData?.uploadLogo?.node?.sourceUrl}
                    alt={settingsData?.uploadLogo?.node?.altText}
                  />
                </a>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <RxCross2 className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root px-6'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation?.map((item: any) => {
                      if (item?.parentId === null) {
                        return (
                          <div key={item.label} className='relative'>
                            <div className='flex items-center gap-x-2'>
                              <a
                                href={item.url}
                                className={`flex items-center justify-start gap-1 from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-lg  font-bold leading-7 text-gray-900  hover:bg-gray-50 hover:bg-gradient-to-r hover:text-transparent  ${
                                  item?.childItems?.nodes?.length > 0 && open
                                    ? 'from-[#eee38f] via-[#ad782f] to-[#dbc071]  bg-clip-text hover:bg-gradient-to-r hover:text-transparent'
                                    : 'text-gray-900'
                                }`}
                              >
                                {item.label}
                              </a>
                              {item?.childItems?.nodes?.length > 0 && (
                                    <div className='w-20 py-[6px]' 
                                      onMouseEnter={() => handleMouseEnter(item?.label)}
                                      onMouseLeave={() => handleMouseLeave(item?.label)}>
                                      <ChevronDown className='w-[18px] h-[18px] -mt-1' />
                                    </div>
                                )}
                            </div>

                            {item?.label !== 'Listings' && item.label !== 'Services' && item?.childItems?.nodes?.length > 0 && (
                              <div
                                onMouseEnter={() => setSubMenuOpen(true)}
                                onMouseLeave={() => setSubMenuOpen(false)}
                                className={`relative ${
                                  item?.childItems?.nodes?.length > 0 &&
                                  subMenuOpen
                                    ? 'block'
                                    : 'hidden'
                                }`}
                              >
                                {item.childItems.nodes.map((submenu: any) => {
                                  return (
                                    <a
                                      key={submenu.label}
                                      href={submenu.uri}
                                      className='flex items-center justify-start gap-1 from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-[15px] font-bold leading-7 text-gray-900  hover:bg-gray-50 hover:bg-gradient-to-r hover:text-transparent ml-2'
                                    >
                                      {submenu.label}
                                    </a>
                                  );
                                })}
                              </div>
                            )}
                            
                            {item?.label === 'Listings' && (
                              <div
                                onMouseEnter={() => setListingOpen(true)}
                                onMouseLeave={() => setListingOpen(false)}
                                className={`relative ${
                                  item?.childItems?.nodes?.length > 0 &&
                                  listingOpen
                                    ? 'block'
                                    : 'hidden'
                                }`}
                              >
                                {item.childItems.nodes.map((submenu: any) => {
                                  return (
                                    <a
                                      key={submenu.label}
                                      href={submenu.uri}
                                      className='flex items-center justify-start gap-1 from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-[15px] font-bold leading-7 text-gray-900  hover:bg-gray-50 hover:bg-gradient-to-r hover:text-transparent ml-2'
                                    >
                                      {submenu.label}
                                    </a>
                                  );
                                })}
                              </div>
                            )}
                            {item?.label === 'Services' && (
                              <div
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                                className={`relative ${
                                  item?.childItems?.nodes?.length > 0 &&
                                  servicesOpen
                                    ? 'block'
                                    : 'hidden'
                                }`}
                              >
                                {item.childItems.nodes.map((submenu: any) => {
                                  return (
                                    <div key={submenu.label} className='flex items-center gap-x-1'>
                                      <a
                                        key={submenu.label}
                                        href={submenu.uri}
                                        className='flex items-center justify-start gap-1 from-[#eee38f] via-[#ad782f] to-[#dbc071] bg-clip-text text-[15px] font-bold leading-7 text-gray-900  hover:bg-gray-50 hover:bg-gradient-to-r hover:text-transparent ml-2'
                                      >
                                        {submenu.label}
                                      </a>
                                      {(submenu.label !== 'Seller Service' && submenu.label !== 'Commercial Sellers') && (
                                        <a href={submenu.label === 'First Time Home Buyer' ? '/properties-listing?transactionType=For%20Sale&priceMax=750000' : submenu.label === 'Commercial Buyers' ? '/properties-listing?transactionType=For%20Sale&propertyType=Business' : '/listing'}
                                        className="pl-1 pr-2 flex items-center gap-x-1 font-medium hover:bg-gray-300 rounded-lg"
                                        >
                                          <ChevronRight className='w-4 h-4 -mt-[2px]' />
                                          <p className=''>Listing</p>
                                        </a>
                                      )}
                                    </div>
                                    
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return null;
                    })}
                    <Link
                      href='/my-profile'
                      className='hover:bg-100 ml-[2px] mt-2 flex h-10 w-auto items-center justify-start rounded-xl'
                      style={{ marginTop: '-100px!important' }}
                    >
                      <FaRegUser className='mr-2 h-5 w-5 text-[#061632] hover:text-[#ad782f]' />
                      <p className='text-[15px]'>Account</p>
                    </Link>
                    <a
                      href='mailto:admin@savemaxwestcoast.com'
                      className='hover:bg-100 ml-[2px] mt-2 flex h-10 w-auto items-center justify-start rounded-xl'
                    >
                      <Mail className='mr-2 h-5 w-5 text-[#061632] hover:text-[#ad782f] ' />
                      <p className='text-[15px]'>admin@savemaxwestcoast.com</p>
                    </a>
                    <a
                      href='tel:778-200-5050'
                      className='hover:bg-100 mb-12 ml-[2px] flex h-10 w-auto items-center justify-start rounded-xl'
                    >
                      <Phone className='mr-2 h-5 w-5 font-bold text-[#061632] hover:text-[#ad782f]' />
                      <p className='mt-1 text-[15px]'>778-200-5050</p>
                    </a>

                    <form
                      action=''
                      className='relative w-max rounded-full bg-gray-100'
                      onSubmit={(e:any) => handleSubmit(e)}
                    >
                      <input
                        type='search'
                        onChange={handleChange}
                        className='peer relative z-10 h-12 w-12 cursor-pointer rounded-full border border-transparent bg-transparent pl-0 outline-none focus:w-[300px] focus:cursor-text focus:border-yellow-300 focus:pl-16 focus:pr-4'
                      />
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='absolute inset-y-0 my-auto h-5 w-12 border-r border-transparent stroke-[#B48237]  focus:border-[#B48237] peer-focus:border-[#B48237] peer-focus:stroke-[#B48237]'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                      </svg>
                    </form>
                  </div>
                  {searchShow ? (
                    <div className='relative z-50 w-full overflow-hidden rounded-b-xl bg-white shadow focus:mt-[-20px]'>
                      {filtersData?.length > 0 ? (
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
                                    ).toLowerCase()}-${post?.PostalCode}-${
                                      post?.ListingID
                                    }`
                                  )
                                }
                                key={idx}
                                className=''
                              >
                                <p className='my-2 cursor-pointer px-5 text-[14px] text-[#082f49]'>
                                  {post?.StreetAddress} {post?.City}/
                                  {post?.Province}
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
                      )}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
}

