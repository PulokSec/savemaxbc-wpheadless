import React from 'react';

type MyProps = {
  featuredData: any;
};
const HomeBuyingProcess = (props: MyProps) => {
  const { featuredData } = props;
  return (
    <div>
      <div
        style={{
          background: `url(${featuredData?.backgroundImage?.sourceUrl}) no-repeat  center center`,
          backgroundSize: '100% 100%',
        }}
        className={` relative mt-10 p-10 py-[300px] pb-[500px] text-white lg:mt-20 lg:py-[130px] lg:pb-[900px]`}
      >
        <div className='mx-auto mb-20 max-w-[1250px] text-center'>
          <h2 className='text-[30px] font-semibold'>
            {featuredData?.featureTitle}
          </h2>

          <div
            className='mx-auto w-full lg:w-2/4'
            dangerouslySetInnerHTML={{
              __html: featuredData?.featureDescription,
            }}
          ></div>
        </div>

        <div className=' mx-auto max-w-[1250px] lg:relative lg:mt-20'>
          <div className='lg:relative'>
            <div className='items-center justify-between lg:relative lg:flex '>
              {featuredData?.featuredDiv?.map((item: any, index: number) => {
                if (index < 2)
                  return (
                    <div key={index}>
                      <div className='relative z-10 h-[80px] w-[80px] rounded-full bg-white text-black'>
                        <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[30px] font-bold'>
                          {index + 1}
                        </p>
                      </div>
                      <div className='mt-5 lg:absolute'>
                        <h3 className='text-[18px] font-semibold'>
                          {item?.title}
                        </h3>

                        <div
                          className='text-[12px] lg:w-[400px]'
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
              })}
              <div className=''></div>

              <div className='absolute  right-0  top-10 z-0 hidden  h-[700px] w-[5px] items-center bg-[#FFD700] lg:flex'></div>
            </div>

            <div className='absolute  bottom-10 right-0 z-0 hidden  h-[5px] w-full  items-center bg-[#FFD700] lg:flex'></div>
          </div>

          <div className='mt-5 lg:relative'>
            <div className='right-[-30px] top-[220px] lg:absolute'>
              <div className='relative z-10  h-[80px] w-[80px] rounded-full bg-white text-black'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[30px] font-bold'>
                  3
                </p>
              </div>
            </div>
            <div className='right-[70px] top-[210px] mt-3 lg:absolute lg:text-right'>
              <h3 className='text-[18px] font-semibold'>
                {featuredData?.featuredDiv[2]?.title}
              </h3>

              <div
                className='text-[12px] lg:w-[400px]'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featuredDiv[2]?.description,
                }}
              ></div>
            </div>
          </div>

          <div className='mt-5 lg:relative'>
            <div className='right-[580px] top-[600px] mt-3 lg:absolute lg:mt-0'>
              <div className='relative z-10  h-[80px] w-[80px] rounded-full bg-white text-black'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[30px] font-bold'>
                  4
                </p>
              </div>
            </div>

            <div className='right-[380px] top-[430px] mt-3 lg:absolute lg:mt-0'>
              <h3 className='text-[18px] font-semibold'>
                {featuredData?.featuredDiv[3]?.title}
              </h3>

              <div
                className='text-[12px] lg:w-[400px]'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featuredDiv[3]?.description,
                }}
              ></div>
            </div>
          </div>

          <div className='mt-5 lg:relative'>
            <div className='left-0 top-[600px] mt-3 lg:absolute lg:mt-0'>
              <div className='relative z-10  h-[80px] w-[80px] rounded-full bg-white text-black'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[30px] font-bold'>
                  5
                </p>
              </div>
            </div>

            <div className='left-0 top-[400px] mt-3 lg:absolute lg:mt-0'>
              <h3 className='text-[18px] font-semibold'>
                {featuredData?.featuredDiv[4]?.title}
              </h3>

              <div
                className='text-[12px] lg:w-[400px]'
                dangerouslySetInnerHTML={{
                  __html: featuredData?.featuredDiv[4]?.description,
                }}
              ></div>
            </div>
          </div>

          <div className='absolute  right-0 top-[740px] z-0  hidden h-[5px]  w-full items-center bg-[#FFD700] lg:flex'></div>
        </div>

        <div
          className='absolute bottom-[200px] left-1/2 mx-auto w-full  max-w-[1250px] -translate-x-1/2 -translate-y-1/2 transform p-3 text-center lg:bottom-20 lg:w-2/4'
          dangerouslySetInnerHTML={{
            __html: featuredData?.bottomFeatureDescription,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeBuyingProcess;
