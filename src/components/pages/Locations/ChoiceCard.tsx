import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  cardData: any;
  index: any;
};
const ChoiceCard = (props: MyProps) => {
  const { cardData, index } = props;
  return (
    <div
      className={`relative my-2   ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`flex items-center  ${
          index % 2 === 0 ? 'flex-row-reverse' : ''
        }`}
      >
        <NextImage
          className='relative z-10 h-[80px] w-[80px] rounded-full'
          layout='fill'
          src={cardData?.image?.sourceUrl}
          alt={cardData?.image?.altText}
        />

        <h3 className='mx-2 text-[20px] text-black md:mx-5 font-bold'>
          {cardData?.title}
        </h3>
      </div>

      <div
        className={`absolute z-0 mt-[-7px] flex h-[5px] w-[90%] items-center bg-black md:w-[500px] ${
          index % 2 === 0 ? 'right-8' : 'left-8'
        }`}
      ></div>

      <div
        className={`my-5 flex items-center  text-black md:mx-24 ${
          index % 2 === 0 ? 'flex-row-reverse text-right' : ''
        }`}
      >
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

export default ChoiceCard;
