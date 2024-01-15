import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomFeatureSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-10 flex h-[60vh] flex-col items-center overflow-x-hidden bg-cover bg-center text-white md:justify-between lg:mt-20 xl:h-[80vh]'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)),url(${bottomSection?.backgroundImage?.sourceUrl})`,
        overflow: 'hidden',
      }}
    >
      <div className='mt-10 text-center xl:mt-20'>
        {bottomSection?.title && (
          <h2
            className='text-md mt-5 px-5 font-bold leading-8 md:text-xl lg:mt-10 lg:text-3xl'
            dangerouslySetInnerHTML={{
              __html: bottomSection?.title,
            }}
          ></h2>
        )}
        {bottomSection?.featureTitle && (
          <div
            className='text-md mt-5 px-5 font-bold leading-8 md:text-xl lg:mt-10 lg:text-5xl'
            dangerouslySetInnerHTML={{
              __html: bottomSection?.featureTitle,
            }}
          ></div>
        )}

        {bottomSection?.description && (
          <div
            className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-justify text-xs md:pb-0 lg:px-16 lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: bottomSection?.description,
            }}
          ></div>
        )}
        {bottomSection?.featureDescription && (
          <div
            className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-xs md:pb-0 lg:text-lg'
            dangerouslySetInnerHTML={{
              __html: bottomSection?.featureDescription,
            }}
          ></div>
        )}
        <div className='flex items-center justify-center'>
          <a
            href='/contact-us'
            className='text-uppercase mt-5 rounded-xl border border-solid bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:px-3.5 md:py-2.5 md:text-lg'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
