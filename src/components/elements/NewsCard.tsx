import React from 'react';

import NextImage from '@/components/NextImage';

import newsImage from '@/assets/news/newsPic.jpeg';

type MyProps = {
  newsData: any;
};
const NewsCard = (props: MyProps) => {
  const { newsData } = props;
  return (
    <div className='border-2  bg-white'>
      <a href={newsData?.uri} className='cursor-pointer'>
        <NextImage
          layout='fill'
          className='relative h-[250px] w-full'
          src={newsData?.featuredImage?.node?.sourceUrl || newsImage}
          alt={newsData?.featuredImage?.node?.altText || 'news'}
        />

        <div className='desc p-3 text-center text-black'>
          <h3 className='text-[20px]'>{newsData?.title}</h3>
          <p className='text-[12px]'>{newsData?.author?.node?.name}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: newsData?.excerpt,
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
