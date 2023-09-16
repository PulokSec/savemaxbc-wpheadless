import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
// import { BsFacebook } from 'react-icons/bs';
// import { BsInstagram } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

import SavemaxLogo from '../../assets/header/Save-Max-Westcoast-Realty.png';

const navigation = [
  { name: 'Seller Guide', href: '#' },
  { name: 'Buyers Guide', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='container'>
      <header className='z-50 w-screen bg-[url("https://savemaxbc.com/wp-content/uploads/2023/09/menu-bg.png")] bg-cover shadow-md'>
        <nav
          className='flex items-center justify-between px-10 py-3 lg:px-[200px]'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Savemax</span>
              <Image
                width='220'
                height='75'
                src={SavemaxLogo}
                alt='header-logo'
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
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='textlg font-bold leading-10 text-white'
              >
                {item.name}
              </a>
            ))}
            <a href='#' className='text-lg font-bold leading-10 text-white'>
              <AiOutlineMail className='h-5 w-5' aria-hidden='true' />
            </a>
            <a href='#' className='text-lg font-bold leading-10 text-white'>
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
                  src={SavemaxLogo}
                  alt='header-logo'
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href='#'
                    className='mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    <AiOutlineMail className='h-5 w-5' aria-hidden='true' />
                  </a>
                  <a
                    href='#'
                    className='mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
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
