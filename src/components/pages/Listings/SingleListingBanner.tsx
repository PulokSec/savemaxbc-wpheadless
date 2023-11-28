'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1 from '../../../assets/Banner/banner 1.jpg';
import banner2 from '../../../assets/Banner/banner 2.jpg';
import banner3 from '../../../assets/Banner/banner 3.jpg';
import banner4 from '../../../assets/Banner/banner 4.jpg';
import banner5 from '../../../assets/Banner/banner 5.jpg';

const images = [
  {
    url: banner1,
    altName: 'img1',
  },
  {
    url: banner2,
    altName: 'img2',
  },
  {
    url: banner3,
    altName: 'im3',
  },
  {
    url: banner4,
    altName: 'im4',
  },
  {
    url: banner5,
    altName: 'im5',
  },
];

type MyProps = {
  navigation: any;
};
export default function SingleListingBanner(props: MyProps) {
  return (
    <>
      <Carousel
        className='mx-auto h-[350px] w-full md:h-[500px] lg:h-[700px] '
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className='mx-auto h-[350px] w-[350px] md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[500px] '
          >
            <Image
              src={img?.url}
              fill={true}
              alt={img?.altName}
              className='object-cover'
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
