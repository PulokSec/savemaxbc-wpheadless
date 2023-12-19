import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function NewsBottom(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section
      className='mt-40 flex min-h-[50vh] flex-col items-start justify-center overflow-x-hidden bg-cover bg-center md:min-h-screen '
      style={{
        backgroundImage: `url(${bottomSection?.backgroundImage?.sourceUrl})`,
      }}
    >
      <div className='mt-10 text-start xl:mt-20'>
        {bottomSection?.title && (
          <h2 className='my-10 text-start text-lg text-black md:text-5xl'>
            {bottomSection?.title}
          </h2>
        )}
        {bottomSection?.featureSubtitle && (
          <p className='text-md ml-10 text-start font-bold text-[#515151] md:text-3xl lg:ml-40 '>
            {bottomSection?.featureSubtitle}
          </p>
        )}
        {bottomSection?.featureTitle && (
          <p className='ml-10 mt-5 text-start text-lg font-bold text-black md:text-5xl lg:ml-40 '>
            {bottomSection?.featureTitle}
          </p>
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
        {bottomSection?.linkText && (
          <div className='ml-10 mt-10 text-center lg:ml-40'>
            <a
              href='/apply-now'
              className='text-uppercase relative mt-0 rounded border border-solid border-black px-3 py-2.5 text-sm font-semibold  text-black shadow-sm hover:bg-[#061632] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#061632] md:mt-[-20px] md:px-3.5'
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
