'use client';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
export default function CarouselComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
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
  const CustomRight = ({ onClick }: any) => {
    return (
      <button
        aria-label='Right Arrow'
        className='absolute right-0 top-1/2 z-10 bg-none'
        onClick={() => onClick()}
      >
        <IoIosArrowForward className='cursor-pointer border-none text-[#E2C379]' />
      </button>
    );
  };
  const CustomLeft = ({ onClick }: any) => {
    // onMove means if dragging or swiping in progress.
    return (
      <button
        aria-label='Left Arrow'
        className='absolute left-0 top-1/2 z-10 bg-none'
        onClick={() => onClick()}
      >
        <IoIosArrowBack className='cursor-pointer text-center text-[#E2C379]' />
      </button>
    );
  };

  return (
    <div>
      <div className='relative px-5'>
        <Carousel
          // arrows
          responsive={responsive}
          // centerMode={true}
          showDots={false}
          infinite={false}
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          minimumTouchDrag={80}
          pauseOnHover
          // autoPlay={true}
          autoPlaySpeed={3000}
          customTransition='all .5'
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          partialVisible={false}
          dotListClass='custom-dot-list-style'
          rewind
          containerClass=''
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
}
