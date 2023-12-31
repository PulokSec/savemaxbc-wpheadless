import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomFeatureSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-10 flex h-[60vh] flex-col items-center overflow-x-hidden bg-cover bg-center text-white lg:mt-20 md:justify-between xl:h-[80vh]'
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
            className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-xs md:pb-0 lg:text-lg'
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
      </div>
    </section>
  );
}
