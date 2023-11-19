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
      <div className='mt-10 text-center xl:mt-20'>
        <div
          className='text-md text-bold mt-5 px-5 leading-8 md:text-xl lg:mt-10 lg:text-2xl'
          dangerouslySetInnerHTML={{
            __html: bottomSection?.featureTitle || bottomSection?.title,
          }}
        ></div>
        {bottomSection?.featureDescription ||
          (bottomSection?.description && (
            <div
              className='text-leading-5 md:text-md container mx-auto mt-10 px-5 pb-10 text-xs md:pb-0 lg:text-lg'
              dangerouslySetInnerHTML={{
                __html:
                  bottomSection?.featureDescription ||
                  bottomSection?.description,
              }}
            ></div>
          ))}
      </div>
    </section>
  );
}
