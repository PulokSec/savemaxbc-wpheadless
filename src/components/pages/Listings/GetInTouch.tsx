import React from 'react';

export default function GetInTouch() {
  return (
    <section className="mt-40 min-h-screen overflow-x-hidden bg-[url('https://savemaxbc.com/wp-content/uploads/2023/10/get-in-touch.jpg')] bg-contain bg-center bg-no-repeat md:bg-cover">
      <h2 className='px-5 pt-20 text-center text-[20px] text-sky-950 md:text-7xl'>
        Get In Touch
      </h2>
      <div className='mt-10 text-center'>
        <a
          href='#'
          className='text-uppercase mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
        >
          Connect
        </a>
      </div>
    </section>
  );
}
