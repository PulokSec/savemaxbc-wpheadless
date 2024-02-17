import Image from 'next/image';

import SearchTab from '@/components/pages/Listings/SearchTab';
import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function ListingBanner(props: MyProps) {
  const { headerData, settingsData, bannerData, usingFor } = props;
  return (
    <div className='relative h-[80vh] w-full md:h-[80vh]'>
      <Image 
          src={bannerData?.bannerImage?.node?.sourceUrl} 
          alt={bannerData?.bannerImage?.node?.altText} 
          layout='fill' 
          priority={true} 
          className='object-cover object-center z-0' 
      />

      <div className='relative z-1'>
        <Header settingsData={settingsData} navigation={headerData} />
        <div className='mx-auto mt-[20%] flex h-full flex-col items-center justify-center md:mt-0'>
          <div
            className={`${
              usingFor === 'map' ? 'mt-[20%]' : ''
            } mx-auto flex w-full flex-col items-center justify-center py-0 text-center md:mt-[15%] md:py-0 lg:mt-[20%] 2xl:mt-[15%]`}
          >
            <p className='text-leading-3 text-xl font-bold text-white md:text-5xl lg:text-7xl'>
              {bannerData?.bannerHeading}
            </p>
          </div>
          <div className={usingFor == 'map' ? 'hidden' : 'block'}>
            <SearchTab />
          </div>
        </div>
      </div>
    </div>
  );
}
