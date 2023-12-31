import React from 'react';

import ChoiceCard from '@/components/pages/Locations/ChoiceCard';

type MyProps = {
  featuredData: any;
};

export default function ChoiceSection(props: MyProps) {
  const { featuredData } = props;
  return (
    <div>
      <div className={` mt-10 pb-5 text-white lg:mt-0`}>
        <div className='mx-auto max-w-[1250px] p-3'>
          <div className='my-10 md:mt-0'>
            {featuredData?.map((cardData: any, index: any) => (
              <ChoiceCard cardData={cardData} index={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
