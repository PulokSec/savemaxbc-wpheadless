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
      />
      <div className='mx-auto mt-10 max-w-[1500px] lg:mt-20'>
        <h1 className='px-3 text-center text-2xl md:text-3xl lg:px-10 lg:text-4xl'>
          {allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-3 text-center text-xs lg:px-10 lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.townhousesForSaleSurrey
                ?.topFeatureDescription,
          }}
        ></div>
      </div>
      <div className='pt-10 lg:pt-20'></div>
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

      <div className='mb-6'></div>
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.featureSection2
        }
      />

      <div className='mx-auto max-w-[1600px]'>
        <HomeBuyerSection
          featuredData={
            allData?.pages?.nodes[0]?.townhousesForSaleSurrey
              ?.homebuyingSectionCopy
          }
        />
      </div>

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

      <div className='-mt-52 md:mt-32 lg:-mt-52 xl:-mt-20 2xl:mt-24'></div>
      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.choiceSectionCopy
        }
      />
      <div className='-mt-40 md:-mt-20 lg:-mt-48 xl:-mt-36 2xl:mt-0'>
        <div className='mx-auto max-w-[1400px] px-5 py-20 text-center '>
          <h2 className='mb-5'>
            {
              allData?.pages?.nodes[0]?.townhousesForSaleSurrey?.contactSection
                ?.title
            }
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                allData?.pages?.nodes[0]?.townhousesForSaleSurrey
                  ?.contactSection?.description,
            }}
          ></p>
          <div className='flex items-center justify-center'>
            <a
              href='/contact-us'
              className='text-uppercase mt-5 rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
