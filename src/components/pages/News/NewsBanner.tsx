
import Image from 'next/image';

import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function NewsBanner(props: MyProps) {
  const { headerData, settingsData, bannerData, usingFor } = props;
  return (
    <div className='relative h-[70vh] w-full md:h-[80vh]'>
      <Image 
        src={bannerData?.bannerImage?.node?.sourceUrl} 
        alt={bannerData?.bannerImage?.node?.altText} 
        layout='fill' 
        priority={true} 
        className='object-cover bg-blend-screen object-center absolute z-0' 
      />

      <div className='relative z-1'>
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='mx-auto h-[60vh] py-16 md:h-[70vh]'>
          <div className='mx-auto ml-0 flex h-full w-full flex-col items-center justify-center text-center md:items-center'>
            {bannerData?.topBannerHeading && (
              <p className='text-leading-3 text-center text-lg font-bold text-[#515151] md:text-start md:text-5xl'>
                {bannerData?.topBannerHeading}
              </p>
            )}
            {usingFor === 'news' && (
              <h1 className='text-leading-3 mt-5 text-xl font-bold text-[#515151] md:text-4xl lg:text-7xl'>
                {bannerData?.bannerSubheading} <br />{' '}
                <p className='text-leading-3 mt-5 text-lg font-bold text-[#061632] md:text-3xl lg:text-6xl'>
                  {bannerData?.bannerHeading}
                </p>
              </h1>
            )}

            {bannerData?.bannerDescription && (
              <div className='mx-auto mt-8 max-w-[1400px] px-3 text-center text-black md:text-start'>
                <p className='text-md'>{bannerData?.bannerDescription}</p>
              </div>
            )}
            {bannerData?.bannerButton && (
              <div className='mt-8 text-center text-black md:text-start'>
                <a href={bannerData?.bannerButton} className=''>
                  <button className='border-bg-[#061632] rounded-md border-[1px] bg-[#061632] px-8 py-3 text-white hover:border-[#061632] hover:bg-white hover:text-gray-800'>
                    CONTACT US
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
