'use client';
import { Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

import ContactForm from '@/components/pages/Contact/ContactForm';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Footer from '@/components/shared/Footer';

const fields = [{ name: 'Buying' }, { name: 'Selling' }, { name: 'Other' }];
const fields2 = [
  { name: 'Commercial' },
  { name: 'Single Family' },
  { name: 'Townhome' },
  { name: 'Condo' },
  { name: 'Other' },
];

type MyProps = {
  allData: any;
};
export default function ContactPageLanding(props: MyProps) {
  const { allData } = props;
  const [selected, setSelected] = useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFunction: (arg0: any) => void
  ) => {
    setFunction(event.target.value);
  };

  // console.log('bg', allData?.pages?.nodes[0]?.contactUs?.background?.sourceUrl);
  return (
    <main>
      <BannerWithButton
        bannerData={allData?.pages?.nodes[0]?.contactUs?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />

      <div
        className='bg-cover bg-no-repeat '
        style={{
          backgroundImage: `url(${allData?.pages?.nodes[0]?.contactUs?.background?.sourceUrl})`,
        }}
      >
        <div className=' py-20'>
          <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
            {allData?.pages?.nodes[0]?.contactUs?.title1}
          </h2>
          <div
            className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: allData?.pages?.nodes[0]?.contactUs?.description1,
            }}
          ></div>
        </div>
        <ContactForm
          fields={fields}
          phone={allData?.pages?.nodes[0]?.contactUs?.phone}
          email={allData?.pages?.nodes[0]?.contactUs?.email}
          address={allData?.pages?.nodes[0]?.contactUs?.address}
          heading={true}
        />
        <div className=' py-20'>
          <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
            {allData?.pages?.nodes[0]?.contactUs?.title2}
          </h2>
          <div
            className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: allData?.pages?.nodes[0]?.contactUs?.description2,
            }}
          ></div>
        </div>
        <div className='mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-5 p-5 pb-10 md:flex-row lg:gap-10'>
          <div className='mx-auto md:w-1/2'>
            <form className='pt-2'>
              <div className=' mb-3' data-te-input-wrapper-init>
                <input
                  type='text'
                  className='w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                  id='exampleInput90'
                  placeholder='Name'
                />
              </div>
              <div className=' mb-3' data-te-input-wrapper-init>
                <input
                  type='email'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                  id='exampleInput91'
                  placeholder='Email address'
                />
              </div>
              <div className='relative mb-3' data-te-input-wrapper-init>
                <input
                  type='number'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                  placeholder='Phone Number'
                />
              </div>
              <div className='relative mb-3' data-te-input-wrapper-init>
                <select
                  onChange={(e) => handleChange(e, setSelected)}
                  value={selected}
                  className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                >
                  <option
                    className=' w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                    selected
                    value=''
                    disabled
                    hidden
                  >
                    Choose your Field
                  </option>
                  {fields2?.map((a, idx) => {
                    return (
                      <option
                        key={idx}
                        className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                      >
                        {a?.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className=' mb-3' data-te-input-wrapper-init>
                <textarea
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[350px] lg:w-[400px] xl:w-[600px]'
                  id='exampleFormControlTextarea1'
                  rows={3}
                  placeholder='Your message'
                ></textarea>
              </div>

              <button
                type='button'
                data-te-ripple-init
                data-te-ripple-color='light'
                className=' w-full rounded border border-gray-400 bg-sky-950  py-1.5 text-[18px] text-white placeholder:text-[14px] hover:bg-white hover:text-sky-950 focus:border md:w-[350px] lg:w-[400px] xl:w-[600px]'
              >
                Send Message
              </button>
            </form>
          </div>
          <div className='mx-auto mt-5 flex flex-col items-center md:mt-0 md:w-1/2 md:items-end'>
            <h2 className='uppercase text-gray-800'>Connect</h2>
            <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
              Phone:{' '}
              <a href={`tel:${allData?.pages?.nodes[0]?.contactUs?.phone}`}>
                {allData?.pages?.nodes[0]?.contactUs?.phone}
              </a>
            </p>
            <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
              Email:{' '}
              <a href={`mailto:${allData?.pages?.nodes[0]?.contactUs?.email}`}>
                {allData?.pages?.nodes[0]?.contactUs?.email}
              </a>
            </p>
            <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
              Address:{' '}
              <a
                href='https://maps.app.goo.gl/YVWPgcZgGzkoat7W7'
                target='_blank'
                className=''
              >
                {allData?.pages?.nodes[0]?.contactUs?.address}
              </a>
            </p>

            <div className='mt-5 flex items-center justify-start gap-4'>
              <a
                href='https://www.facebook.com/SMWestcoastRealty'
                target='_blank'
              >
                <Facebook className='h-7 w-7 hover:opacity-70' />
              </a>
              <a
                href='https://www.instagram.com/savemaxwestcoast/'
                target='_blank'
              >
                <Instagram className='h-7 w-7 hover:opacity-70' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
