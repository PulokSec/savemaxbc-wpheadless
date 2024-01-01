'use client';
import { gql, useMutation } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { GET_USER } from '@/components/custom-hooks/useAuth';

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

export default function SignIn() {
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [{ query: GET_USER }],
  });
  const router = useRouter();
  const errorMessage = error?.message || '';
  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');

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
        router.push('/my-profile');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      method='post'
      onSubmit={handleSubmit}
      className='mx-auto my-5 flex w-full flex-col items-start justify-start space-y-4'
    >
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
        placeholder='Email'
        type='email'
        name='email'
        autoComplete='username'
        required
        id='email'
      />
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
        placeholder='Password'
        type='password'
        name='password'
        autoComplete='current-password'
        required
        id='password'
      />
      <Link href='/forget-password'>
        <span className='my-3 text-[#FF0000]'>Forgot password?</span>
      </Link>
      {!isEmailValid ? (
        <p className='my-3 text-[#FF0000]'>Invalid email. Please try again.</p>
      ) : null}
      {!isPasswordValid ? (
        <p className='my-3 text-[#FF0000]'>
          Invalid password. Please try again.
        </p>
      ) : null}
      <button
        type='submit'
        className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
      <p className='my-3'>
        <span className=''>Don&#39;t have an account yet? </span>
        <Link href='/sign-up'>
          <span className='text-[#ad782f] underline'>Sign up</span>
        </Link>
      </p>
    </form>
  );
}
