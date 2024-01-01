'use client';
import { gql, useMutation } from '@apollo/client';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import useAuth, { GET_USER, User } from '@/components/custom-hooks/useAuth';

import userImage from '../../../assets/elements/user profile.png';

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    updateUser(
      input: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        email: $email
      }
    ) {
      user {
        databaseId
      }
    }
  }
`;
const LOG_OUT = gql`
  mutation logOut {
    logout(input: {}) {
      status
    }
  }
`;

const Profile = () => {
  const { user } = useAuth();
  const { id, firstName, lastName, email, avatar } = user as User;
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);
  const wasProfileUpdated = Boolean(data?.updateUser?.user?.databaseId);
  const router = useRouter();
  const [logOut, { called }] = useMutation(LOG_OUT, {
    refetchQueries: [{ query: GET_USER }],
  });
  function handleLogOut() {
    try {
      logOut();
      router.push('/log-in');
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    updateProfile({
      variables: { id, ...values },
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <div className='mx-auto max-w-[1300px] bg-white px-5 py-10 md:px-10 md:py-16'>
        <div className='flex flex-col items-center justify-center gap-x-3 gap-y-16 md:flex-row md:items-start md:justify-center md:gap-y-0'>
          <div className='flex flex-col items-center'>
            <Image
              src={avatar?.url || userImage}
              width={150}
              height={150}
              alt='user image'
              className='mb-4  rounded-[50%] border shadow-xl'
            />
            <p className='text-lg font-bold tracking-wide text-gray-800'>
              {firstName} {lastName}
            </p>
            <p className='my-3 text-sm text-gray-800'>{email}</p>
            <div
              onClick={handleLogOut}
              className='mt-10 flex cursor-pointer items-center gap-x-2 rounded bg-gray-900 px-4 py-1 text-white hover:bg-gray-800'
            >
              <p>Logout</p>
              <LogOut className='h-5 w-5' />
            </div>
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
                onSubmit={handleSubmit}
                action=''
                className='mx-auto flex w-[320px] flex-col items-start justify-start space-y-4 md:w-[400px]'
              >
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>First Name</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Hank'
                    id='profile-first-name'
                    type='text'
                    name='firstName'
                    defaultValue={firstName || ''}
                    autoComplete='given-name'
                  />
                </div>
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>Last Name</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='Williams'
                    id='profile-last-name'
                    type='text'
                    name='lastName'
                    defaultValue={lastName || ''}
                    autoComplete='family-name'
                  />
                </div>
                <div className='w-full'>
                  <p className='mb-1 text-sm text-gray-800'>Email</p>
                  <input
                    className='h-12 w-full rounded border-none bg-gray-100 pl-3 text-[15px] shadow-inner focus:outline-1'
                    placeholder='highhank@gmail.com'
                    id='profile-email'
                    type='email'
                    name='email'
                    defaultValue={email || ''}
                    autoComplete='email'
                  />
                </div>
                {error ? (
                  <p className='my-3 text-[#FF0000]'>{error.message}</p>
                ) : null}
                <button
                  type='submit'
                  className='w-full rounded bg-gradient-to-r from-[#eee38f] via-[#ad782f] to-[#dbc071] py-3 text-lg font-semibold tracking-wide text-white duration-500 ease-in-out hover:from-[#dbc071] hover:via-[#ad782f] hover:to-[#eee38f] hover:tracking-wider hover:transition-all '
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </form>
              {wasProfileUpdated ? (
                <p className='my-3 text-[#16C60C]'>
                  Profile details have been updated.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
