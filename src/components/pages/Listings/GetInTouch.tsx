import Image from 'next/image';
import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function GetInTouch(props: MyProps) {
  const { bottomSection } = props;
  return (
    <>
      <section className='mx-auto w-full '>
        <div className='relative h-[40vh] w-full lg:h-[50vh] xl:h-[80vh]'>
          <Image
            src='https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/meet-our.png'
            fill={true}
            alt='Get In Touch'
            className=''
          />
          <div className='absolute left-1/2 top-14 mx-auto w-[350px] -translate-x-1/2 px-3 md:top-2 md:w-[700px] lg:top-10'>
            <div className=''>
              <h2 className='px-5 pt-7 text-center text-xl text-white md:pt-24 md:text-5xl xl:pt-32'>
                Meet Our Exceptional Realtors
              </h2>
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
