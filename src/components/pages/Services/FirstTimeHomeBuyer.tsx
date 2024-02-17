'use client'

import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import SharedBanner from '@/components/elements/SharedBanner'
import ServicePointFeature from '@/components/service-menu-components/ServicePointFeature'
import SubServicesBottomSection from '@/components/service-menu-components/SubServicesBottomSection'
import Footer from '@/components/shared/Footer'

type MyProps = {
  data: any;
}
export default function FirstTimeHomeBuyer(props:MyProps) {
  const {data} = props;
  const router = useRouter();
  const handleClick = () => {
    router.push('/properties-listing?transactionType=For%20Sale&priceMax=750000');
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
          bannerData={data?.pages?.nodes[0]?.firstTimeBuyers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.firstTimeBuyers?.topFeatureTitle}
          topDesc={
            data?.pages?.nodes[0]?.firstTimeBuyers?.topFeatureDescription
          }
          usingFor='fthb'
        />
        <div className='mt-10 md:mt-16 lg:mt-40 xl:mt-60'>
          <div className='text-center'>
            <h2 className='w-full text-center text-xl leading-[36px] text-[#585858] md:text-2xl md:leading-[48px] lg:text-3xl lg:leading-[60px]'>
              {
                data?.pages?.nodes[0]?.firstTimeBuyers?.serviceFeatureSection
                  ?.featureTitle
              }{' '}
              <br />
              <span className='w-full text-center text-2xl text-black md:text-3xl lg:text-5xl'>
                {
                  data?.pages?.nodes[0]?.firstTimeBuyers?.serviceFeatureSection
                    ?.featureSubtitle
                }
              </span>
            </h2>
            {/* <h2 className='mt-1 w-full text-center text-2xl md:mt-4 md:text-3xl lg:text-5xl'>
              {
                data?.pages?.nodes[0]?.firstTimeBuyers?.serviceFeatureSection
                  ?.featureSubtitle
              }
            </h2> */}
          </div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.firstTimeBuyers?.serviceFeatureSection
          }
        />
        <SubServicesBottomSection
          bottomSection={data?.pages?.nodes[0]?.firstTimeBuyers?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
    </>
  )
}
