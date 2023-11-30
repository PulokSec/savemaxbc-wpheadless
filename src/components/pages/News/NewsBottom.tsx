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
        {bottomSection?.featureTitle && (
          <h2 className='my-10 ml-10 text-start text-lg text-black md:text-5xl lg:ml-40 '>
            {bottomSection?.featureTitle}
          </h2>
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
          <div className='ml-10 mt-5 text-center lg:ml-40'>
            <a
              href='/apply-now'
              className='text-uppercase relative mt-0 rounded border border-solid border-black px-3 py-2.5 text-sm font-semibold  text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:mt-[-20px] md:px-3.5'
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
