import Image from 'next/image';
import React, { useState } from 'react';
import userImage from '../../../assets/elements/user profile.png';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <div className='mx-auto max-w-[1300px] bg-white px-5 py-10 md:px-10 md:py-16'>
        <div className='flex flex-col items-center justify-center gap-x-3 gap-y-16 md:flex-row md:items-start md:justify-center md:gap-y-0'>
          <div className='flex flex-col items-center'>
            <Image
              src={userImage}
              width={150}
              height={150}
              alt='user image'
              className='mb-4'
            />
            <p className='text-lg font-bold tracking-wide text-gray-800'>
              Hank Williams
            </p>
            <p className='text-sm text-gray-800 '>highhank@gmail.com</p>
            <Link
              href='/logout'
              className='mt-4 flex items-center gap-x-2 rounded bg-gray-900 px-4 py-1 text-white hover:bg-gray-800'
            >
              <p>Logout</p>
              <LogOut className='h-5 w-5' />
            </Link>
          </div>
          <div className='ml-28 hidden lg:block'>
            <div className='h-[475px] border-l-[1px] border-l-gray-300 drop-shadow-2xl '></div>
          </div>
          <div className='md:ml-28'>
            <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
              <h3 className='mb-5 text-2xl font-bold tracking-wide md:text-2xl'>
                Profile Settings
              </h3>
              <form
                action=''
                className='mx-auto flex w-[320px] flex-col items-start justify-start space-y-4 md:w-[400px]'
              >
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>First Name</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Hank'
                    type='text'
                    name='first-name'
                    id='first-name'
                    required
                  />
                </div>
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>Last Name</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Williams'
                    type='text'
                    name='last-name'
                    id='last-name'
                    required
                  />
                </div>
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>Email</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='highhank@gmail.com'
                    type='email'
                    name='email'
                    id='email'
                    required
                  />
                </div>
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>Password</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Password'
                    type='password'
                    name='password'
                    id='password'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
