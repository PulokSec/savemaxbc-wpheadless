'use client';
import AboutSection from '@/components/pages/Home/AboutSection';
import Banner from '@/components/pages/Home/Banner';
import ContactSection from '@/components/pages/Home/ContactSection';
import EnsureSection from '@/components/pages/Home/EnsureSection';
import FeatureSection from '@/components/pages/Home/FeatureSection';
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
      <AboutSection
        aboutData={allData?.pages?.nodes[0]?.HomePage?.aboutSection}
      />
      <EnsureSection
        ensureData={allData?.pages?.nodes[0]?.HomePage?.ensureSection}
      />
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
