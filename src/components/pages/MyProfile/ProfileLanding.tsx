'use client';
import Favourites from '@/components/pages/MyProfile/Favourites';
import Profile from '@/components/pages/MyProfile/Profile';
import React, { useState } from 'react';

type Props = {};

const ProfileLanding = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className=''>
      <div className='mx-auto max-w-[1300px] bg-white px-5 py-6 lg:pb-8 lg:pt-16 md:px-10'>
        <div className='flex items-start justify-start gap-x-3'>
          <div
            onClick={() => setSelectedTab(0)}
            className='flex h-8 w-auto cursor-pointer items-center justify-center rounded-2xl border-[0.5px] border-gray-300 px-4 py-1 shadow-inner transition-all duration-300 ease-in-out hover:border-gray-800'
          >
            <p
              className={`${
                selectedTab === 0
                  ? '-mt-[6px] font-medium text-sky-950'
                  : 'mt-[2px] text-gray-700'
              }  text-[15px] tracking-wide `}
            >
              Profile
            </p>
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className='flex h-8 w-auto cursor-pointer items-center justify-center rounded-2xl border-[0.5px] border-gray-300 px-4 py-1 shadow-inner transition-all duration-300 ease-in-out hover:border-gray-800'
          >
            <p
              className={`${
                selectedTab === 1
                  ? '-mt-[6px] font-medium text-sky-950'
                  : 'mt-[2px] text-gray-700'
              }  text-[15px] tracking-wide `}
            >
              Favourites
            </p>
          </div>
        </div>
      </div>
      <hr className='border-gray-200 drop-shadow-2xl' />
      {selectedTab === 0 ? <Profile /> : <Favourites />}
    </div>
  );
};

export default ProfileLanding;
