import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function SubServicesBottomSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-10 flex h-[50vh] w-full flex-col items-center justify-start bg-cover bg-center md:mt-20 lg:h-[45vh] xl:h-[85vh] lg:rounded-t-[50%]'
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.node?.sourceUrl})`,
      }}
    >
      <div className='lg:mt-8 xl:mt-20'>
        <div
          className='md:text-md container mx-auto mt-10 px-5 text-start text-xs text-white md:mt-24 lg:mt-40 lg:px-20 xl:px-10 lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: bottomSection.description,
          }}
        ></div>
        <div className='mt-7 rounded-xl text-center lg:mt-14'>
          <a
            href='/contact-us'
            className='text-uppercase rounded-md border-[2px]  px-5 py-3 text-base font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
