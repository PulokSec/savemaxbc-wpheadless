'use client'

import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import SharedBanner from '@/components/elements/SharedBanner';
import ServicePointFeature from '@/components/service-menu-components/ServicePointFeature';
import SubServicesBottomSection from '@/components/service-menu-components/SubServicesBottomSection';
import Footer from '@/components/shared/Footer';
type MyProps = {
  data: any;
}
export default function CommercialBuyerLanding(props:MyProps) {
  const {data} = props;
  const router = useRouter();
  const handleClick = () => {
    router.push('/properties-listing?transactionType=For%20Sale&propertyType=Business');
  }
  return (
    <>
    {/* <ScrollTop/> */}
    <div className='fixed right-0 top-1/2 z-10'>
      <button onClick={handleClick} className='bg-blue-500 p-2 text-white rounded-tl-md rounded-bl-md hover:bg-blue-600'>
        <ChevronRight className='w-6 h-6' />
      </button>
    </div>
    <SharedBanner
          bannerData={data?.pages?.nodes[0]?.commercialBuyers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.commercialBuyers?.topFeatureTitle}
          topDesc={
            data?.pages?.nodes[0]?.commercialBuyers?.topFeatureDescription
          }
          usingFor='commercial-buyer'
        />
        <div className='mt-[75px] md:mt-16 lg:mt-60 xl:mt-[300px]'>
          <div className='text-center'>
            <p className='w-full text-center text-xl font-bold text-[#585858] md:text-2xl lg:text-3xl'>
              {
                data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
                  ?.featureTitle
              }
            </p>
            <h2 className='mt-1 w-full text-center text-2xl md:mt-4 md:text-3xl lg:text-5xl'>
              {
                data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
                  ?.featureSubtitle
              }
            </h2>
          </div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.commercialBuyers?.serviceFeatureSection
          }
        />
        <SubServicesBottomSection
          bottomSection={data?.pages?.nodes[0]?.commercialBuyers?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
    </>
  )
}
