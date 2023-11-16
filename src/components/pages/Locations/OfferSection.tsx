import React from 'react';

import OfferCard from '@/components/pages/Locations/OfferCard';

type MyProps = {
  featuredData: any;
};

export default function OfferSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div>
      <div className={` mt-10 pb-[20px] text-white lg:mt-20`}>
        <div className='mx-auto max-w-[1250px] p-3'>
          <div className=' my-10 mt-36  '>
            {featuredData?.map((cardData: any, index: any) => (
              <OfferCard cardData={cardData} index={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
