import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import LeftImageRightText from '@/components/elements/LeftImageRightText';
import RightImageLeftText from '@/components/elements/RightImageLeftText';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
import RealtorsInSurreyFeatureSection from '@/components/pages/Locations/RealtorsInSurreyFeatureSection';
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
      <div className='mx-auto my-14 max-w-[1500px] md:my-20'>
        <h1 className='px-5 text-center text-2xl md:px-10 md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-5 text-center text-xs md:px-10 lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.realtorsSurrey?.topFeatureDescription,
          }}
        ></div>
      </div>

      <RealtorsInSurreyFeatureSection
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

      <div className='md:mt-10 lg:-mt-48 xl:mt-10'>
        <WhyChooseUs
          featuredData={allData?.pages?.nodes[0]?.realtorsSurrey?.choiceSection}
        />
      </div>

      <div className='mx-auto -mt-28 max-w-[1600px] md:mt-0 lg:-mt-48 xl:mt-0'>
        <HomeBuyerSection
          featuredData={
            allData?.pages?.nodes[0]?.realtorsSurrey?.homebuyingSection
          }
        />
      </div>

      <RealtorsInSurreyFeatureSection
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
