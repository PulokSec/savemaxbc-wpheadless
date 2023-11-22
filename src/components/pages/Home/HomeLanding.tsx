'use client';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import PointFeature from '@/components/elements/PointFeature';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import AboutSection from '@/components/pages/Home/AboutSection';
import Banner from '@/components/pages/Home/Banner';
import ContactSection from '@/components/pages/Home/ContactSection';
import ExploreSection from '@/components/pages/Home/ExploreSection';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import HighestLevelService from '@/components/pages/Home/HighestLevelService';
import Footer from '@/components/shared/Footer';
type MyProps = {
  allData: any;
};
export default function HomeLanding(props: MyProps) {
  const { allData } = props;
  console.log(allData);

  return (
    <main>
      <Banner
        bannerData={allData?.pages?.nodes[0]?.HomePage?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <FeatureSection
        featuredData={allData?.pages?.nodes[0]?.HomePage?.featureSection}
      />
      <ExploreSection
        featuredData={allData?.pages?.nodes[0]?.HomePage?.considerSection}
      />
      <AboutSection
        aboutData={allData?.pages?.nodes[0]?.HomePage?.aboutSection}
      />
      <PointFeature
        featuredData={allData?.pages?.nodes[0]?.HomePage?.exploreSection}
      />
      <WhyChooseUs
        featuredData={allData?.pages?.nodes[0]?.HomePage?.choiceSection}
      />
      <HomeBuyerSection
        featuredData={allData?.pages?.nodes[0]?.HomePage?.homebuyingSection}
      />
      {/* <EnsureSection
        ensureData={allData?.pages?.nodes[0]?.HomePage?.ensureSection}
      /> */}
      <HighestLevelService />
      <ContactSection
        contactData={allData?.pages?.nodes[0]?.HomePage?.contactSection}
      />
      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
