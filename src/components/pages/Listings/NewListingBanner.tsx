import Image from 'next/image';

import MapSearchTab from '@/components/pages/Listings/MapSearchTab';
import OurListingMapTab from '@/components/pages/Listings/OurListingMapTab';
import SearchTab from '@/components/pages/Listings/SearchTab';
import Header from '@/components/shared/Header';
type MyProps = {
  bannerData: any;
  headerData: any;
  settingsData: any;
  usingFor?: any;
};
export default function NewListingBanner(props: MyProps) {
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
      <div style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60))'}} className="absolute inset-0 z-1"></div>

      <div className='relative z-2'>
        <Header settingsData={settingsData} navigation={headerData} />
        <div className='mx-auto flex flex-col items-center justify-between'>
          <div className='mx-auto flex w-full flex-col items-center justify-center py-16 text-center md:mt-[10%] 2xl:mt-[8%]'>
            <p className='text-leading-3 text-xl font-bold text-white md:text-5xl lg:text-7xl'>
              {bannerData?.bannerHeading}
            </p>
          </div>

          <div>{usingFor === 'map' ? <MapSearchTab /> : usingFor === 'our-listing' ? <OurListingMapTab/> : <SearchTab />}</div>
        </div>
      </div>
    </div>
  );
}
