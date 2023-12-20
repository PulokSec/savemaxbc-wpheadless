import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomServiceSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-10 flex h-[50vh] w-full flex-col items-center justify-start bg-cover bg-center md:mt-40 lg:h-[120vh]'
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
      }}
    >
      <div className=''>
        <div
          className='md:text-md container mx-auto mt-10 px-5 text-start text-xs text-[#061632] lg:mt-40 lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: bottomSection.description,
          }}
        ></div>
        <div className='mt-14 rounded-xl text-center'>
          <a
            href='/contact-us'
            className='text-uppercase rounded-md border-[2px] bg-white px-5 py-3 text-base font-semibold text-[#061632] shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
