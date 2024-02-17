'use client';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import NextImage from '@/components/NextImage';
import ContactForm from '@/components/pages/Contact/ContactForm';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Footer from '@/components/shared/Footer';

const fields = [{ name: 'Buying' }, { name: 'Selling' }, { name: 'Other' }];

type MyProps = {
  allData: any;
};

export default function SellingPropertiesLanding(props: MyProps) {
  const { allData } = props;
  const [selected, setSelected] = useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFunction: (arg0: any) => void
  ) => {
    setFunction(event.target.value);
  };
  return (
    <main>
      <BannerWithButton
        bannerData={allData?.pages?.nodes[0]?.sellingProperties?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <div className='bg-[#E6E6E6] py-14 md:py-20'>
        <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.sellingProperties?.topBannerTitle}
        </h2>
        <div
          className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html:
              allData?.pages?.nodes[0]?.sellingProperties?.topBannerDescription,
          }}
        ></div>
      </div>
      <h2 className='px-4 py-5 text-center text-2xl md:px-10 md:text-3xl lg:py-10 lg:text-4xl'>
        {allData?.pages?.nodes[0]?.sellingProperties?.propertySelling?.title}
      </h2>

      {allData?.pages?.nodes[0]?.sellingProperties?.propertySelling?.sellingDiv?.map(
        (item: any, idx: number) => (
          <div className='container mx-auto' key={idx}>
            <div className='container mx-auto mt-0 max-w-[1400px] p-5 md:mt-10'>
              <div
                className={`${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col items-center justify-between gap-4 lg:gap-10`}
              >
                <div className='md:w-1/2 '>
                  <div className=''>
                    <div
                      className='md:text-md text-xs lg:text-lg'
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <Fade
                    direction={`${idx % 2 === 0 ? 'right' : 'left'}`}
                    delay={0.5}
                    fraction={0.2}
                    triggerOnce
                  >
                    <NextImage
                      useSkeleton
                      className='w-[300px] lg:mx-10 lg:w-[100%]'
                      src={item?.image?.node?.sourceUrl}
                      alt={item?.image?.node?.altText}
                      width='400'
                      height='200'
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <section
        className='flex h-[500px] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:mt-20 md:h-[500px] md:justify-between'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${allData?.pages?.nodes[0]?.sellingProperties?.bottomSection?.backgroundImage?.node?.sourceUrl})`,
        }}
      >
        <div className='mt-10 flex h-full flex-col items-center justify-center text-center '>
          {allData?.pages?.nodes[0]?.sellingProperties?.bottomSection
            ?.title && (
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>
              {
                allData?.pages?.nodes[0]?.sellingProperties?.bottomSection
                  ?.title
              }
            </h2>
          )}

          {allData?.pages?.nodes[0]?.sellingProperties?.bottomSection
            ?.description && (
            <div
              className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-12 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  allData?.pages?.nodes[0]?.sellingProperties?.bottomSection
                    ?.description,
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
      <div className='mt-10'>
        <h2 className='mb-5 text-center'>
          {allData?.pages?.nodes[0]?.sellingProperties?.contactSection?.title}
        </h2>
      </div>
      <ContactForm
        fields={fields}
        phone={
          allData?.pages?.nodes[0]?.sellingProperties?.contactSection?.phone
        }
        email={
          allData?.pages?.nodes[0]?.sellingProperties?.contactSection?.email
        }
        address={
          allData?.pages?.nodes[0]?.sellingProperties?.contactSection?.address
        }
        heading={false}
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
