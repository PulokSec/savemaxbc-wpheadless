'use client';
import axios from 'axios';
import React, { useState } from 'react';

import useAuth from '@/components/custom-hooks/useAuth';
import ButtonLoader from '@/components/pages/Contact/ButtonLoader';

const QuestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [questionTitle, setQuestionTitle] = useState('');
  const [question, setQuestion] = useState('');
  const { loggedIn } = useAuth();
  const [submitClicked, setSubmitClicked] = useState(false);
  const [success, setSuccess] = useState(null);
  const [alert, setAlert] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: { reset: () => void };
  }) => {
    e.preventDefault();
    setSubmitClicked(true);
    if (loggedIn) {
      if (
        name.length < 1 ||
        email.length < 5 ||
        questionTitle.length < 1 ||
        question.length < 1
      ) {
        setAlert(true);
        setSuccess(null);
        return;
      }
      setBtnLoader(true);
      const bodyData = new FormData();
      bodyData.set('fromEmail', 'noreply@savemaxbc.com');
      bodyData.set('toEmail', 'admin@savemaxwestcoast.com');
      bodyData.set('cc', '');
      bodyData.set('emailSubject', 'New Query From' + '- ' + name);
      bodyData.set('name', name);
      bodyData.set('mail', email);
      bodyData.set('title', questionTitle);
      bodyData.set('message', question);
      try {
        const post_config = {
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/api/v1/add-all-query/`,
          data: bodyData,
        };
        const mail_config = {
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_BASEURL}/api/send-email`,
          data: bodyData,
          headers: { 'Content-Type': 'multipart/form-data' },
        };
        const email_response = await axios(mail_config);
        const post_response = await axios(post_config);
        setSuccess(email_response?.data.message);
        setBtnLoader(false);
        // e.target.reset();
      } catch (error) {
        setBtnLoader(false);
        console.log(error);
      } finally {
        setName('');
        setEmail('');
        setQuestionTitle('');
        setQuestion('');
        setAlert(true);
      }
    }
  };
  return (
    <div>
      <div className='mx-auto my-20 max-w-[1200px] px-3'>
        <form
          className='mt-14 flex flex-col items-center justify-center'
          onSubmit={(e: any) => handleSubmit(e)}
        >
          <div className='mb-6'>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              name='name'
              id='name'
              className='w-[320px] rounded border border-gray-400 text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[450px] xl:w-[600px]'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              className='w-[320px] rounded border border-gray-400 text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[450px] xl:w-[600px]'
              name='email'
              id='email'
              placeholder='Email Address'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              onChange={(e) => setQuestionTitle(e.target.value)}
              value={questionTitle}
              type='text'
              className='w-[320px] rounded border border-gray-400 text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[450px] xl:w-[600px]'
              placeholder='Question Title'
              name='question-title'
              id='question-title'
              required
            />
          </div>

          <div className='mb-4'>
            <textarea
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              className='w-[320px] rounded border border-gray-400 text-[18px] placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none md:w-[450px] xl:w-[600px]'
              name='question'
              id='question'
              rows={3}
              placeholder='Your Question'
            ></textarea>
          </div>

          <button
            onClick={(e: any) => handleSubmit(e)}
            type='submit'
            data-te-ripple-init
            data-te-ripple-color='light'
            className='w-[320px] rounded border border-gray-400 bg-[#061632] py-1.5 text-[18px] text-white placeholder:text-[14px] hover:bg-white hover:text-[#061632] focus:border md:w-[450px] xl:w-[600px]'
          >
            {btnLoader ? (
              <>
                <ButtonLoader text='Submitting..' />
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        {alert && success && (
          <div
            className='mx-auto mt-5 flex w-[320px] items-center rounded-lg border border-green-300 bg-green-50 p-4 text-sm text-green-800 md:w-[450px] xl:w-[600px]'
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
              <span className='font-medium'>Success! </span> Thanks for
              contacting us, we will get back to you.
            </div>
          </div>
        )}
        {alert && !success && (
          <div
            className='mx-auto mt-5 flex w-[320px] items-center rounded-lg border bg-red-300 p-4 text-sm text-red-700 md:w-[450px] xl:w-[600px]'
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
        {!loggedIn && submitClicked && (
          <div
            className='mx-auto mt-5 flex w-[320px] items-center rounded-lg border bg-red-300 p-4 text-sm text-red-700 md:w-[450px] xl:w-[600px]'
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
              <span className='font-medium'>Sorry! </span> Please login to ask
              any question!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;
