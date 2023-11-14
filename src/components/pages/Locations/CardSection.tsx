import React from 'react';

import NextImage from '@/components/NextImage';

type MyProps = {
  cardSection: any;
};
export default function CardSection(props: MyProps) {
  const { cardSection } = props;
  console.log(cardSection);
  return (
    <div
      className='relative mt-20 w-full bg-auto duration-500 group-hover:rotate-3 group-hover:scale-125'
      style={{
        backgroundImage: `url(${cardSection?.backgroundImage?.sourceUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section>
        <div className='container mx-auto py-10 md:py-20'>
          <div className=' flex w-full flex-col items-start justify-center text-center md:px-10'>
            <h2 className='w-full text-start text-xl leading-5 md:text-2xl lg:text-3xl'>
              {' '}
              <span className='mb-5 text-2xl leading-5 text-[#525659] md:text-3xl lg:text-4xl'>
                {cardSection?.cardTitle}
              </span>{' '}
              <br />
              {cardSection?.cardSubtitle}
            </h2>
            <div
              className='mt-10 text-start text-xs md:w-[1000px] md:text-lg'
              dangerouslySetInnerHTML={{
                __html: cardSection?.cardDescription,
              }}
            ></div>
          </div>
          <div className='mx-auto mt-20 flex w-full flex-col items-center justify-center gap-4 md:mt-40 lg:flex-row'>
            {cardSection?.cardData?.map((item: any, i: number) => (
              <div
                key={i}
                className='max-w-sm border border-gray-200 bg-white shadow dark:border-gray-700'
              >
                <div className='cover relative h-60 w-[100%]'>
                  <NextImage
                    layout='fill'
                    className='cover'
                    src={item?.cardImage?.sourceUrl}
                    alt={item?.cardImage?.altText}
                  />
                </div>
                <div className='p-5'>
                  <h3 className='mb-2 text-center text-2xl font-bold tracking-tight text-gray-900'>
                    {item?.cardTitle}
                  </h3>
                  <div
                    className='mb-3 font-normal text-gray-700 dark:text-gray-400'
                    dangerouslySetInnerHTML={{
                      __html: item?.cardDescription,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='container mx-auto mt-5 text-center md:mt-20'>
        <div
          className='mt-10 text-center text-xs text-gray-100 md:text-lg'
          dangerouslySetInnerHTML={{
            __html: cardSection?.bottomDescription,
          }}
        ></div>
      </div>
    </div>
  );
}
