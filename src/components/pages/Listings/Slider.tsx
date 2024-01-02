import Image from 'next/image';
import React, { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

type Props = { images: any };

const Slider = (props: Props) => {
  const { images } = props;
  const allImages = [];
  for (const img of images) {
    const bufferOriginal = Buffer.from(img.Photos.data);
    const imageUrl = JSON.parse(bufferOriginal.toString('utf8'))?.LargePhoto
      ?.filename;
    const image = {
      original: imageUrl,
      thumbnail: imageUrl,
    };
    allImages.push(image);
  }
  // console.log('images', allImages);

  return (
    <div className=''>
      <ImageGallery
        items={allImages}
        showPlayButton={false}
        showFullscreenButton={false}
        showIndex={true}
      />
    </div>
  );
};

export default Slider;
