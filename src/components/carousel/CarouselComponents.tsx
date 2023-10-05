'use client';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-multi-carousel';
import { ArrowProps } from 'react-multi-carousel/lib/types';

import 'react-multi-carousel/lib/styles.css';
export default function CarouselComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomRight = ({ onClick }: ArrowProps) => {
    return (
      <button onClick={onClick}>
        <IoIosArrowForward className='' />
      </button>
    );
  };
  const CustomLeft = ({ onClick }: ArrowProps) => (
    <button onClick={onClick}>
      <IoIosArrowBack className='cursor-pointer' />
    </button>
  );

  return (
    <div id='main-slide' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        <Carousel
          // arrows
          responsive={responsive}
          // centerMode={true}
          showDots={true}
          infinite={false}
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          minimumTouchDrag={80}
          pauseOnHover
          autoPlay={true}
          autoPlaySpeed={2000}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container md:ml-10 ml-0'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          partialVisible={false}
          dotListClass='custom-dot-list-style'
          rewind
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          // customRightArrow={<CustomRight />}
          // customLeftArrow={<CustomLeft />}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
