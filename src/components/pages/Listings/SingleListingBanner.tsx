'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type MyProps = {
  navigation: any;
  allImages: any;
};
export default function SingleListingBanner(props: MyProps) {
  const { navigation, allImages } = props;
  return (
    <>
      <Carousel
        className='mx-auto h-[350px] w-full md:h-[500px] lg:h-[700px] '
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
      >
        {allImages?.map((img: any, idx: number) => {
          const bufferOriginal = Buffer.from(img.Photos.data);
          const imageUrl = JSON.parse(bufferOriginal.toString('utf8'))
            ?.LargePhoto?.filename;
          return (
            <div
              key={idx}
              className='mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[500px] '
            >
              <Image
                src={imageUrl}
                fill={true}
                alt={img?.altName}
                className='object-cover'
                priority={true}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
