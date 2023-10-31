import React from 'react';

import NextImage from '@/components/NextImage';

import homeImgGrey from '../../assets/elements/why choose home icon grey.png';
import homeImg from '../../assets/elements/why choose home icon.png';

const topHead = `<h2 className='w-full text-center text-2xl md:text-4xl'>Build Your Career With Save Max Westcoast Realty Inc</h2>`;

const topDescription = `<p>Are you looking to embark on a rewarding journey in the real estate industry? Save Max Westcoast Realty Inc is your gateway to a dynamic and fulfilling career that combines innovation, expertise, and a commitment to personal growth. Join us as we explore the exciting opportunities that await you when you choose to build your career with Save Max Westcoast Realty Inc.</p>`;
const description = `<p>Save Max Westcoast Realty Inc is a fast-growing global real estate brokerage with a strong presence in British Columbia. Our success story is built on a foundation of cutting-edge digital technologies, top-tier techniques, and a dedicated team of experts who work tirelessly to make the real estate experience seamless for our clients, partners, and colleagues.</p>`;
export default function WhyChooseUs() {
  return (
    <section className='container mx-auto bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/why-choose-savemax-background.png")] bg-cover bg-no-repeat px-10'>
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
      <div className='px-10 py-10 md:py-20'>
        <div className='relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-900 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
          <div className='is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <NextImage
                useSkeleton
                className='mt-[-40px] h-[50px] w-[40px]'
                src={homeImg}
                alt='{item?.image?.altText}'
                width='50'
                height='40'
              />
            </div>

            <div className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-start text-xl md:text-2xl'>
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

          <div className='is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <NextImage
                useSkeleton
                className='h-[50px] w-[40px]'
                src={homeImgGrey}
                alt='{item?.image?.altText}'
                width='50'
                height='40'
              />
            </div>

            <div className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'>
              <div className='text-end lg:w-full'>
                <h2 className='w-full text-end text-xl md:text-2xl'>
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

          <div className='is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <NextImage
                useSkeleton
                className='h-[50px] w-[40px]'
                src={homeImgGrey}
                alt='{item?.image?.altText}'
                width='50'
                height='40'
              />
            </div>

            <div className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-start text-xl md:text-2xl'>
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

          <div className='is-active group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <NextImage
                useSkeleton
                className='h-[50px] w-[40px]'
                src={homeImgGrey}
                alt='{item?.image?.altText}'
                width='50'
                height='40'
              />
            </div>

            <div className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'>
              <div className='text-end lg:w-full'>
                <h2 className='w-full text-end text-xl md:text-2xl'>
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

          <div className='group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
              <NextImage
                useSkeleton
                className='mt-[40px] h-[50px] w-[40px]'
                src={homeImgGrey}
                alt='{item?.image?.altText}'
                width='50'
                height='40'
              />
            </div>

            <div className='w-[calc(100%-4rem)] bg-white p-4 md:w-[calc(50%-2.5rem)]'>
              <div className='text-start lg:w-full'>
                <h2 className='w-full text-start text-xl md:text-2xl'>
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
