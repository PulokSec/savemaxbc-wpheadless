import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  cardData: any;
};
const Card = (props: MyProps) => {
  const { cardData } = props;
  return (
    <div className='border-2  bg-white'>
      <NextImage
        layout='fill'
        className='relative h-[250px] w-full'
        src={cardData?.cardImage?.sourceUrl}
        alt={cardData?.cardImage?.altText}
      />

      <div className='desc p-3 text-center text-black'>
        <h3 className='text-[20px]'>{cardData?.cardTitle}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: cardData?.cardDescription,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
