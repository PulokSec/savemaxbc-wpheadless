import React from 'react';

import NextImage from '@/components/NextImage';

import featured_third from '@/assets/homelanding/commercial-buyers.png';
import featured_sixth from '@/assets/homelanding/commercial-sellers.png';
import featured_first from '@/assets/homelanding/first-time-buyers.png';
import featured_second from '@/assets/homelanding/investment-buyers.png';
import featured_fifth from '@/assets/homelanding/New-Development.png';
import featured_fourth from '@/assets/homelanding/Selling-Your.png';
const featuredData = [
  {
    id: 1,
    title: 'First Time Home Buyers',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_first,
  },
  {
    id: 2,
    title: 'Investment Buyers',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_second,
  },
  {
    id: 3,
    title: 'Commercial Buyers',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_third,
  },
  {
    id: 4,
    title: 'Selling Your Home',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_fourth,
  },
  {
    id: 5,
    title: 'New Development',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_fifth,
  },
  {
    id: 6,
    title: 'Commercial Sellers',
    description: `Save Max Westcoast Realty Inc is a real estate brokerage and we are in the business of providing real estate services for Residential as well as Commercial properties. Our team of realtors are highly trained and bring with them many years of experience to ensure our customers enjoy highest level of services.`,
    image: featured_sixth,
  },
];
export default function FeatureSection() {
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxbc.com/wp-content/uploads/2023/09/Middle_part_bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='py-10 md:py-20'>
          <div className='mx-auto w-full'>
            {featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 md:gap-0 lg:mx-0 lg:max-w-none'
                >
                  <div className='col-span-12 ml-5 md:col-span-4 md:col-start-1 md:col-end-5 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <h2 className='w-full text-2xl md:w-[500px] md:text-4xl'>
                        {item?.title}
                      </h2>
                      <p className='mt-5 text-xs md:w-[500px] md:text-lg'>
                        {item?.description}
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
                  <div className='col-span-4 col-start-8 col-end-12  md:col-span-3 md:col-start-10 md:col-end-12'>
                    <NextImage
                      useSkeleton
                      className='w-40 md:w-[400px]'
                      src={item?.image}
                      width='500'
                      height='200'
                      alt='Icon'
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 grid max-w-2xl grid-cols-12 items-center justify-center gap-4 md:mt-20 lg:mx-0 lg:max-w-none'
                >
                  <div className='cols-end-12 md:col-span-5 md:col-start-1 md:col-end-5'>
                    <NextImage
                      useSkeleton
                      className='w-40 md:w-[400px]'
                      src={item?.image}
                      width='500'
                      height='200'
                      alt='Icon'
                    />
                  </div>
                  <div className='col-span-12 ml-5 mt-5 pr-5 md:col-span-4 md:col-start-7 md:col-end-11'>
                    <div className='lg:w-full'>
                      <h2 className='w-full text-2xl md:w-[500px] md:text-4xl'>
                        {item?.title}
                      </h2>
                      <p className='mt-5 text-xs md:text-lg'>
                        {item?.description}
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
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
