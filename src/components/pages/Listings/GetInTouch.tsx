import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function GetInTouch(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='relative mt-10 flex h-[30vh] w-full flex-col items-center overflow-hidden overflow-y-hidden rounded-t-[30%] bg-cover bg-no-repeat md:h-[40vh] md:rounded-t-[40%] 2xl:h-[80vh] 2xl:rounded-t-[40%]'
      style={{
        backgroundImage: `url('https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/meet-our.png')`,
      }}
    >
      <h2 className='px-5 pt-7 text-center text-xl text-white md:pt-24 md:text-5xl xl:pt-32'>
        {bottomSection?.title}
      </h2>
      <div className='mt-7 text-center md:mt-14'>
        <a
          href='/contact-us'
          className='text-uppercase rounded-md border-[2px] border-solid px-5 py-3 text-base font-semibold text-white shadow-sm hover:border-sky-950 hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:text-lg'
        >
          Connect
        </a>
      </div>
    </section>
  );
}
