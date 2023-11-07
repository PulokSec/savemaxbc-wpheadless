import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomFeatureSection(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='bg-20 mt-40 flex min-h-[30vh] flex-col items-center overflow-x-hidden md:min-h-screen md:justify-between'
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='text-center'>
        <div
          className='text-md mt-5 px-5 leading-8 md:text-xl lg:mt-10'
          dangerouslySetInnerHTML={{
            __html: bottomSection?.featureTitle,
          }}
        ></div>
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
