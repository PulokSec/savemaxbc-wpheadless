import React from 'react';

import ChoiceCard from '@/components/pages/Locations/ChoiceCard';

type MyProps = {
  featuredData: any;
  usingFor?: any;
};

export default function ChoiceSection(props: MyProps) {
  const { featuredData, usingFor } = props;
  return (
    <div>
      <div className={` mt-10 pb-5 text-white lg:mt-0`}>
        <div className='mx-auto max-w-[1250px] p-3'>
          <div className='my-10 md:mt-0'>
            {featuredData?.map((cardData: any, index: any) => (
              <ChoiceCard cardData={cardData} index={index + 1} key={index} />
            ))}
          </div>
          {usingFor === 'apartment' && (
            <div className='flex items-center justify-center'>
              <a
                href='/contact-us'
                className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
