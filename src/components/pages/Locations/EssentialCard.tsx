import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  cardData: any;
};
const EssentialCard = (props: MyProps) => {
  const { cardData } = props;
  return (
    <div className='m-5 border  bg-white text-center md:w-[350px]'>
      <NextImage
        layout='fill'
        className='relative mx-auto h-[250px] w-full'
        src={cardData?.image?.node?.sourceUrl}
        alt={cardData?.image?.node?.altText}
      />

      <div className='desc p-2 text-center text-black'>
        <h3 className='text-[20px]'>{cardData?.title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: cardData?.description,
          }}
        ></div>
      </div>
    </div>
  );
};

export default EssentialCard;
