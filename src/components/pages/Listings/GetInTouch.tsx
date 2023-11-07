import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function GetInTouch(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-40 flex min-h-[30vh] flex-col items-center overflow-x-hidden md:min-h-screen '
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className='px-5 pt-5 text-center text-[16px] text-sky-950 md:pt-20 md:text-7xl'>
        {bottomSection?.title}
      </h2>
      <div className='mt-5 text-center md:mt-10'>
        <a
          href='#'
          className='text-uppercase border border-solid px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
        >
          Connect
        </a>
      </div>
    </section>
  );
}
