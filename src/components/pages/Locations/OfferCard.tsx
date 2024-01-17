import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  cardData: any;
  index: any;
};
const OfferCard = (props: MyProps) => {
  const { cardData, index } = props;
  return (
    <div
      className={`my-10 items-end md:flex ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <NextImage
        layout='fill'
        className='relative h-[250px] w-[500px]'
        src={cardData?.image?.sourceUrl}
        alt={cardData?.image?.altText}
      />

      <div
        className={`desc text-black   md:mx-10 ${
          index % 2 === 0 ? 'text-right' : 'text-left'
        } mt-5 md:mt-0 `}
      >
        <h3 className='text-[20px]'>{cardData?.title}</h3>
        <div
          className='md:w-[350px]'
          dangerouslySetInnerHTML={{
            __html: cardData?.description,
          }}
        ></div>
      </div>
    </div>
  );
};

export default OfferCard;
