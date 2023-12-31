import React from 'react';

type Props = {};

const ResetPassword = (props: Props) => {
  
  return (
    <div className='mx-auto my-20 flex w-11/12 flex-col items-center justify-center border border-gray-300 bg-white px-5 py-14 drop-shadow-xl md:w-[450px] md:px-10 lg:w-[500px] xl:my-28'>
      <div className='flex w-full flex-col items-start justify-start'>
        <h3 className='mb-3 text-xl font-bold md:text-2xl'>Reset Password</h3>
        <form
          method='post'
          className='mx-auto flex w-full flex-col items-start justify-start space-y-4'
        >
          <input
            className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px]  focus:outline-1'
            placeholder='Password'
            type='password'
            name='password'
            required
            id='password'
          />
          <input
            className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] focus:outline-1'
            placeholder='Confirm Password'
            type='password'
            name='confirm-password'
            required
            id='confirm-password'
          />

          <button
            type='submit'
            className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
