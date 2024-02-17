import Image from 'next/image';

import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function ServiceBanner(props: MyProps) {
  const { headerData, settingsData, bannerData, usingFor } = props;
  return (
    <div className='relative h-[80vh] w-full md:h-[80vh]'>
       <Image 
        src={bannerData?.bannerImage?.node?.sourceUrl} 
        alt={bannerData?.bannerImage?.node?.altText} 
        layout='fill' 
        priority={true} 
        className='object-cover bg-blend-screen object-center z-0' 
      />

      <div className='relative z-1'>
        <Header navigation={headerData} settingsData={settingsData} />
        <div className='mx-auto h-[70vh] py-16 md:h-[70vh]'>
          <div className='mx-auto ml-0 flex h-full w-full flex-col items-center justify-center text-center md:items-center'>
            {bannerData?.topBannerHeading && (
              <p className='text-leading-8 text-center text-lg font-bold text-white md:text-start md:text-5xl'>
                {bannerData?.topBannerHeading}
              </p>
            )}
            {usingFor === 'news' && (
              <p className='text-leading-9 text-md mt-5 font-bold text-[#515151] md:text-3xl'>
                {bannerData?.bannerSubheading}
              </p>
            )}
            <p className='text-leading-3 mt-5 text-xl font-bold text-white md:text-6xl'>
              {bannerData?.bannerHeading}
            </p>
            {bannerData?.bannerDescription && (
              <div className='mx-auto mt-8 max-w-[1400px] px-3 text-center text-white md:px-10 '>
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
