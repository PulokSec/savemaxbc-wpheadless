'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';

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
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const CustomRightArrow = (
  //   { onClick }: { onClick: React.MouseEventHandler },
  //   ...rest: any
  // ) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={onClick} />;
  // };
  // const CustomLeftArrow = (
  //   { onClick }: { onClick: React.MouseEventHandler },
  //   ...rest: any
  // ) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={onClick} />;
  // };
  return (
    <Carousel
      responsive={responsive}
      // centerMode={true}
      showDots={true}
      // infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container md:ml-10 ml-0'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // dotListClass='custom-dot-list-style'
      // itemClass='carousel-item-padding-40-px'
      // customRightArrow={<CustomRightArrow onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
      //   throw new Error("Function not implemented.");
      // } } />}
      // customLeftArrow={<CustomLeftArrow onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
      //   throw new Error("Function not implemented.");
      // } } />}
    >
      {children}
    </Carousel>
  );
}
