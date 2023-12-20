'use client';
import { Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    e.preventDefault();
  };
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

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
        <div className='pb-20 pt-8 md:py-20'>
          <h2
            className='px-10 text-center text-2xl  md:text-3xl lg:text-5xl'
            dangerouslySetInnerHTML={{
              __html: allData?.pages?.nodes[0]?.contactUs?.title1,
            }}
          ></h2>
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
        <div className='pb-10 pt-20 md:py-20'>
          <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-5xl'>
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
                  required
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
                  type='number'
                  className=' w-full rounded border border-gray-400  text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[600px]'
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
                  {fields2?.map((a, idx) => {
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
            {alert && !success && (
              <div
                className='mt-5 flex w-full items-center rounded-lg border bg-red-300 p-4 text-sm text-red-700 md:w-[600px]'
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
          <div className='mx-auto mt-5 flex flex-col items-center md:mt-0 md:w-1/2 md:items-end'>
            <h2 className='uppercase text-gray-800'>Connect</h2>
            <p className='md:text-md mt-5 text-xs hover:text-[#B48237] lg:text-lg'>
              Phone:{' '}
              <a href={`tel:${allData?.pages?.nodes[0]?.contactUs?.phone}`}>
                {allData?.pages?.nodes[0]?.contactUs?.phone}
              </a>
            </p>
            <p className='md:text-md mt-[10px] text-xs hover:text-[#B48237] md:mt-5 lg:text-lg'>
              Email:{' '}
              <a href={`mailto:${allData?.pages?.nodes[0]?.contactUs?.email}`}>
                {allData?.pages?.nodes[0]?.contactUs?.email}
              </a>
            </p>
            <p className='md:text-md mt-[10px] text-xs hover:text-[#B48237] md:mt-5 lg:text-lg'>
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
