import React from 'react';

import Card from '@/components/pages/Locations/Card';

type MyProps = {
  cardSection: any;
};
export default function CardSection(props: MyProps) {
  const { cardSection } = props;
  // console.log(cardSection);
  return (
    <div>
      <div
        style={{
          background: `url('${cardSection?.backgroundImage?.node?.sourceUrl}') center center`,
          backgroundSize: '100% 100%',
        }}
        className={` hidden bg-no-repeat text-white md:pt-[50px] lg:block 2xl:-mt-28`}
      >
        <div className='mx-auto mt-10 max-w-[1250px] p-6 xl:mt-[45%] xl:p-3 2xl:mt-[30%]'>
          <h2 className='text-center text-[30px] font-semibold lg:pt-[300px] xl:pt-0 xl:text-start xl:text-[50px] 2xl:pt-6'>
            {cardSection?.cardTitle} <br /> <br />
            {cardSection?.cardSubtitle}
          </h2>

          <div
            className='mx-auto mt-5 max-w-[1250px] text-center md:w-2/4 xl:hidden'
            dangerouslySetInnerHTML={{
              __html: cardSection?.cardDescription,
            }}
          ></div>
          <div
            className='mt-5 md:w-2/4 lg:hidden xl:block'
            dangerouslySetInnerHTML={{
              __html: cardSection?.cardDescription,
            }}
          ></div>
          <div className='mb-14 flex flex-wrap items-start justify-center lg:mt-16 lg:gap-8 xl:mt-28 xl:gap-20 2xl:mt-20'>
            {cardSection?.cardData?.map((cardData: any, idx: any) => (
              <Card cardData={cardData} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className={` block bg-no-repeat pt-[50px] text-black lg:hidden`}>
        <div className='mx-auto max-w-[1250px] p-3 '>
          <h2 className='text-[30px] font-semibold leading-[36px]'>
            {cardSection?.cardTitle} <br />
            {cardSection?.cardSubtitle}
          </h2>

          <div
            className='md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: cardSection?.cardDescription,
            }}
          ></div>

          <div className='mt-14 grid grid-cols-1 gap-10 md:my-10 md:mt-20 md:grid-cols-2 md:gap-10'>
            {cardSection?.cardData?.map((cardData: any, idx: any) => (
              <Card cardData={cardData} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[1250px] p-3 lg:px-10 xl:p-5'>
        <div
          className='text-center text-black '
          dangerouslySetInnerHTML={{
            __html: cardSection?.bottomDescription,
          }}
        ></div>
      </div>
    </div>
  );
}
