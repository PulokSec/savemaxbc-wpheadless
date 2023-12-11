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
      />
      <div className='mt-20'>
        <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.townhousesForSaleSurrey
                ?.topFeatureDescription,
          }}
        ></div>
      </div>
      <div className='pt-32'></div>
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
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.featureSection2
        }
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey
            ?.homebuyingSectionCopy
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

      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.choiceSectionCopy
        }
      />
      <Contact
        data={allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.contactSection}
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
