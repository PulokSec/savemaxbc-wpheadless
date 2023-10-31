import React from 'react';

import NextImage from '@/components/NextImage';

import whoImage from '../../assets/elements/who-are-we.png';

const description = `<p>Save Max Westcoast Realty Inc is a fast-growing global real estate brokerage with a strong presence in British Columbia. Our success story is built on a foundation of cutting-edge digital technologies, top-tier techniques, and a dedicated team of experts who work tirelessly to make the real estate experience seamless for our clients, partners, and colleagues.</p>

<p>At Save Max Westcoast Realty Inc, we firmly believe that our people are our most valuable assets. We are passionate about their well-being and growth, and we cultivate a positive work culture that fosters collaboration, empowerment, and development.
</p>`;

const topHead = `<h2 className='w-full text-center text-2xl md:text-4xl'>Build Your Career With Save Max Westcoast Realty Inc</h2>`;

const topDescription = `<p>Are you looking to embark on a rewarding journey in the real estate industry? Save Max Westcoast Realty Inc is your gateway to a dynamic and fulfilling career that combines innovation, expertise, and a commitment to personal growth. Join us as we explore the exciting opportunities that await you when you choose to build your career with Save Max Westcoast Realty Inc.</p>`;

export default function WhoWeAre() {
  return (
    <section className='container mx-auto px-10'>
      <div className='px-10 text-center lg:w-full'>
        <div
          className='mt-5 text-xs md:text-lg'
          dangerouslySetInnerHTML={{
            __html: topHead,
          }}
        ></div>
        <div
          className='mt-5 text-xs md:text-lg'
          dangerouslySetInnerHTML={{
            __html: topDescription,
          }}
        ></div>
      </div>
      <div className='py-10 md:py-20'>
        <div className='mx-auto w-full'>
          <div className='mx-auto mt-10 flex flex-col items-center justify-around gap-4 px-10 md:mt-20 md:flex-row lg:mx-0 lg:max-w-none'>
            <div className=''>
              <NextImage
                useSkeleton
                className='w-40 md:w-[400px]'
                src={whoImage}
                alt='{item?.image?.altText}'
                width='500'
                height='200'
              />
            </div>
            <div className='flex flex-col items-end justify-end'>
              <div className='text-end lg:w-full'>
                <h2 className='w-full text-end text-2xl md:text-4xl'>
                  Who We Are
                </h2>
                <div
                  className='mt-5 text-xs md:text-lg'
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
