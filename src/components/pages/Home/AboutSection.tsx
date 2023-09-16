import React from 'react';

import NextImage from '@/components/NextImage';

import whoImage from '@/assets/homelanding/Who-we-are-home-side-pic.png';

export default function AboutSection() {
  return (
    <div className='bg-white'>
      <div className='mx-auto mt-20 grid max-w-2xl grid-cols-12 gap-4 md:gap-0 lg:mx-0 lg:max-w-none'>
        <div className='col-span-12 ml-5 pl-5 md:col-span-5 md:col-start-2 md:col-end-8 lg:mt-20'>
          <div className='w-full md:w-[500px]'>
            <h2 className='w-full text-2xl md:text-4xl'>Who We Are?</h2>
            <p className='mt-5 text-xs md:text-lg'>
              Save Max Westcoast Realty Inc is a real estate brokerage and we
              are in the business of providing real estate services for
              Residential as well as Commercial properties. Our team of realtors
              are highly trained and bring with them many years of experience to
              ensure our customers enjoy highest level of services.
            </p>
            <p className='mt-5 text-xs md:text-lg'>
              Our services cover Buying, Selling and Leasing of residential as
              well as commercial properties.
            </p>
            <p className='mt-5 text-xs md:text-lg'>
              Our business model is built on a comprehensive support model for
              every stakeholder. We are a strongly process oriented corporate
              and ensure our services are customized to meet the requirements of
              every customer.
            </p>
            <div className='mt-10 text-start'>
              <a
                href='#'
                className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
              >
                See More
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-4 col-start-8 col-end-12 md:col-span-3 md:col-start-10'>
          <NextImage
            useSkeleton
            className='md:[350px] w-40 md:mt-[250px] lg:w-[500px]'
            src={whoImage}
            width='500'
            height='400'
            alt='Icon'
          />
        </div>
      </div>
    </div>
  );
}
