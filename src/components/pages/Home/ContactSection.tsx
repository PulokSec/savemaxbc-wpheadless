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
    <div className='bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Contact-form-bg.png")] bg-cover bg-center bg-no-repeat'>
      <section className='py-10'>
        <div className='px-5 text-center md:px-10 lg:w-full'>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
            {contactData?.contactTitle}
          </h2>
          <div
            className='md:text-md  mx-auto mt-5 max-w-[1400px] px-5 text-center text-xs lg:text-lg'
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
                <a href={contactData?.facebookLink}>
                  <BsFacebook className='h-7 w-7' />
                </a>
                <a href={contactData?.instagramLink}>
                  <FaInstagramSquare className='h-7 w-7' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-3 col-start-1 col-end-6 mt-5 md:col-span-3 md:col-start-1 md:col-end-6 lg:col-start-4 lg:col-end-7 lg:mt-0'>
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
                />
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  onChange={(e) => handleChange(e, setPhone)}
                  value={phone}
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
                className='mt-5 flex w-full items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800 md:w-[600px]'
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
          </div>
        </div>
      </section>
    </div>
  );
}
