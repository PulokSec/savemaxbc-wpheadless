'use client';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

type MyProps = {
  navigation: any;
  settingsData: any;
};
export default function Header(props: MyProps) {
  const [open, setOpen] = useState(false);
  const { navigation, settingsData } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-dark fixed top-0 z-50 w-full shadow'>
      <header className='max-w-screen bg-[url("https://savemaxbc.com/wp-content/uploads/2023/09/menu-bg.png")] bg-cover shadow-md'>
        <nav
          className='flex items-center justify-between px-10 py-3'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Savemax</span>
              <Image
                width='220'
                height='75'
                src={settingsData?.uploadLogo?.sourceUrl}
                alt={settingsData?.uploadLogo?.altText}
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <HiMenu className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden items-center justify-center lg:flex lg:gap-x-12'>
            {navigation?.map((item: any) => {
              if (item?.parentId === null) {
                return (
                  <div key={item.label} className='relative'>
                    <a
                      href={item.url}
                      onMouseEnter={() =>
                        item?.childItems?.nodes?.length > 0
                          ? setOpen(true)
                          : setOpen(false)
                      }
                      className={`flex items-center justify-center gap-1 text-lg font-bold leading-10  hover:text-[#B48237] ${
                        item?.childItems?.nodes?.length > 0 && open
                          ? 'text-[#B48237]'
                          : 'text-white'
                      }`}
                    >
                      {item.label}
                      {item?.childItems?.nodes?.length > 0 && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                          />
                        </svg>
                      )}
                    </a>
                    <ul
                      onMouseEnter={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                      className={`absolute right-0 z-10 mt-2 flex w-40 flex-col rounded-lg bg-[#0D1524] py-2 shadow-xl ${
                        item?.childItems?.nodes?.length > 0 && open
                          ? 'block'
                          : 'hidden'
                      }`}
                    >
                      {item.childItems.nodes.map((submenu: any) => {
                        return (
                          <a
                            key={submenu.label}
                            href={submenu.uri}
                            className='"flex hover:bg-gray-100" w-full items-center px-3 py-2 text-sm text-white hover:text-[#B48237]'
                          >
                            {submenu.label}
                          </a>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
            <a
              href='#'
              className='text-lg font-bold leading-10 text-white hover:text-[#B48237]'
            >
              <AiOutlineMail className='h-5 w-5' aria-hidden='true' />
            </a>
            <a
              href='#'
              className='text-lg font-bold leading-10 text-white hover:text-[#B48237]'
            >
              <BsTelephone className='h-5 w-5' aria-hidden='true' />
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-center'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  width='400'
                  height='200'
                  src={settingsData?.uploadLogo?.sourceUrl}
                  alt={settingsData?.uploadLogo?.altText}
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
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation?.map((item: any) => {
                    if (item?.parentId === null) {
                      return (
                        <div key={item.label} className='relative'>
                          <a
                            href={item.url}
                            onMouseEnter={() =>
                              item?.childItems?.nodes?.length > 0
                                ? setOpen(true)
                                : setOpen(false)
                            }
                            className={`flex items-center justify-start gap-1 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50  hover:text-[#B48237] ${
                              item?.childItems?.nodes?.length > 0 && open
                                ? 'text-[#B48237]'
                                : 'text-gray-900'
                            }`}
                          >
                            {item.label}
                            {item?.childItems?.nodes?.length > 0 && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='h-4 w-4'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                />
                              </svg>
                            )}
                          </a>
                          <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className={`relative ${
                              item?.childItems?.nodes?.length > 0 && open
                                ? 'block'
                                : 'hidden'
                            }`}
                          >
                            {item.childItems.nodes.map((submenu: any) => {
                              return (
                                <a
                                  key={submenu.label}
                                  href={submenu.uri}
                                  className='flex items-center justify-start gap-1 text-lg font-bold leading-7 text-gray-900 hover:bg-gray-50  hover:text-[#B48237]'
                                >
                                  {submenu.label}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                  <a
                    href='#'
                    className=' block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    <AiOutlineMail className='h-5 w-5' aria-hidden='true' />
                  </a>
                  <a
                    href='#'
                    className='block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    <BsTelephone className='h-5 w-5' aria-hidden='true' />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
