'use client';
import { gql, useMutation } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import Link from 'next/link';

if (process.env.NODE_ENV !== 'production') {
  loadErrorMessages();
  loadDevMessages();
}
const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    registerUser(
      input: {
        username: $email
        email: $email
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;
import React from 'react';

export default function SignUp() {
  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER);
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    const response = await registerUser({
      variables: values,
    });
    console.log(response);
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Check your email – an account confirmation link has been sent to
        you.
      </p>
    );
  }
  return (
    <form
      method='post'
      onSubmit={handleSubmit}
      className='mx-auto flex w-full flex-col items-start justify-start space-y-4'
    >
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
        placeholder='First Name'
        type='text'
        name='firstName'
        autoComplete='given-name'
        required
        id='first-name'
      />
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
        placeholder='Last Name'
        type='text'
        name='lastName'
        autoComplete='family-name'
        required
        id='last-name'
      />
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
        placeholder='Email'
        type='email'
        name='email'
        autoComplete='username'
        required
        id='email'
      />
      {error ? (
        error.message.includes('This username is already registered') ||
        error.message.includes('This email address is already registered') ? (
          <p className='my-3'>
            <span className='text-[#FF0000]'>
              You&#39;re already signed up!
            </span>{' '}
            <Link className='' href='/log-in'>
              <span className='text-[#ad782f] underline'>Log in</span>
            </Link>
          </p>
        ) : (
          <p className='my-3 text-[#FF0000]'>{error.message}</p>
        )
      ) : null}
      <button
        type='submit'
        className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
}
