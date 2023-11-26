import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import LeftImageRightText from '@/components/elements/LeftImageRightText';
import RightImageLeftText from '@/components/elements/RightImageLeftText';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import Footer from '@/components/shared/Footer';

type MyProps = {
  allData: any;
};
export default function TownhousesSaleSurreyLanding(props: MyProps) {
  const { allData } = props;
  // console.log(allData);

  return (
    <main>
      <LocationBanner
        bannerData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.bannerSection
        }
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
        topTitle={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.topFeatureTitle
        }
        topDesc={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey
            ?.topFeatureDescription
        }
      />
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.featureSection
        }
      />
      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.benefitsSection
        }
      />

      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.benefitsSection2
        }
      />

      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.topAreasSection
        }
      />
      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.topAreasSection2
        }
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey
            ?.homebuyingSectionCopy
        }
      />

      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.choiceSectionCopy
        }
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
