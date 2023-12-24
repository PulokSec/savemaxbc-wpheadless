'use client';
import { useState } from 'react';

import NextImage from '@/components/NextImage';
import ContactForm from '@/components/pages/Contact/ContactForm';
import BannerWithButton from '@/components/pages/Locations/BannerWithButton';
import Contact from '@/components/shared/Contact';
import Footer from '@/components/shared/Footer';

const fields = [{ name: 'Buying' }, { name: 'Selling' }, { name: 'Other' }];

type MyProps = {
  allData: any;
};

export default function SellerGuideLanding(props: MyProps) {
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
        bannerData={allData?.pages?.nodes[0]?.sellerGuide?.bannerSection}
        headerData={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.headerSettings}
      />
      <div className='bg-[#E6E6E6] py-14 md:py-20'>
        <h2 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
          {allData?.pages?.nodes[0]?.sellerGuide?.topBannerTitle}
        </h2>
        <div
          className='md:text-md mx-auto mt-5 max-w-[1400px] px-10 text-center text-xs lg:text-lg'
          dangerouslySetInnerHTML={{
            __html: allData?.pages?.nodes[0]?.sellerGuide?.topBannerDescription,
          }}
        ></div>
      </div>
      <h2 className='px-4 py-5 text-center text-2xl md:px-10 md:text-3xl lg:py-10 lg:text-4xl'>
        {allData?.pages?.nodes[0]?.sellerGuide?.propertySelling?.title}
      </h2>

      {allData?.pages?.nodes[0]?.sellerGuide?.propertySelling?.sellingDiv?.map(
        (item: any, idx: number) => (
          <div key={idx}>
            <div className='mx-auto mt-0 max-w-[1400px] p-5 md:mt-10'>
              <div
                className={`${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col items-center justify-center gap-4 lg:gap-10`}
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
                  <NextImage
                    useSkeleton
                    className='w-[300px] lg:w-[100%]'
                    src={item?.image?.sourceUrl}
                    alt={item?.image?.altText}
                    width='600'
                    height='200'
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <p className='mx-auto mt-14 max-w-[1400px] px-2 text-center'>
        {allData?.pages?.nodes[0]?.sellerGuide?.bottomText}
      </p>
      <div className='mt-10 bg-[#e6e6e6]'>
        <Contact data={allData?.pages?.nodes[0]?.sellerGuide?.contactSection} />
      </div>
      <ContactForm
        fields={fields}
        phone={allData?.pages?.nodes[0]?.sellerGuide?.contactSection?.phone}
        email={allData?.pages?.nodes[0]?.sellerGuide?.contactSection?.email}
        address={allData?.pages?.nodes[0]?.sellerGuide?.contactSection?.address}
        heading={false}
      />

      <Footer
        navigation={allData?.menus?.nodes[0]?.menuItems?.nodes}
        settingsData={allData?.settingsOptions?.savemaxOptions?.footerSettings}
      />
    </main>
  );
}
