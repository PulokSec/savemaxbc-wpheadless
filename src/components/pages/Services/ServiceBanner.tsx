import React from 'react';

import Header from '@/components/shared/Header';
type MyProps = {
  // bannerData: any;
  headerData: any;
  settingsData: any;
};
export default function ServiceBanner(props: MyProps) {
  const { headerData, settingsData } = props;
  return (
    <div
      className='relative h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-blend-screen md:h-[100vh]'
      style={{
        backgroundImage:
          "url('https://savemaxbc.com/wp-content/uploads/2023/10/landing-page.jpg')",
      }}
    >
      <Header navigation={headerData} settingsData={settingsData} />
      <div className='mx-auto py-16'>
        <div className='mx-auto ml-0 flex w-[380px]  flex-col items-center justify-center text-center md:ml-40 md:mt-[10%] md:w-[500px] md:items-start'>
          <p className='text-leading-3 text-center text-lg font-bold text-[#525659] md:text-start md:text-5xl'>
            Save Max Westcoast
          </p>
          <p className='text-leading-3 text-md mt-5 text-lg font-bold text-sky-950 md:text-6xl'>
            Seller Services
          </p>
          <div className='mt-8 text-center text-black md:text-start'>
            <p className='text-md'>
              Embarking on the journey of selling your property requires a
              strategic and comprehensive approach. At Save Max Westcoast, we
              understand the significance of this endeavor, and we're here to
              guide you through every step of the process. Our tailored services
              are designed to ensure that you achieve your property selling
              goals seamlessly and successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
