import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomServiceSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-40 flex min-h-[30vh] flex-col items-center justify-between  md:min-h-screen'
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className='md:text-md container mx-auto mt-5 px-5 text-start text-xs lg:mt-40 lg:text-lg'
        dangerouslySetInnerHTML={{
          __html: bottomSection.description,
        }}
      ></div>
      <div className='mb-[-10px] rounded-xl bg-white text-center md:mt-10 lg:mb-[-10px]'>
        <a
          href='#'
          className='text-uppercase rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:px-3.5 md:py-2.5 md:text-lg'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
