import CondosSaleChooseSection from '@/components/elements/CondosSaleChooseSection';
import HomeBuyerSection from '@/components/elements/HomeBuyerSection';
import LeftImageRightText from '@/components/elements/LeftImageRightText';
import RightImageLeftText from '@/components/elements/RightImageLeftText';
import FeatureSection from '@/components/pages/Home/FeatureSection';
import LocationBanner from '@/components/pages/Locations/LocationBanner';
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
      <div className='mt-10 lg:mt-20'>
        <h1 className='px-3 text-center text-2xl md:text-3xl lg:px-10 lg:text-4xl'>
          {allData?.pages?.nodes[0]?.condosForSaleSurrey?.topFeatureTitle}
        </h1>
        <div
          className='md:text-md mt-5 px-3 text-center text-xs lg:px-10 lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.condosForSaleSurrey
                ?.topFeatureDescription,
          }}
        ></div>
      </div>
      <div className='pt-10 lg:pt-20'></div>
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

      <div className='mx-auto mt-10 max-w-[1600px] lg:mt-16'>
        <HomeBuyerSection
          featuredData={
            allData?.pages?.nodes[0]?.condosForSaleSurrey?.homebuyingSectionCopy
          }
        />
      </div>
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

      <div className='mt-10 md:mt-36 lg:-mt-52 xl:mt-16'>
        <CondosSaleChooseSection
          featuredData={
            allData?.pages?.nodes[0]?.condosForSaleSurrey?.choiceSectionCopy
          }
        />
      </div>
      <div className='-mt-36 md:-mt-20 lg:-mt-40 xl:-mt-32 2xl:mt-0'>
        <div className='mx-auto max-w-[1400px] px-5 py-20 text-center '>
          <h2 className='mb-5'>
            {
              allData?.pages?.nodes[0]?.condosForSaleSurrey?.contactSection
                ?.title
            }
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                allData?.pages?.nodes[0]?.condosForSaleSurrey?.contactSection
                  ?.description,
            }}
          ></p>
          <div className='mt-7 flex items-center justify-center'>
            <a
              href='/contact-us'
              className='text-uppercase rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
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
