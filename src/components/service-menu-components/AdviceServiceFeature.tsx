import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function AdviceServiceFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <div>
      <div className={` mt-10 pb-[20px] text-white`}>
        <div className='mx-auto max-w-[1250px] p-3'>
          <div className=' my-10 mt-10 px-5 md:mt-20 '>
            {featuredData?.map((cardData: any, index: any) => (
              <div
                key={index}
                className={`my-10 flex-col items-center md:flex md:flex-row md:items-end ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`desc h-[350px] text-black   md:mx-10 ${
                    index % 2 === 0
                      ? 'text-center md:text-right'
                      : 'text-center md:text-left'
                  }`}
                >
                  <h3 className='text-[30px]'>{cardData?.title}</h3>
                  <div
                    className='mt-5 md:w-[550px]'
                    dangerouslySetInnerHTML={{
                      __html: cardData?.description,
                    }}
                  ></div>
                </div>
                <NextImage
                  layout='fill'
                  className='relative h-[350px] md:w-[700px]'
                  src={cardData?.image?.node?.sourceUrl}
                  alt={cardData?.image?.node?.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
