import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function GetInTouch(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='relative mt-10 flex h-[30vh] md:h-[40vh] 2xl:h-[80vh] w-full flex-col items-center overflow-hidden overflow-y-hidden bg-cover bg-no-repeat md:rounded-t-[20%] 2xl:rounded-t-[40%]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${bottomSection?.backgroundImage?.sourceUrl})`,
      }}
    >
      <h2 className='px-5 pt-7 text-center text-xl text-white md:pt-24 md:text-7xl'>
        {bottomSection?.title}
      </h2>
      <div className='mt-7 text-center md:mt-10'>
        <a
          href='/contact-us'
          className='text-uppercase border border-solid px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:text-lg'
        >
          Connect
        </a>
      </div>
    </section>
  );
}
