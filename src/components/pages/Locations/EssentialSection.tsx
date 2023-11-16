import React from 'react';

import EssentialCard from '@/components/pages/Locations/EssentialCard';

type MyProps = {
  featuredData: any;
};
export default function EssentialSection(props: MyProps) {
  const { featuredData } = props;
  console.log(featuredData);
  return (
    <div>
      <div className='mx-auto mt-10 max-w-[1250px] p-3 lg:mt-20'>
        <h2 className='text-center text-[30px] font-semibold'>
          {featuredData?.featureTitle} <br />
          <span className='text-[40px]'>{featuredData?.featureSubtitle}</span>
        </h2>

        <div
          className='mx-auto text-center md:w-2/4'
          dangerouslySetInnerHTML={{
            __html: featuredData?.featureDescription,
          }}
        ></div>
      </div>
      <div
        style={{
          background: `url(${featuredData?.backgroundImage?.sourceUrl}) no-repeat `,
          backgroundSize: '100% 100%',
        }}
        className={` text-white  `}
      >
        <div className='md:pb-30 mx-auto  max-w-[1250px] md:py-20'>
          <div className='mx-auto my-10 flex flex-wrap justify-center md:mt-36'>
            {featuredData?.featuredData?.map((item: any, index: number) => (
              <EssentialCard cardData={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div
        className='mx-auto w-full p-3 pb-10 text-center md:w-2/4 lg:pb-20'
        dangerouslySetInnerHTML={{
          __html: featuredData?.bottomDescription,
        }}
      ></div>
    </div>
  );
}
