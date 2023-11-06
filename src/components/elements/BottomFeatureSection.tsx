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
          className='mt-5 leading-5'
          dangerouslySetInnerHTML={{
            __html: bottomSection?.featureTitle,
          }}
        ></div>
        <div
          className='container mx-auto mt-10'
          dangerouslySetInnerHTML={{
            __html: bottomSection?.featureDescription,
          }}
        ></div>
      </div>
    </section>
  );
}
