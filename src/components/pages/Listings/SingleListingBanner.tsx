'use client';
import { gql, useMutation, useQuery } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { Dot, KeyRound, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { GET_USER } from '@/components/custom-hooks/useAuth';
import Header from '@/components/shared/Header';
import { Carousel } from 'react-responsive-carousel';

if (process.env.NODE_ENV !== 'production') {
  loadErrorMessages();
  loadDevMessages();
}
const LOG_IN = gql`
  mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: { login: $login, password: $password }) {
      status
    }
  }
`;
type MyProps = {
  navigation: any;
  allImages: any;
  headerData: any;
  settingsData: any;
};
export default function SingleListingBanner(props: MyProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const { allImages, headerData, settingsData } = props;
  const [loginModal, setLoginModal] = useState(false);
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [{ query: GET_USER }],
  });

  const { data, loading: userLoading } = useQuery(GET_USER);
  const user = data?.viewer;

  const errorMessage = error?.message || '';
  const firstbufferOriginal = Buffer.from(allImages[0].Photos.data);
  const firstImageUrl = JSON.parse(firstbufferOriginal.toString('utf8'))
    ?.LargePhoto?.filename;
  const secondbufferOriginal = Buffer.from(allImages[1].Photos.data);
  const secondImageUrl = JSON.parse(secondbufferOriginal.toString('utf8'))
    ?.LargePhoto?.filename;

  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');

  useEffect(() => {
    if (user) setLoggedIn(true);
  }, [user]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    try {
      const response = await logIn({
        variables: {
          login: email,
          password,
        },
      });
      console.log(response);
      if (response.data.loginWithCookies.status === 'SUCCESS') {
        setLoginModal(false);
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='relative'>
      <Header settingsData={settingsData} navigation={headerData} />

      {userLoading ? (
        <div
          className='relative mx-auto flex h-[350px] w-full items-center justify-center lg:h-[350px] xl:h-[500px] '
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${firstImageUrl})`,
          }}
        >
          <div className='grid h-full w-full grid-cols-1 grid-rows-1 place-items-center text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              fill='currentColor'
              className='bi bi-arrow-repeat animate-spin'
              viewBox='0 0 16 16'
            >
              <path d='M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z' />
              <path
                fill-rule='evenodd'
                d='M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z'
              />
            </svg>
          </div>
        </div>
      ) : user ? (
        <Carousel
          className='mx-auto h-[350px] w-full md:h-[500px] lg:h-[700px] '
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showIndicators={false}
        >
          {allImages?.map((img: any, idx: number) => {
            const bufferOriginal = Buffer.from(img.Photos.data);
            const imageUrl = JSON.parse(bufferOriginal.toString('utf8'))
              ?.LargePhoto?.filename;
            return (
              <div
                key={idx}
                className='mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[500px] '
              >
                <Image
                  src={imageUrl}
                  fill={true}
                  alt={img?.altName}
                  className='object-cover'
                  priority={true}
                />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <>
          <div className='mx-auto flex w-full flex-col items-center justify-center gap-2 p-5 md:flex-row md:p-3 lg:p-5 '>
            <div className='relative h-[350px] w-full rounded-xl md:w-1/2 lg:h-[350px] xl:h-[500px]'>
              <Image
                src={firstImageUrl}
                fill={true}
                alt='First Image'
                className='rounded-xl object-cover'
                priority={true}
              />
            </div>
            <div
              className='flex h-[350px] w-full items-center justify-center rounded-xl bg-cover bg-fixed bg-[center_center] bg-no-repeat md:w-1/2 lg:h-[350px] xl:h-[500px]'
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${secondImageUrl})`,
              }}
            >
              <div className='mx-auto flex h-[90%] w-[95%] flex-col items-start justify-center rounded-xl bg-white pl-8'>
                <h3 className='mb-2 flex items-center gap-x-3 text-xl text-gray-800 md:mb-3 lg:text-3xl'>
                  Free Account Required <KeyRound />
                </h3>
                <p className='text-gray-800'>
                  Join millions of Canadians searching for homes
                </p>
                <ul className='my-6 -ml-3 text-gray-800'>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    Faster listings than everyone
                  </li>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    See 27% more homes & sold history
                  </li>
                  <li className='flex items-center '>
                    <Dot className='h-8 w-8' />
                    Instant access to photos & features
                  </li>
                </ul>
                <div
                  onClick={() => setLoginModal(true)}
                  className='w-[225px] cursor-pointer rounded-lg bg-sky-900 px-4 py-2 text-center font-semibold text-white transition-all duration-500 ease-in-out  hover:text-[17px] hover:tracking-wide'
                >
                  Login to see all photos!
                </div>
              </div>
            </div>
          </div>
          {loginModal && (
            <>
              <div
                className='fixed inset-0 z-40 bg-black opacity-50'
                onClick={() => setLoginModal(false)}
              ></div>
              <div className='fixed left-1/2 top-1/2 z-50 mx-auto flex h-[350px] w-11/12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-sky-900 md:h-[400px] md:w-[600px] lg:top-1/2'>
                <div className='relative  '>
                  <div className='fixed right-3 top-3'>
                    <X
                      onClick={() => setLoginModal(false)}
                      className=' h-6 w-6 cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-125'
                    />
                  </div>
                </div>
                <div>
                  <h3 className='mb-1 text-white'>Please Login First</h3>
                  <p className='mb-4 text-white'>
                    Join millions of Canadians searching for homes
                  </p>
                  <form
                    method='post'
                    onSubmit={handleSubmit}
                    className='flex flex-col items-center justify-center'
                  >
                    <input
                      className='mb-3 h-10 w-[300px] rounded-lg border border-gray-200 bg-white bg-opacity-80 text-[15px] focus:outline-none md:h-12 md:w-[400px] md:text-base'
                      placeholder='Email'
                      type='email'
                      name='email'
                      autoComplete='username'
                      required
                      id='email'
                    />
                    <input
                      className='mb-3 h-10 w-[300px] rounded-lg border border-gray-200 bg-white bg-opacity-80 text-[15px] focus:outline-none md:h-12 md:w-[400px] md:text-base'
                      placeholder='Password'
                      type='password'
                      name='password'
                      autoComplete='current-password'
                      required
                      id='password'
                    />
                    {!isEmailValid ? (
                      <p className='my-3 text-[#FF0000]'>
                        Invalid email. Please try again.
                      </p>
                    ) : null}
                    {!isPasswordValid ? (
                      <p className='my-3 text-[#FF0000]'>
                        Invalid password. Please try again.
                      </p>
                    ) : null}
                    <button
                      className='h-10 w-[300px] rounded-lg bg-sky-700 font-medium tracking-wide text-white hover:bg-opacity-70 hover:text-gray-200 md:h-12 md:w-[400px] lg:text-lg'
                      type='submit'
                    >
                      {loading ? 'Logging in...' : 'Log in'}
                    </button>
                  </form>
                  <div className='mt-4 flex items-center text-sm text-gray-200'>
                    <p className='mr-1'>Don't have an account?</p>
                    <Link
                      href='/sign-up'
                      className='underline hover:text-white'
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
