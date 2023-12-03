import { Facebook, Instagram } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  fields: any;
  phone: any;
  email: any;
  address: any;
  heading: boolean;
};

const ContactForm = (props: Props) => {
  const { fields, phone, email, address, heading } = props;
  const [selected, setSelected] = useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFunction: (arg0: any) => void
  ) => {
    setFunction(event.target.value);
  };
  return (
    <div className='mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-5 p-5 pb-10 md:flex-row lg:gap-10'>
      <div className='mx-auto flex flex-col items-center md:w-1/2 md:items-start'>
        {heading && <h2 className='uppercase text-gray-800'>Connect</h2>}
        <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
          Address:{' '}
          <a
            href='https://maps.app.goo.gl/YVWPgcZgGzkoat7W7'
            target='_blank'
            className=''
          >
            {address}
          </a>
        </p>

        <div className='mt-5 flex items-center justify-start gap-4'>
          <a href='https://www.facebook.com/SMWestcoastRealty' target='_blank'>
            <Facebook className='h-7 w-7 hover:opacity-70' />
          </a>
          <a href='https://www.instagram.com/savemaxwestcoast/' target='_blank'>
            <Instagram className='h-7 w-7 hover:opacity-70' />
          </a>
        </div>
      </div>
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
              {fields?.map((a: any, idx: number) => {
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
    </div>
  );
};

export default ContactForm;
