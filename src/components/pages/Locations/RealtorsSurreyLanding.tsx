import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import AboutSaleSection from '@/components/pages/Home/AboutSaleSection';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import Footer from '@/components/shared/Footer';

type MyProps = {
  allData: any;
};
export default function RealtorsSurreyLanding(props: MyProps) {
  const { allData } = props;
  // console.log(allData);

  return (
    <main>
      <LocationBanner
        bannerData={allData?.pages?.nodes[0]?.realtorsSurrey?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
        topTitle={allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureTitle}
        topDesc={
          allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureDescription
        }
      />
      <FeatureSection
        featuredData={allData?.pages?.nodes[0]?.realtorsSurrey?.featureSection}
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.homebuyingSection
        }
      />

      <AboutSaleSection
        aboutData={allData?.pages?.nodes[0]?.realtorsSurrey?.aboutSection}
      />

      <WhyChooseUs
        featuredData={allData?.pages?.nodes[0]?.realtorsSurrey?.choiceSection}
      />
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.rightRealtorSection
        }
      />
      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
