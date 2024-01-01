'use client';
import { gql, useMutation } from '@apollo/client';
import React from 'react';
const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(input: { username: $username }) {
      user {
        databaseId
      }
    }
  }
`;

const ForgetPassword = () => {
  const [sendPasswordResetEmail, { loading, error, data }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL
  );
  const wasEmailSent = Boolean(data?.sendPasswordResetEmail?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email } = Object.fromEntries(data);
    sendPasswordResetEmail({
      variables: {
        username: email,
      },
    }).catch((error) => {
      console.error(error);
    });
  }

  if (wasEmailSent) {
    return (
      <div className='my-6'>
        <p>
          {' '}
          Please check your email. A password reset link has been sent to you.
        </p>
      </div>
    );
  }
  return (
    <form
      method='post'
      onSubmit={handleSubmit}
      className='mx-auto my-3 flex w-full flex-col items-start justify-start space-y-4'
    >
      <p className='my-3'>
        Enter the email associated with your account and you&#39;ll be sent a
        link to reset your password.
      </p>
      <input
        className='my-3 h-12 w-full rounded border-none bg-gray-100 pl-3  text-[15px] focus:outline-1'
        id='password-reset-email'
        placeholder='Enter email address'
        type='email'
        name='email'
        autoComplete='email'
        required
      />
      {error ? <p className='my-3 text-[#FF0000]'>{error.message}</p> : null}
      <button
        type='submit'
        className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
      >
        {loading ? 'Sending...' : 'Send password reset email'}
      </button>
    </form>
  );
};

export default ForgetPassword;
