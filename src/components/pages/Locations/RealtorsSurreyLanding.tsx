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
      />
      <div className='mt-20'>
        <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureDescription,
          }}
        ></div>
      </div>
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

      <div className='mx-auto max-w-[1400px] px-5 py-20 text-center'>
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
