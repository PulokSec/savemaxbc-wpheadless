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
      <div className='h-48 md:h-32 2xl:h-20'></div>
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

      <div className='mx-auto max-w-[1600px] pt-10 lg:pt-20'>
        <HomeBuyerSection
          featuredData={
            allData?.pages?.nodes[0]?.homeForSaleInSurrey?.homebuyingSectionCopy
          }
        />
      </div>
      <FeatureSection
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.featureSection2
        }
      />
      <div className='md:mt-32 lg:-mt-52 xl:-mt-20 2xl:mt-24'></div>
      <WhyChooseUs
        featuredData={
          allData?.pages?.nodes[0]?.homeForSaleInSurrey?.choiceSectionCopy
        }
      />
      <div className='-mt-32 md:mt-0 lg:-mt-40 xl:-mt-20 2xl:mt-0'>
        <FeatureSection
          featuredData={
            allData?.pages?.nodes[0]?.homeForSaleInSurrey?.featureSection3
          }
        />
      </div>
      <div className='mx-auto max-w-[1400px] px-5 py-20 text-center '>
        <h2 className='mb-5'>
          {allData?.pages?.nodes[0]?.homeForSaleInSurrey?.contactSection?.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.homeForSaleInSurrey?.contactSection
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
      

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
