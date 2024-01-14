import React from 'react';

import NextImage from '@/components/NextImage';

import newsImage from '@/assets/news/Logo.jpg';

type MyProps = {
  newsData: any;
  index?: any;
};
const NewsCard = (props: MyProps) => {
  const { newsData, index } = props;
  const timeStamp = new Date(newsData?.date);
  const day = timeStamp.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    timeStamp
  );
  const year = timeStamp.getFullYear();

  // Create the formatted date string
  const date = `${day} ${month} ${year}`;
  return (
    <div
      className={`${
        index % 3 === 0 && (index + 1) % 3 === 0
          ? 'overflow-hidden rounded-t-xl border-2 border-gray-300'
          : 'overflow-hidden rounded-t-xl border-2 border-gray-300'
      } ${
        index === 3 || index === 4 || index === 9 || index === 10
          ? 'lg:h-[860px] 2xl:h-[680px]'
          : ''
      } lg:h-[720px] lg:w-[320px] 2xl:h-[630px] 2xl:w-[400px] `}
    >
      <NextImage
        layout='fill'
        className='relative h-[250px] w-full'
        src={newsData?.featuredImage?.node?.sourceUrl || newsImage}
        alt={newsData?.featuredImage?.node?.altText || 'news'}
      />
      <div className='flex items-center justify-between px-4'>
        <p className='text-[12px] text-black'>{date}</p>
        <NextImage
          layout='fill'
          className='cover relative mt-[-35px] h-[70px] w-[70px] overflow-hidden rounded-full border-2 border-gray-300'
          src={newsImage}
          alt='author'
        />
      </div>
      <div className='desc p-3 text-start text-black'>
        <a href={newsData?.uri}>
          <h3 className='text-[20px]'>{newsData?.title}</h3>
        </a>
        <p className='text-[12px]'>{newsData?.author?.node?.name}</p>
        <div
          className='overflow-hidden'
          dangerouslySetInnerHTML={{
            __html: newsData?.excerpt,
          }}
        ></div>
        <a href={newsData?.uri} className='cursor-pointer'>
          <p className='text-[14px] font-bold'>Read More ...</p>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
