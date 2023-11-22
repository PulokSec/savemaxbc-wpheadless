'use client';
import { LucideMailOpen } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdLocationCity, MdPhoneInTalk } from 'react-icons/md';

import NextImage from '@/components/NextImage';

type MyProps = {
  navigation: any;
  settingsData: any;
};
export default function Footer(props: MyProps) {
  const [open, setOpen] = useState(false);
  const { navigation, settingsData } = props;
  console.log('nav  ', navigation);
  return (
    <div>
      <footer className="bg-[url('https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/11/footer.png')] bg-cover bg-right bg-no-repeat py-6">
        <div className='mx-auto mt-5 grid justify-center gap-4 py-6 md:mt-10 md:grid-cols-12'>
          <div className='col-start-l col-span-12 ml-6 md:col-span-12 md:col-start-4 lg:col-start-2 lg:col-end-4 lg:ml-0'>
            <div className='w-full text-white'>
              <p className='flex w-full items-center justify-start md:text-3xl'>
                <span>{settingsData?.footerLeftWidget?.title}</span>
              </p>
              <p className='mt-5 flex cursor-pointer items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <MdPhoneInTalk className='h-5 w-5 rotate-[30deg]' />
                </span>{' '}
                <a href={`tel:${settingsData?.footerLeftWidget?.phone}`}>
                  {settingsData?.footerLeftWidget?.phone}
                </a>{' '}
              </p>
              <p className='mt-5 flex cursor-pointer items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <LucideMailOpen className='h-5 w-5' />
                </span>{' '}
                <a
                  href={`mailto:${settingsData?.footerLeftWidget?.emailAddress}`}
                >
                  {settingsData?.footerLeftWidget?.emailAddress}
                </a>
              </p>
              <Link
                href='https://maps.app.goo.gl/YVWPgcZgGzkoat7W7'
                target='_blank'
                className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'
              >
                <span>
                  <MdLocationCity className='h-5 w-5' />
                </span>{' '}
                <span>{settingsData?.footerLeftWidget?.address}</span>
              </Link>
              <div className='mt-10 flex items-center justify-start gap-4'>
                <Link
                  href='https://www.facebook.com/SMWestcoastRealty'
                  target='_blank'
                >
                  <BsFacebook className='h-5 w-5' />
                </Link>
                <Link
                  href='https://www.instagram.com/savemaxwestcoast/'
                  target='_blank'
                >
                  <AiOutlineInstagram className='h-5 w-5' />
                </Link>
                <Link href='/'>
                  <AiOutlineTwitter className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </div>
          <div className=' col-span-6 col-start-1 mb-6 ml-6 mt-5 md:col-span-12 md:col-start-4 lg:col-span-3 lg:col-start-6 lg:col-end-7 lg:ml-0 lg:mt-0'>
            <p className='mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              Resources
            </p>

            <ul className='mb-0 list-none'>
              {navigation?.map(
                (item: any) =>
                  item?.parentId === null &&
                  item?.label !== 'Services' && (
                    <li key={item?.label} className='mb-2'>
                      <a
                        href={item?.url}
                        className='uppercase text-neutral-600 hover:text-[#B48237] dark:text-neutral-300'
                      >
                        {item?.label}
                      </a>
                    </li>
                  )
              )}
              <li className='mb-2'>
                <a
                  href='/faq'
                  className='text-neutral-600 hover:text-[#B48237] dark:text-neutral-300 '
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 col-start-1 mb-6 ml-6 mt-5 md:col-span-12 md:col-start-4 lg:col-span-2 lg:col-start-8 lg:col-end-10 lg:ml-0 lg:mt-0'>
            <p className='mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              Services
            </p>
            <ul className='mb-0 list-none'>
              {navigation?.map(
                (item: any) =>
                  item?.parentId !== null &&
                  item?.label !== 'Services' && (
                    <li key={item?.label} className='mb-2'>
                      <a
                        href={item?.url}
                        className='uppercase text-neutral-600 hover:text-[#B48237] dark:text-neutral-300'
                      >
                        {item?.label}
                      </a>
                    </li>
                  )
              )}
              
            </ul>
          </div>
          <div className='col-span-6 col-start-1 ml-6 md:col-span-12 md:col-start-4 lg:col-span-3 lg:col-start-10 lg:col-end-12 lg:ml-0'>
            <NextImage
              useSkeleton
              className='md:[250px] w-60 lg:w-[300px]'
              src={settingsData?.footerLogoSection?.logoUpload?.sourceUrl}
              alt={settingsData?.footerLogoSection?.logoUpload?.altText}
              width='500'
              height='200'
            />
          </div>
        </div>
        <div>
          <Link
            href='https://cansoft.com/'
            target='_blank'
            className='md:text-md ml-6 mt-20 text-start text-sm text-white md:ml-40'
          >
            © {new Date().getFullYear()} {settingsData?.copyrightText}
          </Link>
        </div>
      </footer>
    </div>
  );
}
