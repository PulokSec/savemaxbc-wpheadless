'use client';
import { useRef } from "react";

import BenefitsSection from "@/components/elements/BenefitsSection";
import HomeBuyerSection from "@/components/elements/HomeBuyerSection";
import ChoiceCard from "@/components/pages/Locations/ChoiceCard";
import SouthSurreyRealtorServiceLeftRight from "@/components/pages/Locations/SouthSurreyRealtorServiceLeftRight";

type Props = {
  data: any;
}

const HomesWhalleyComponent = (props: Props) => {
  const { data } = props;
  const ref = useRef<any>(null);

  const handleClick = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
       <section className='bg-white'>
        <div>
          
           <div className='mx-auto my-10 max-w-[1500px] lg:my-20'>
            <h1 className='px-3 text-center text-2xl md:text-3xl lg:px-10 lg:text-4xl'>
              {data?.topFeatureTitle}
            </h1>
            <div
              className='md:text-md mt-5 px-3 text-center text-xs lg:px-10 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.topFeatureDescription
              }}
            ></div>
            <div className='mt-10 mb-20 md:my-10 flex items-center justify-center'>
              <button onClick={handleClick}
                className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg cursor-pointer'
              >
                {data?.button}
              </button>
            </div> 
          </div>
         
           <div className='-mt-28 md:-mt-32'>
             <SouthSurreyRealtorServiceLeftRight data={data?.estateServices} />
          <div className='mt-10 mb-20 md:my-20 flex items-center justify-center'>
            <a
              href='/contact-us'
              className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
            >
              Contact Us
            </a>
          </div>  
           <div className='mt-20'>
            <div
            style={{
              background: `url(${data?.choiceBanner?.bannerImage?.node?.sourceUrl}) no-repeat center center`,
              backgroundSize: '100% 100%',
            }}
            className='flex h-[300px] items-center justify-center md:h-[400px] lg:h-[500px] 2xl:h-[700px] '
          >
            <div className='mx-auto max-w-[1200px] p-2 text-center'>
              <h2 className='pt-14 text-[26px] font-bold md:pt-10 lg:mt-5 xl:text-[40px]'>
                {
                  data?.choiceBanner?.bannerTitle
                }
              </h2>
              <div
                className='mx-auto mt-2 md:mt-5 w-full md:w-3/4'
                dangerouslySetInnerHTML={{
                  __html:
                    data?.choiceBanner?.bannerDescription,
                }}
              ></div>
            </div>
          </div>
          </div>

          <div className='bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat pb-[20px] text-white'>
            <div className='mx-auto max-w-[1250px] p-3'>
              <div className=' my-10'>
                {data?.choiceFeature?.map(
                  (cardData: any, index: number) => (
                    <ChoiceCard
                      cardData={cardData}
                      index={index + 1}
                      key={index}
                    />
                  )
                )}
              </div>
            </div>
          </div>

         

          </div> 
          <div className='-mt-64 md:-mt-28 lg:-mt-48 xl:mt-0'>
            <BenefitsSection
              featuredData={
                data?.benefitsSection
              }
            />
          </div>

          
          <div ref={ref} className='mx-auto -mt-10 mb-10 max-w-[1500px] lg:my-20'>
            <h2 className='px-3 text-center text-2xl md:text-3xl lg:px-10 lg:text-4xl xl:text-[42px]'>
              {data?.featureTitle}
            </h2>
            <div
              className='md:text-md mt-5 px-3 text-center text-xs lg:px-10 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  data?.featureDescription
              }}
            ></div>
           
          </div>


          <SouthSurreyRealtorServiceLeftRight
            data={data?.estateServicesCopy}
          />

           <div className='mt-10 mb-20 md:my-20 flex items-center justify-center'>
            <a
              href='/apply-now'
              className='rounded-xl border-2 border-solid border-[#061632] bg-white px-3 py-2 font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
            >
              Apply Now
            </a>
          </div>  

          <div className=''>
            <HomeBuyerSection
              featuredData={
                data?.homebuyingSection
              }
            />
        </div>
            
      
        
          
          <section
            className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] lg:h-[600px] md:justify-between'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${data?.contactSection?.image?.node?.sourceUrl})`,
            }}
          >
            <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
              {data?.contactSection?.title && (
                <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
                  {
                    data?.contactSection?.title
                  }
                </h2>
              )}

              {data?.contactSection?.description && (
                <div
                  className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:px-16 lg:text-lg'
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.contactSection?.description,
                  }}
                ></div>
              )}
              <div className='flex items-center justify-center'>
                <a
                  href='/contact-us'
                  className='text-uppercase rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
          
        </div>
      </section>
    </div>
  )
}

export default HomesWhalleyComponent