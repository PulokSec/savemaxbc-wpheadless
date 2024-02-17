'use client'

import SharedBanner from '@/components/elements/SharedBanner';
import ServicePointFeature from '@/components/service-menu-components/ServicePointFeature';
import SubServicesBottomSection from '@/components/service-menu-components/SubServicesBottomSection';
import Footer from '@/components/shared/Footer';
type MyProps = {
  data: any;
}
export default function SellerServiceLanding(props:MyProps) {
  const {data} = props;
  return (
    <>
    {/* <ScrollTop/> */}
    <SharedBanner
          bannerData={data?.pages?.nodes[0]?.sellerService?.bannerSection}
          headerData={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.headerSettings}
          topTitle={data?.pages?.nodes[0]?.sellerService?.topFeatureTitle}
          topDesc={data?.pages?.nodes[0]?.sellerService?.topFeatureDescription}
          usingFor='seller'
          featureTitle={
            data?.pages?.nodes[0]?.sellerService?.serviceFeatureSection
              ?.featureTitle
          }
          featureSubtitle={
            data?.pages?.nodes[0]?.sellerService?.serviceFeatureSection
              ?.featureSubtitle
          }
        />
        <div className='mt-20 md:mt-24 lg:mt-60'></div>
        <ServicePointFeature
          featuredData={
            data?.pages?.nodes[0]?.sellerService?.serviceFeatureSection
          }
          usingFor='seller'
        />
        <SubServicesBottomSection
          bottomSection={data?.pages?.nodes[0]?.sellerService?.bottomSection}
        />
        <Footer
          navigation={data?.menus?.nodes[0]?.menuItems?.nodes}
          settingsData={data?.settingsOptions?.savemaxOptions?.footerSettings}
        />
    </>
  )
}
