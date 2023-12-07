'use client';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import PointFeature from '@/components/elements/PointFeature';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import AboutSaleSection from '@/components/pages/Home/AboutSaleSection';
import Banner from '@/components/pages/Home/Banner';
import ContactSection from '@/components/pages/Home/ContactSection';
import ExploreSection from '@/components/pages/Home/ExploreSection';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import Footer from '@/components/shared/Footer';
type MyProps = {
  allData: any;
};
export default function HomeSaleLanding(props: MyProps) {
  const { allData } = props;
  console.log(allData);

  return (
    <main className='font-primary'>
      <Banner
        bannerData={allData?.pages?.nodes[0]?.homeForSaleInBc?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <FeatureSection
        featuredData={allData?.pages?.nodes[0]?.homeForSaleInBc?.featureSection}
      />
      <ExploreSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInBc?.considerSection
        }
      />
      <AboutSaleSection
        aboutData={allData?.pages?.nodes[0]?.homeForSaleInBc?.aboutSection}
      />
      <PointFeature
        featuredData={allData?.pages?.nodes[0]?.homeForSaleInBc?.exploreSection}
      />
      <WhyChooseUs
        featuredData={allData?.pages?.nodes[0]?.homeForSaleInBc?.choiceSection}
      />
      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInBc?.homebuyingSection
        }
      />
      <ContactSection
        contactData={allData?.pages?.nodes[0]?.homeForSaleInBc?.contactSection}
      />
      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
