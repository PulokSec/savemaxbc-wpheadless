import React from 'react';

import img3 from '../../../assets/homelanding/commercial-buyers.png';
import img6 from '../../../assets/homelanding/commercial-sellers.png';
import img1 from '../../../assets/homelanding/first-time-buyers.png';
import img2 from '../../../assets/homelanding/investment-buyers.png';
import img5 from '../../../assets/homelanding/New-Development.png';
import img4 from '../../../assets/homelanding/Selling-Your.png';
import Image from 'next/image';

const data = [
  {
    title: 'First Time Home Buyers',
    desc: 'Navigating the real estate market as a first-time homebuyer in British Columbia can be daunting. Save Max Westcoast Realty Inc understands the unique challenges you face and is committed to making your journey seamless. Our experienced agents specialize in guiding first-time buyers through the intricate process, offering expert advice on market trends, financing options, and government incentives. With a personalized approach, we strive to find your dream home while ensuring a smooth and stress-free transaction. Trust us to be your reliable partner in achieving your homeownership goals in beautiful British Columbia.',
    img: img1,
  },
  {
    title: 'Investment Buyers',
    desc: 'For savvy investment buyers in British Columbia, we are your strategic partner in building a lucrative real estate portfolio. Our team excels in identifying high-potential properties, analyzing market trends, and maximizing returns on your investment. With a deep understanding of the local market, we offer tailored guidance on optimal locations and emerging opportunities. We are dedicated to delivering a seamless investment experience, from property selection to negotiation, ensuring that your investment goals are not only met but exceeded in the dynamic BC real estate market.',
    img: img2,
  },
  {
    title: 'Commercial Buyers',
    desc: 'For commercial buyers in British Columbia, we are your trusted ally in securing prime business properties. Our team specializes in understanding the unique needs of commercial buyers, offering comprehensive insights into market dynamics, zoning regulations, and investment potential. Whether you seek retail spaces, office complexes, or industrial facilities, we leverage our expertise to match your business requirements with the ideal commercial property. Save Max Westcoast Realty Inc is committed to facilitating a smooth and efficient transaction process, ensuring that your commercial venture thrives in the vibrant business landscape of BC.',
    img: img3,
  },
  {
    title: 'Selling Your Home',
    desc: "When selling your home in British Columbia, trust Save Max Westcoast Realty Inc to navigate the market with expertise and precision. Our seasoned agents employ strategic marketing, leveraging local insights to showcase your property's unique features. With a commitment to maximizing your property's value, we handle negotiations with finesse, ensuring a seamless and profitable sale. Choose Save Max Westcoast Realty Inc for a dedicated partner in achieving optimal results in the BC real estate market.",
    img: img4,
  },
  {
    title: 'New Development And Pre-Construction',
    desc: 'Explore the future of living in British Columbia with Save Max Westcoast Realty Inc as your guide to new developments and pre-construction projects. Our team stays ahead of the curve, providing exclusive access to emerging opportunities and prime locations. With a keen eye for potential and a commitment to excellence, we assist clients in securing their dream homes or investment properties before they hit the market. Trust Save Max Westcoast Realty Inc for a firsthand look at the latest in BC real estate innovation.',
    img: img5,
  },
  {
    title: 'Commercial Seller',
    desc: 'Unlock the full potential of your commercial property sale in British Columbia with Save Max Westcoast Realty Inc. Our seasoned team specializes in maximizing value through strategic marketing, local market insights, and targeted outreach to potential buyers. With a track record of successful transactions, we tailor our approach to meet the unique needs of commercial sellers, ensuring a seamless and profitable sale. Trust Save Max Westcoast Realty Inc to be your partner in achieving optimal results in the dynamic BC commercial real estate market.',
    img: img6,
  },
];

const NewFeatureSection = () => {
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/Middle-part-bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='mx-auto py-10 lg:py-20'>
          <div>
            <h1 className='px-10 text-center text-2xl md:text-3xl lg:text-4xl'>
              Save Max Westcoast Realty Inc
            </h1>
            <div
              className='md:text-md mt-5 px-10 text-center text-xs lg:text-lg'
              // dangerouslySetInnerHTML={{
              //   __html: featuredData?.featureDescription,
              // }}
            >
              Buy Or Sell Your Home With Expert Agents
            </div>
          </div>
          <div className='w-full'>
            {data?.map((item: any, i: number) =>
              i % 2 === 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'
                >
                  <div className='mx-auto flex w-full flex-col items-start md:w-1/2 xl:w-4/6'>
                    <div className='mx-auto w-3/4 xl:w-3/5'>
                      <h1 className=' text-3xl lg:text-[40px] lg:leading-tight xl:text-[50px] 2xl:text-[60px] '>
                        {item?.title}
                      </h1>
                      <div
                        className='md:text-md  mt-5  text-justify text-xs lg:text-lg'
                        // dangerouslySetInnerHTML={{
                        //   __html: item?.description,
                        // }}
                      >
                        {item?.desc}
                      </div>
                      <div className=' mt-2  py-10 text-start'>
                        <a
                          href='/services'
                          className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-end justify-end md:w-1/2 xl:w-1/3'>
                    <Image
                      className='hidden md:block'
                      src={item?.img}
                      width={500}
                      height={500}
                      alt='img'
                    />
                    <Image
                      className='md:hidden'
                      src={item?.img}
                      width={250}
                      height={250}
                      alt='img'
                    />
                    {/* <div className='block xl:hidden'>
                      <Image src={item?.img} width={100} height={100} alt='' />
                    </div> */}
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:gap-0'
                >
                  <div className='flex w-full items-start justify-start md:w-1/2 xl:w-2/5'>
                    <Image
                      className='hidden md:block'
                      src={item?.img}
                      width={500}
                      height={500}
                      alt='img'
                    />
                    <Image
                      className='md:hidden'
                      src={item?.img}
                      width={250}
                      height={250}
                      alt='img'
                    />
                  </div>
                  <div className='mx-auto flex w-full flex-col items-end md:w-1/2 xl:w-3/5'>
                    <div className='mx-auto w-3/4 xl:w-2/3'>
                      <h1 className=' text-3xl lg:text-[40px] lg:leading-tight xl:text-[50px] 2xl:text-[60px] '>
                        {item?.title}
                      </h1>
                      <div
                        className='md:text-md  mt-5  text-justify text-xs lg:text-lg'
                        // dangerouslySetInnerHTML={{
                        //   __html: item?.description,
                        // }}
                      >
                        {item?.desc}
                      </div>
                      <div className=' mt-2  py-10 text-start'>
                        <a
                          href='/services'
                          className='mt-10 border border-solid px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewFeatureSection;
