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
export default function CondosSaleSurreyLanding(props: MyProps) {
  const { allData } = props;
  // console.log(allData);

  return (
    <main>
      <LocationBanner
        bannerData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.bannerSection
        }
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <div className='mt-20'>
        <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.condosForSaleSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.condosForSaleSurrey
                ?.topFeatureDescription,
          }}
        ></div>
      </div>
      <div className='pt-32'></div>
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.featureSection
        }
      />
      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.benefitsSection
        }
      />

      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.benefitsSection2
        }
      />

      <HomeBuyerSection
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.homebuyingSectionCopy
        }
      />
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.featureSection2
        }
      />

      <LeftImageRightText
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.topAreasSection
        }
      />
      <RightImageLeftText
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.topAreasSection2
        }
      />

      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.condosForSaleSurrey?.choiceSectionCopy
        }
      />
      <Contact
        data={allData?.pages?.nodes[0]?.condosForSaleSurrey?.contactSection}
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
