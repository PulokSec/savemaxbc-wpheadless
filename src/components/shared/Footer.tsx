import { LucideMailOpen } from 'lucide-react';
import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdLocationCity, MdPhoneInTalk } from 'react-icons/md';

import NextImage from '@/components/NextImage';

import SavemaxLogo from '../../assets/header/Save-Max-Westcoast-Realty.png';
const navigation = [
  { name: 'Seller Guide', href: '#' },
  { name: 'Buyers Guide', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];
export default function Footer() {
  return (
    <div>
      <footer className="bg-[url('https://savemaxbc.com/wp-content/uploads/2023/09/footer.png')] bg-cover bg-right bg-no-repeat py-6">
        <div className='mx-auto mt-5 grid justify-center gap-4 py-6 md:mt-10 md:grid-cols-12'>
          <div className='col-start-l col-span-12 ml-6 md:col-start-2 md:col-end-4 md:ml-0'>
            <div className='w-full text-white'>
              <p className='flex w-full items-center justify-start md:text-3xl'>
                <span>Contact Info</span>
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <MdPhoneInTalk className='h-5 w-5 rotate-[30deg]' />
                </span>{' '}
                <span>+ 778-200-5050</span>{' '}
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <LucideMailOpen className='h-5 w-5' />
                </span>{' '}
                <span>support@swiftcourier.ca</span>
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <MdLocationCity className='h-5 w-5' />
                </span>{' '}
                <span>Unit 288, 12899 76 Avenue Surrey. BC. V3W1E6</span>
              </p>
              <div className='mt-10 flex items-center justify-start gap-4'>
                <BsFacebook className='h-5 w-5' />
                <AiOutlineInstagram className='h-5 w-5' />
                <AiOutlineTwitter className='h-5 w-5' />
              </div>
            </div>
          </div>
          <div className='md:cold-end-8 col-span-6 col-start-1 mb-6 ml-6 mt-5 md:col-span-2 md:col-start-7 md:ml-0 md:mt-0'>
            <p className='mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              Links
            </p>

            <ul className='mb-0 list-none'>
              {navigation.map((item) => (
                <li key={item.name} className='mb-2'>
                  <a
                    href={item.href}
                    className='text-neutral-600 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className='mb-0 list-none'>
              <li className='mb-2 ml-1 mt-10'>
                <a
                  href='#'
                  className='text-neutral-600 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 col-start-1 ml-6 md:col-span-3 md:col-start-10 md:col-end-12 md:ml-0'>
            <NextImage
              useSkeleton
              className='md:[250px] w-60 lg:w-[300px]'
              src={SavemaxLogo}
              width='500'
              height='200'
              alt='Icon'
            />
          </div>
        </div>
        <p className='md:text-md ml-6 mt-20 text-start text-sm text-white md:ml-40'>
          © {new Date().getFullYear()} SAVEMAX | DESIGN AND SEO BY CANSOFT
        </p>
      </footer>
    </div>
  );
}
