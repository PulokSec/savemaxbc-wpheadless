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
export default function InvestmentBuyerLanding(props:MyProps) {
  const {data} = props;
   const router = useRouter();
  const handleClick = () => {
    router.push('/listing');
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
          bannerData={data?.pages?.nodes[0]?.investmentBuyer?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.investmentBuyer?.topFeatureTitle}
          topDesc={
            data?.pages?.nodes[0]?.investmentBuyer?.topFeatureDescription
          }
          usingFor='investment-buyer'
        />
        <div className='mt-[70px] md:mt-16 lg:mt-60 xl:mt-[300px]'>
          <div className='text-center'>
            <h2 className='w-full text-center text-xl leading-[36px] text-[#585858] md:text-2xl md:leading-[48px] lg:text-3xl lg:leading-[60px]'>
              {
                data?.pages?.nodes[0]?.investmentBuyer?.serviceFeatureSection
                  ?.featureTitle
              }{' '}
              <br />
              <span className='w-full text-center text-2xl text-black md:text-3xl lg:text-5xl'>
                {
                  data?.pages?.nodes[0]?.investmentBuyer?.serviceFeatureSection
                    ?.featureSubtitle
                }
              </span>
            </h2>
          </div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.investmentBuyer?.serviceFeatureSection
          }
        />
        <SubServicesBottomSection
          bottomSection={data?.pages?.nodes[0]?.investmentBuyer?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
    </>
  )
}
