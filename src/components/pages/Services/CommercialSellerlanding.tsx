'use client'

import SharedBanner from '@/components/elements/SharedBanner';
import ServicePointFeature from '@/components/service-menu-components/ServicePointFeature';
import SubServicesBottomSection from '@/components/service-menu-components/SubServicesBottomSection';
import Footer from '@/components/shared/Footer';
type MyProps = {
  data: any;
}

export default function CommercialSellerlanding(props:MyProps) {
  const {data} = props;
  return (
    <>
    {/* <ScrollTop/> */}
     <SharedBanner
          bannerData={data?.pages?.nodes[0]?.commercialSellers?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.commercialSellers?.topFeatureTitle}
          topDesc={
            data?.pages?.nodes[0]?.commercialSellers?.topFeatureDescription
          }
          usingFor='commercial-seller'
        />
        <div className='mt-[75px] md:mt-16 lg:mt-60 xl:mt-[300px]'>
          <div className='text-center'>
            <p className='w-full text-center text-xl font-bold text-[#585858] md:text-2xl lg:text-3xl'>
              {
                data?.pages?.nodes[0]?.commercialSellers?.serviceFeatureSection
                  ?.featureTitle
              }
            </p>
            <h2 className='mt-1 w-full text-center text-2xl md:mt-4 md:text-3xl lg:text-5xl'>
              {
                data?.pages?.nodes[0]?.commercialSellers?.serviceFeatureSection
                  ?.featureSubtitle
              }
            </h2>
          </div>
        </div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.commercialSellers?.serviceFeatureSection
          }
        />
        <SubServicesBottomSection
          bottomSection={
            data?.pages?.nodes[0]?.commercialSellers?.bottomSection
          }
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
    </>
  )
}
