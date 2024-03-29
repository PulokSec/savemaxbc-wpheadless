'use client';
import { Facebook, Instagram } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import ButtonLoader from '@/components/pages/Contact/ButtonLoader';

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
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [success, setSuccess] = useState(null);
  const [alert, setAlert] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const handleChange = (event: any, setFunction: (arg0: any) => void) => {
    setFunction(event.target.value);
  };
  const sendEmail = async (e: {
    preventDefault: () => void;
    target: { reset: () => void };
  }) => {
    e.preventDefault();
    if (name.length < 1 || mail.length < 5 || phone.length < 8) {
      setAlert(true);
      setSuccess(null);
      return;
    }
    setBtnLoader(true);
    const bodyData = JSON.stringify({
      fromEmail: 'noreply@savemaxbc.com',
      toEmail: 'admin@savemaxwestcoast.com',
      cc: '',
      emailSubject: 'New Submission From' + '- ' + name,
      name: name || '',
      field: selected || '',
      mail: mail || '',
      phone: number || '',
      message: message || '',
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: bodyData,
      });
      const data = await response.json();
      setSuccess(data.message);
      setBtnLoader(false);
    } catch (error) {
      setBtnLoader(false);
      console.log(error);
    } finally {
      setName('');
      setMail('');
      setNumber('');
      setMessage('');
      setSelected('');
      setAlert(true);
    }
  };
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);
  return (
    <div className='mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-5 p-5 pb-10 md:flex-row lg:gap-10'>
      <div className='mx-auto flex flex-col items-center md:w-1/2 md:items-start'>
        {heading && <h2 className='uppercase text-gray-800'>Connect</h2>}
        <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p className='md:text-md mt-[10px] text-xs hover:text-[#B48237] md:mt-5 lg:text-lg'>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className='md:text-md mt-[10px] text-xs hover:text-[#B48237] md:mt-5 lg:text-lg'>
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
        <form
          className=''
          onSubmit={(e: any) => sendEmail(e)}
          id='contact-form'
        >
          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              onChange={(e) => handleChange(e, setName)}
              value={name}
              type='text'
              name='name'
              id='name'
              className='w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
              placeholder='Name'
              required
            />
          </div>
          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              onChange={(e) => handleChange(e, setMail)}
              value={mail}
              type='email'
              className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
              name='mail'
              id='mail'
              placeholder='Email address'
              required
            />
          </div>
          <div className='relative mb-6' data-te-input-wrapper-init>
            <input
              onChange={(e) => handleChange(e, setNumber)}
              value={number}
              type='number'
              className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
              placeholder='Phone Number'
              name='phone'
              id='phone'
              required
            />
          </div>
          <div className='relative mb-6' data-te-input-wrapper-init>
            <select
              onChange={(e) => handleChange(e, setSelected)}
              value={selected}
              className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
            >
              <option
                className=' w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
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
                    value={a?.name}
                    className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
                  >
                    {a?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='relative mb-6' data-te-input-wrapper-init>
            <textarea
              onChange={(e) => handleChange(e, setMessage)}
              value={message}
              className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none lg:w-[450px] xl:w-[600px]'
              name='message'
              id='message'
              rows={3}
              placeholder='Your message'
            ></textarea>
          </div>

          <button
            onClick={(e: any) => sendEmail(e)}
            type='submit'
            data-te-ripple-init
            data-te-ripple-color='light'
            className=' w-full rounded border border-gray-400 bg-[#061632]  py-1.5 text-[18px] text-white placeholder:text-[14px] hover:bg-white hover:text-[#061632] focus:border lg:w-[450px] xl:w-[600px]'
          >
            {btnLoader ? (
              <>
                <ButtonLoader text='Sending...' />
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {alert && success && (
          <div
            className='mt-5 flex w-full items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800 lg:w-[450px] xl:w-[600px]'
            role='alert'
          >
            <svg
              className='me-3 inline h-4 w-4 flex-shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
            </svg>
            <span className='sr-only'>Info</span>
            <div>
              <span className='font-medium'>Success!</span> Thanks for
              contacting us, we will get back to you.
            </div>
          </div>
        )}
        {alert && !success && (
          <div
            className='mt-5 flex w-full items-center rounded-lg border bg-red-300 p-4 text-sm text-red-700 lg:w-[450px] xl:w-[600px]'
            role='alert'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
                clip-rule='evenodd'
              />
            </svg>
            <span className='sr-only'>Info</span>
            <div>
              <span className='font-medium'>Sorry! </span> Please fill all the
              fields.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
