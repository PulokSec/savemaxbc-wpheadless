import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Favourites = (props: Props) => {
  return (
    <div>
      <div className='mx-auto max-w-[1300px] bg-white px-5 py-10 md:px-10 md:py-16'>
        <div className='flex flex-col items-center justify-center text-center'>
          <Star className='mb-5 h-14 w-14 text-yellow-500' />
          <p className='mb-2 text-lg font-bold capitalize text-sky-950'>
            Keep your favourite properties saved
          </p>
          <p className=''>You don't have any saved homes yet.</p>
          <p className='mb-4'>
            Save homes by tapping the Heart icon at the top of a listing tile or
            page.
          </p>
          <Link
            href='/listing'
            className='rounded-3xl bg-sky-950 px-6 py-4 text-white hover:bg-indigo-950'
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
