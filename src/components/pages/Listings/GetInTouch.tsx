import Image from 'next/image';
import React from 'react';

type MyProps = {
  bottomSection: any;
  usingFor?: any;
};
export default function GetInTouch(props: MyProps) {
  const { bottomSection, usingFor } = props;
  return (
    <>
      <section className='mx-auto w-full '>
        <div className='relative h-[40vh] w-full overflow-x-hidden lg:h-[50vh] xl:h-[85vh]'>
          <Image
            src={bottomSection?.backgroundImage?.node?.sourceUrl}
            fill={true}
            alt={bottomSection?.backgroundImage?.node?.altText}
            className='rounded-t-[100%] object-cover'
          />
          <div className='absolute h-full w-full overflow-hidden rounded-t-[100%] bg-gray-500 bg-opacity-70'>
            <div className=''>
              {usingFor === 'find-a-realtor' ? (
                <p className='px-5 pt-16 text-center text-xl font-bold text-white md:pt-32 md:text-5xl lg:pt-36 xl:pt-44'>
                  {bottomSection?.title}
                </p>
              ) : (
                <h2 className='px-5 pt-16 text-center text-xl text-white md:pt-32 md:text-5xl lg:pt-36 xl:pt-44'>
                  {bottomSection?.title}
                </h2>
              )}

              <div className='mt-7 text-center md:mt-14'>
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
