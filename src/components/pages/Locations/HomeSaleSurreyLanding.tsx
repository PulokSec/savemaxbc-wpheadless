import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import LeftImageRightText from '@/components/elements/LeftImageRightText';
import RightImageLeftText from '@/components/elements/RightImageLeftText';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import Contact from '@/components/shared/Contact';
import Footer from '@/components/shared/Footer';

type MyProps = {
  allData: any;
};
export default function HomeSaleSurreyLanding(props: MyProps) {
  const { allData } = props;
  // console.log(allData);

  return (
    <main>
      <LocationBanner
        bannerData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.bannerSection
        }
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
        topTitle={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.topFeatureTitle
        }
        topDesc={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.topFeatureDescription
        }
      />
      <div className='md:mt-32'></div>
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.featureSection
        }
      />
      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey
            ?.leftImageRightTextSection
        }
      />
      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey
            ?.leftImageRightTextSection2
        }
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.homebuyingSectionCopy
        }
      />
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.featureSection2
        }
      />

      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.choiceSectionCopy
        }
      />
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.featureSection3
        }
      />
      <Contact
        data={allData?.pages?.nodes[0]?.homeForSaleInSurrey?.contactSection}
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
