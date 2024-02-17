import React from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import { constructPhotoUrl } from '@/components/utils/utils';

type Props = { images: any, listingId: any };

const Slider = (props: Props) => {
  const { images,listingId } = props;
  const allImages = [];
  for (const img of images) {
    // const bufferOriginal = Buffer.from(img.Photos.data);
    // const imageUrl = JSON.parse(bufferOriginal.toString('utf8'))?.LargePhoto
    //   ?.filename;
    const image = {
      original: constructPhotoUrl(listingId,img),
      thumbnail: constructPhotoUrl(listingId,img),
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
        autoPlay={true}
        slideInterval={2000}
      />
    </div>
  );
};

export default Slider;
