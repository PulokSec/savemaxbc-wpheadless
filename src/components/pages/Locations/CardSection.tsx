import React from 'react';

import Card from '@/components/pages/Locations/Card';

type MyProps = {
  cardSection: any;
};
export default function CardSection(props: MyProps) {
  const { cardSection } = props;
  console.log(cardSection);
  return (
    <div>
      <div
        style={{
          background: `url('${cardSection?.backgroundImage?.sourceUrl}') center center`,
          backgroundSize: '100% 100%',
        }}
        className={` hidden bg-no-repeat  text-white md:block md:pt-[270px]`}
      >
        <div className='mx-auto mt-10 max-w-[1250px] p-3'>
          <h2 className='text-[30px] font-semibold'>
            {cardSection?.cardTitle} <br />
            {cardSection?.cardSubtitle}
          </h2>

          <div
            className='md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: cardSection?.cardDescription,
            }}
          ></div>

          <div className='my-10 mt-36 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-20'>
            {cardSection?.cardData?.map((cardData: any, idx: any) => (
              <Card cardData={cardData} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: `url('${cardSection?.backgroundImage?.sourceUrl}') top center no-repeat`,
        }}
        className={` block bg-no-repeat pt-[250px] text-white md:hidden`}
      >
        <div className='mx-auto max-w-[1250px] p-3 '>
          <h2 className='text-[30px] font-semibold'>
            {cardSection?.cardTitle} <br />
            {cardSection?.cardSubtitle}
          </h2>

          <div
            className='md:w-2/4'
            dangerouslySetInnerHTML={{
              __html: cardSection?.cardDescription,
            }}
          ></div>

          <div className='mt-20 grid grid-cols-1 gap-10 md:my-10 md:mt-36 md:grid-cols-3 md:gap-20'>
            {cardSection?.cardData?.map((cardData: any, idx: any) => (
              <Card cardData={cardData} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[1250px] p-3'>
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
