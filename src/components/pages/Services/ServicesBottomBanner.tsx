import Image from 'next/image';
import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function ServicesBottomBanner(props: MyProps) {
  const { bottomSection } = props;
  return (
    <>
      <section className='mx-auto w-full '>
        <div className='relative h-[60vh] w-full overflow-x-hidden lg:h-[60vh] xl:h-[80vh]'>
          <Image
            src={bottomSection?.backgroundImage?.node?.sourceUrl}
            fill={true}
            alt={bottomSection?.backgroundImage?.node?.altText}
            className='rounded-t-[100%]'
          />
          <div className='absolute flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-t-[100%] bg-gray-500 bg-opacity-70 md:items-center md:justify-start'>
            <div className=''>
              <h2 className='px-5 pt-7 text-center text-xl text-white md:pt-24 md:text-5xl xl:pt-32'>
                {bottomSection?.title}
              </h2>
              {bottomSection?.description && (
                <p className='mx-auto mt-2 max-w-[1200px] px-10 text-center text-sm text-white md:px-16 lg:px-32 lg:text-base '>
                  {bottomSection?.description}
                </p>
              )}
              <div className='mt-6 text-center md:mt-14'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-md border-[2px] border-solid px-5 py-3 text-base font-semibold text-white shadow-sm hover:border-[#061632] hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:text-lg'
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
