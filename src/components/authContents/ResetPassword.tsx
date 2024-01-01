'use client';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const RESET_PASSWORD = gql`
  mutation resetUserPassword(
    $key: String!
    $login: String!
    $password: String!
  ) {
    resetUserPassword(
      input: { key: $key, login: $login, password: $password }
    ) {
      user {
        databaseId
      }
    }
  }
`;

interface Props {
  resetKey: string;
  login: string;
}

const ResetPassword = ({ resetKey: key, login }: Props) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [clientErrorMessage, setClientErrorMessage] = useState('');
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);
  const wasPasswordReset = Boolean(data?.resetUserPassword?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    resetPassword({
      variables: {
        key,
        login,
        password,
      },
    }).catch((error) => {
      console.error(error);
    });
  }

  function validate() {
    setClientErrorMessage('');

    const isPasswordLongEnough = password.length >= 5;
    if (!isPasswordLongEnough) {
      setClientErrorMessage('Password must be at least 5 characters.');
      return false;
    }

    const doPasswordsMatch = password === passwordConfirm;
    if (!doPasswordsMatch) {
      setClientErrorMessage('Passwords must match.');
      return false;
    }

    return true;
  }

  if (wasPasswordReset) {
    return (
      <>
        <p>Your new password has been set.</p>
        <Link href='/log-in'>
          <span className='text-[#ad782f] underline'>Log in</span>
        </Link>
      </>
    );
  }

  return (
    <form
      method='post'
      onSubmit={handleSubmit}
      className='mx-auto flex w-full flex-col items-start justify-start space-y-4'
    >
      <input
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px]  focus:outline-1'
        placeholder='Password'
        id='new-password'
        type='password'
        value={password}
        autoComplete='new-password'
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <input
        id='password-confirm'
        className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] focus:outline-1'
        placeholder='Confirm Password'
        type='password'
        value={passwordConfirm}
        autoComplete='new-password'
        onChange={(event) => setPasswordConfirm(event.target.value)}
        required
      />
      {clientErrorMessage ? (
        <p className='my-3 text-[#FF0000]'>{clientErrorMessage}</p>
      ) : null}
      {error ? <p className='my-3 text-[#FF0000]'>{error.message}</p> : null}
      <button
        type='submit'
        className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
      >
        {loading ? 'Setting...' : 'Set password'}
      </button>
    </form>
  );
};

export default ResetPassword;
