import { LucideMailOpen } from 'lucide-react';
import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdLocationCity, MdPhoneInTalk } from 'react-icons/md';

import NextImage from '@/components/NextImage';

type MyProps = {
  navigation: any;
  settingsData: any;
};
export default function Footer(props: MyProps) {
  const { navigation, settingsData } = props;
  return (
    <div>
      <footer className="bg-[url('https://savemaxbc.com/wp-content/uploads/2023/09/footer.png')] bg-cover bg-right bg-no-repeat py-6">
        <div className='mx-auto mt-5 grid justify-center gap-4 py-6 md:mt-10 md:grid-cols-12'>
          <div className='col-start-l col-span-12 ml-6 md:col-span-12 md:col-start-1 lg:col-start-2 lg:col-end-4 lg:ml-0'>
            <div className='w-full text-white'>
              <p className='flex w-full items-center justify-start md:text-3xl'>
                <span>{settingsData?.footerLeftWidget?.title}</span>
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <MdPhoneInTalk className='h-5 w-5 rotate-[30deg]' />
                </span>{' '}
                <span>{settingsData?.footerLeftWidget?.phone}</span>{' '}
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <LucideMailOpen className='h-5 w-5' />
                </span>{' '}
                <span>{settingsData?.footerLeftWidget?.emailAddress}</span>
              </p>
              <p className='mt-5 flex items-center justify-start gap-4 text-xs md:text-lg'>
                <span>
                  <MdLocationCity className='h-5 w-5' />
                </span>{' '}
                <span>{settingsData?.footerLeftWidget?.address}</span>
              </p>
              <div className='mt-10 flex items-center justify-start gap-4'>
                <BsFacebook className='h-5 w-5' />
                <AiOutlineInstagram className='h-5 w-5' />
                <AiOutlineTwitter className='h-5 w-5' />
              </div>
            </div>
          </div>
          <div className='lg:cold-end-8 col-span-6 col-start-1 mb-6 ml-6 mt-5 md:col-span-12 md:col-start-1 lg:col-span-2 lg:col-start-7 lg:ml-0 lg:mt-0'>
            <p className='mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200'>
              Links
            </p>

            <ul className='mb-0 list-none'>
              {navigation?.map((item: any) => (
                <li key={item?.label} className='mb-2'>
                  <a
                    href={item?.url}
                    className='uppercase text-neutral-600 hover:text-[#B48237] dark:text-neutral-300'
                  >
                    {item?.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className='mb-0 list-none'>
              <li className='mb-2 ml-1 mt-10'>
                <a
                  href='#'
                  className='text-neutral-600 hover:text-[#B48237] dark:text-neutral-300 '
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-6 col-start-1 ml-6 md:col-span-12 md:col-start-1 lg:col-span-3 lg:col-start-10 lg:col-end-12 lg:ml-0'>
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
        <p className='md:text-md ml-6 mt-20 text-start text-sm text-white md:ml-40'>
          © {new Date().getFullYear()} {settingsData?.copyrightText}
        </p>
      </footer>
    </div>
  );
}
