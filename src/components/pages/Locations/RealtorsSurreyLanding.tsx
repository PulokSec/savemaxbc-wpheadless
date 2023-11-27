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

      <div className='mt-32'></div>
      <FeatureSection
        featuredData={allData?.pages?.nodes[0]?.realtorsSurrey?.featureSection}
      />

      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.leftImageRightTextSection
        }
      />
      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.leftImageRightTextSection2
        }
      />

      <WhyChooseUs
        featuredData={allData?.pages?.nodes[0]?.realtorsSurrey?.choiceSection}
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.homebuyingSection
        }
      />

      {/* <AboutSaleSection
        aboutData={allData?.pages?.nodes[0]?.realtorsSurrey?.aboutSection}
      /> */}

      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.realtorsSurrey?.rightRealtorSection
        }
      />

      <div className='mx-auto max-w-[1400px] py-20 text-center px-5'>
        <h2 className='mb-5'>
          {allData?.pages?.nodes[0]?.realtorsSurrey?.contactSection?.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.realtorsSurrey?.contactSection
                ?.description,
          }}
        ></p>
      </div>

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
