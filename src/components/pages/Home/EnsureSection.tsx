import React from 'react';

type MyProps = {
  ensureData: any;
};
export default function EnsureSection(props: MyProps) {
  const { ensureData } = props;
  return (
    <section className='min-h-screen overflow-x-hidden bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/ensure-highest-level-of-services.png")] bg-cover bg-center bg-no-repeat md:pt-[10%]'>
      <h2 className='px-5 pt-10 text-center text-[20px] text-white md:text-4xl'>
        {ensureData?.heading}
      </h2>
      <div className='mt-20 grid grid-cols-12 items-center justify-center gap-4 md:flex'>
        <div className='col-span-12 ml-5 flex h-[300px] w-[350px] flex-col items-center justify-center bg-[url("https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/lower-middle-invest-in-our-realtors.png")] bg-cover bg-no-repeat px-5 md:col-start-2 md:ml-0 md:h-[300px] md:w-[270px]'>
          <h2 className='text-center text-sm font-bold md:text-[24px]'>
            {ensureData?.title}
          </h2>
          <p className='font-bolder mt-10 px-5 text-center text-sm md:text-[14px]'>
            {ensureData?.description}
          </p>
        </div>
        {ensureData?.gallery?.map((item: any) => (
          <div
            className='col-span-2 hidden h-[200px] items-center justify-center bg-cover md:flex md:h-[300px] md:w-[100px]'
            key={item?.title}
            style={{
              backgroundImage: `url(${item?.image?.node?.sourceUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundPosition: 'center',
            }}
          >
            <div className='rotate-[-90deg]'>
              <h2 className='inline-block text-center text-[5px] leading-5 md:w-[210px] md:text-[18px]'>
                {item?.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className=' mt-10 flex items-center justify-center gap-4 md:hidden'>
        {ensureData?.gallery?.map((item: any) => (
          <div
            className='col-span-2 flex h-[200px] items-center justify-center bg-cover md:h-[300px] md:w-[100px]'
            key={item?.title}
            style={{
              backgroundImage: `url(${item?.image?.node?.sourceUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundPosition: 'center',
            }}
          >
            <div className='rotate-[-90deg]'>
              <h2 className='text-[5px] md:text-[12px]'>{item?.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
