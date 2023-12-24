'use client';
import React, { useEffect, useState } from 'react';
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
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(null);
  const [alert, setAlert] = useState(false);
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

    const bodyData = JSON.stringify({
      fromEmail: 'noreply@savemaxbc.com',
      toEmail: 'admin@savemaxwestcoast.com',
      cc: 'keegan@cansoft.com, pulok@cansoft.com, huzaifa@cansoft.com',
      emailSubject: 'New Submission From' + '- ' + name,
      name: name || '',
      field: selected || '',
      mail: mail || '',
      phone: phone || '',
      message: message || '',
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: bodyData,
      });
      const data = await response.json();

      setSuccess(data.message);
      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setName('');
      setMail('');
      setPhone('');
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
    <div className=''>
      <section className='mt-5 py-10'>
        <div className='px-5 text-center md:px-10 xl:w-full'>
          <h2 className='text-center text-2xl md:text-3xl xl:text-4xl'>
            {contactData?.contactTitle}
          </h2>
          <div
            className='md:text-md  mx-auto mt-5 max-w-[1400px] px-5 text-center text-xs xl:text-xl'
            dangerouslySetInnerHTML={{
              __html: contactData?.contactDescription,
            }}
          ></div>
        </div>
        <div className='mx-auto mt-5 grid max-w-2xl items-center justify-center gap-4 md:mt-10 md:grid-cols-6 md:gap-0 xl:mx-0 xl:max-w-none'>
          <div className='col-span-6 col-start-1 col-end-6 ml-6 xl:col-span-3 xl:col-end-3 xl:ml-60'>
            <div className='col-span-6 col-start-1 col-end-4 '>
              <NextImage
                useSkeleton
                className='w-40 md:w-[250px] xl:w-[300px]'
                src={contactData?.contactImage?.sourceUrl}
                alt={contactData?.contactImage?.altText}
                width='500'
                height='200'
              />
            </div>
            <div className=''>
              <h2 className='w-full text-3xl md:w-full xl:w-[500px] xl:text-4xl'>
                {contactData?.heading}
              </h2>
              <p className='md:text-md mt-5 text-xs xl:text-xl'>
                Phone: {contactData?.phone}{' '}
              </p>
              <p className='md:text-md mt-5 text-xs xl:text-xl'>
                Email: {contactData?.email}
              </p>
              <p className='md:text-md mt-5 text-xs xl:text-xl'>
                {contactData?.addressOne}{' '}
              </p>
              <p className='md:text-md mt-5 text-xs xl:text-xl'>
                {contactData?.addressTwo}
              </p>
              <div className='mt-10 flex items-center justify-start gap-4'>
                <a href={contactData?.facebookLink}>
                  <BsFacebook className='h-7 w-7' />
                </a>
                <a href={contactData?.instagramLink}>
                  <FaInstagramSquare className='h-7 w-7' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-3 col-start-1 col-end-6 mt-5 md:col-span-3 md:col-start-1 md:col-end-6 xl:col-start-4 xl:col-end-7 xl:mt-0'>
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
                  required
                  name='name'
                  id='name'
                  className='w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
                  placeholder='Name'
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  onChange={(e) => handleChange(e, setMail)}
                  value={mail}
                  type='email'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
                  name='mail'
                  id='mail'
                  placeholder='Email address'
                  required
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  onChange={(e) => handleChange(e, setPhone)}
                  value={phone}
                  required
                  type='number'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
                  placeholder='Phone Number'
                  name='phone'
                  id='phone'
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <select
                  onChange={(e) => handleChange(e, setSelected)}
                  value={selected}
                  className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
                >
                  <option
                    className=' w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
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
                        value={a?.name}
                        className='w-full rounded border border-gray-400  text-[14px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
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
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
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
                className=' w-full rounded border border-gray-400 bg-[#061632]  py-1.5 text-[18px] text-white placeholder:text-[14px] hover:bg-white hover:text-[#061632] focus:border md:w-[600px]'
              >
                Send
              </button>
            </form>
            {alert && success && (
              <div
                className='mt-5 flex w-full items-center rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-800 md:w-[600px]'
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
                className='mt-5 flex w-full items-center rounded-lg border bg-red-300 p-4  text-sm text-red-700 md:w-[600px]'
                role='alert'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Info</span>
                <div>
                  <span className='font-medium'>Sorry! </span> Please fill all
                  the fields.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
