import React from 'react';

type MyProps = {
  title: string;
};
export default function GetInTouch(props: MyProps) {
  const { title } = props;
  return (
    <section className="mt-40 flex min-h-[30vh] flex-col items-center overflow-x-hidden bg-[url('https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/get-in-touch.jpg')] bg-cover bg-no-repeat md:min-h-screen ">
      <h2 className='px-5 pt-5 text-center text-[16px] text-sky-950 md:pt-20 md:text-7xl'>
        {title}
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
