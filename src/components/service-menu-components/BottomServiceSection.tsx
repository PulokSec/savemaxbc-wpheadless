import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomServiceSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-40 flex h-[50vh] w-full flex-col items-center justify-between  bg-cover bg-center lg:h-[120vh]'
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
      }}
    >
      <div
        className='md:text-md container mx-auto mt-10 px-5 text-start text-xs text-[#061632] lg:mt-40 lg:text-lg'
        dangerouslySetInnerHTML={{
          __html: bottomSection.description,
        }}
      ></div>
      <div className='mb-[-10px] rounded-xl bg-white text-center md:mt-10 lg:mb-[-10px]'>
        <a
          href='contact-us'
          className='text-uppercase rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
