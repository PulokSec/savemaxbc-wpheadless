'use client';
import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

import NextImage from '@/components/NextImage';

const fields = [{ name: 'Buying' }, { name: 'Selling' }];

type MyProps = {
  contactData: any;
};

export default function ContactSection(props: MyProps) {
  const { contactData } = props;
  const [selected, setSelected] = useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFunction: (arg0: any) => void
  ) => {
    setFunction(event.target.value);
  };
  return (
    <div className='bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Contact-form-bg.png")] bg-cover bg-center bg-no-repeat'>
      <section className='py-10'>
        <div className='px-5 text-center md:px-10 lg:w-full'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
            {contactData?.contactTitle}
          </h2>
          <div
            className='md:text-md  mt-5 text-center  text-xs lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: contactData?.contactDescription,
            }}
          ></div>
        </div>
        <div className='mx-auto mt-5 grid max-w-2xl items-center justify-center gap-4 md:mt-10 md:grid-cols-6 md:gap-0 lg:mx-0 lg:max-w-none'>
          <div className='col-span-6 col-start-1 col-end-6 ml-6 lg:col-span-3 lg:col-end-3 lg:ml-60'>
            <div className='col-span-6 col-start-1 col-end-4 '>
              <NextImage
                useSkeleton
                className='w-40 md:w-[250px] lg:w-[300px]'
                src={contactData?.contactImage?.sourceUrl}
                alt={contactData?.contactImage?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className=''>
              <h2 className='w-full text-3xl md:w-full lg:w-[500px] lg:text-4xl'>
                {contactData?.heading}
              </h2>
              <p className='md:text-md mt-5 text-xs lg:text-lg'>
                Phone: {contactData?.phone}{' '}
              </p>
              <p className='md:text-md mt-5 text-xs lg:text-lg'>
                Email: {contactData?.email}
              </p>
              <p className='md:text-md mt-5 text-xs lg:text-lg'>
                {contactData?.addressOne}{' '}
              </p>
              <p className='md:text-md mt-5 text-xs lg:text-lg'>
                {contactData?.addressTwo}
              </p>
              <div className='mt-10 flex items-center justify-start gap-4'>
                <BsFacebook className='h-7 w-7' />
                <FaInstagramSquare className='h-7 w-7' />
              </div>
            </div>
          </div>
          <div className='col-span-3 col-start-1 col-end-6 mt-5 md:col-span-3 md:col-start-1 md:col-end-6 lg:col-start-4 lg:col-end-7 lg:mt-0'>
            <form className=''>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='text'
                  className='w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                  id='exampleInput90'
                  placeholder='Name'
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='email'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                  id='exampleInput91'
                  placeholder='Email address'
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='number'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                  placeholder='Phone Number'
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <select
                  onChange={(e) => handleChange(e, setSelected)}
                  value={selected}
                  className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                >
                  <option
                    className=' w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                    selected
                    value=''
                    disabled
                    hidden
                  >
                    Choose your Field
                  </option>
                  {fields?.map((a, idx) => {
                    return (
                      <option
                        key={idx}
                        className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                      >
                        {a?.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <textarea
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-sky-950 focus:outline-none md:w-[600px]'
                  id='exampleFormControlTextarea1'
                  rows={3}
                  placeholder='Your message'
                ></textarea>
              </div>

              <button
                type='button'
                data-te-ripple-init
                data-te-ripple-color='light'
                className=' w-full rounded border border-gray-400 bg-sky-950  py-1.5 text-[18px] text-white placeholder:text-[14px] hover:bg-white hover:text-sky-950 focus:border md:w-[600px]'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
