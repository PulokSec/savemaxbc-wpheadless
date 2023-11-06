'use client';
import React from 'react';

type MyProps = {
  faqData: any;
};
export default function FaqSection(props: MyProps) {
  const { faqData } = props;
  return (
    <section
      className=''
      style={{
        backgroundImage: `url(${faqData?.faqImage?.sourceUrl})`,
        objectFit: 'contain',
      }}
    >
      <div className='col-span-12 ml-5 md:col-span-8 md:col-start-1 md:px-10 lg:py-20'>
        <h2 className='text-center text-2xl md:text-4xl'>
          {faqData?.faqTitle}
        </h2>
        <div className='container mx-auto mt-20 flex flex-col items-center rounded shadow-xl'>
          <ul className=''>
            {faqData?.faqDataDiv?.map((item: any, i: number) => (
              <li key={i} className='text-left drop-shadow-xl'>
                <div className='flex flex-row items-start'>
                  <div className='w-full py-5 text-[#051532]'>
                    <h3 className='rounded-t-xl  border-2 px-5 py-5 text-lg font-bold leading-6 shadow-xl'>
                      {item?.title}
                    </h3>
                    <div
                      className='mt-5 block px-5  text-start text-xs md:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
