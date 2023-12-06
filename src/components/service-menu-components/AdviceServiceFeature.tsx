import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  featuredData: any;
};

export default function AdviceServiceFeature(props: MyProps) {
  const { featuredData } = props;
  return (
    <div>
      <div className={` mt-10 pb-[20px] text-white lg:mt-20`}>
        <div className='mx-auto max-w-[1250px] p-3'>
          <div className=' my-10 mt-36  '>
            {featuredData?.map((cardData: any, index: any) => (
              <div
                key={index}
                className={`my-10 items-end  md:flex ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`desc text-black   md:mx-10 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <h3 className='text-[20px]'>{cardData?.title}</h3>
                  <div
                    className='md:w-[350px]'
                    dangerouslySetInnerHTML={{
                      __html: cardData?.description,
                    }}
                  ></div>
                </div>
                <NextImage
                  layout='fill'
                  className='relative h-[250px] w-[500px]'
                  src={cardData?.image?.sourceUrl}
                  alt={cardData?.image?.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
