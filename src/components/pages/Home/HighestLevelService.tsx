'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import img6 from '../../../assets/homelanding/How Do we ensure/Above _ Beyond Service.png';
import img3 from '../../../assets/homelanding/How Do we ensure/amazing customer relations.png';
import background from '../../../assets/homelanding/How Do we ensure/ensure highest level of services.png';
import img4 from '../../../assets/homelanding/How Do we ensure/Highly Trained Realtors.png';
import img1 from '../../../assets/homelanding/How Do we ensure/lower middle invest in our realtors.png';
import img2 from '../../../assets/homelanding/How Do we ensure/quality over quantity.png';
import img5 from '../../../assets/homelanding/How Do we ensure/Top Of the Line.png';

const data = [
  {
    title: 'Client-Centric Approach',
    desc: 'Save Max Westcoast Realty Inc takes pride in its client-centric approach, placing your needs and goals at the forefront of every interaction. Our dedicated team is committed to understanding your unique requirements, ensuring that our services are tailored to deliver the highest level of satisfaction. From the initial consultation to the closing of a deal, we prioritize transparent communication and unwavering support to make your real estate journey seamless and rewarding.',
    img: img1,
  },
  {
    title: 'Expert Guidance',
    desc: 'Our seasoned professionals bring a wealth of knowledge and expertise to the table. Save Max Westcoast Realty Inc is committed to providing expert guidance backed by up-to-date market insights. Whether you are a first-time homebuyer, an investor, or a commercial client, our team is equipped to navigate the complexities of the real estate landscape, ensuring informed decision-making and maximizing the value of your investment.',
    img: img2,
  },
  {
    title: 'Cutting-Edge Technology',
    desc: 'Save Max Westcoast Realty Inc stays at the forefront of technological advancements in the real estate industry. We leverage cutting-edge tools and platforms to streamline processes, enhance marketing strategies, and provide you with a competitive edge. Our commitment to embracing the latest technology ensures that you benefit from efficient and effective solutions tailored to the modern real estate landscape.',
    img: img3,
  },
  {
    title: 'Personalized Marketing Strategies',
    desc: "Understanding that each property is unique, Save Max Westcoast Realty Inc develops personalized marketing strategies to showcase your property's distinctive features. From professional photography and compelling listing descriptions to targeted online and offline marketing efforts, we go above and beyond to ensure your property receives the attention it deserves in the market, attracting potential buyers and maximizing its visibility.",
    img: img4,
  },
  {
    title: 'Integrity and Transparency',
    desc: 'Integrity and transparency are the cornerstones of our business. Save Max Westcoast Realty Inc is dedicated to maintaining the highest ethical standards in all our dealings. We believe in providing transparent information, honest advice, and clear communication throughout the entire process. You can trust that our commitment to integrity ensures a trustworthy and reliable partnership.',
    img: img5,
  },
  {
    title: 'Ongoing Support and Community',
    desc: "Our commitment to you extends beyond the transaction. We consider our clients valued members of our real estate community, and our support doesn't end at the closing of a deal. Whether you have questions months after your purchase or need advice for your next venture, our team is dedicated to providing ongoing support, ensuring you always have a trusted partner in your real estate journey. Your success and satisfaction are paramount to us, making your experience with Save Max Westcoast Realty Inc a lasting and rewarding partnership.",
    img: img6,
  },
];

const HighestLevelService = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);
  return (
    <div
      style={{
        backgroundImage: `url(${background}) no-repeat center center`,
        backgroundSize: '100% 100%',
      }}
      className='relative bg-cover pb-24 pt-20 md:pb-36'
    >
      <h2 className='z-2 mb-8 text-center uppercase text-white md:mb-16'>
        How do we ensure highest level of service
      </h2>
      <Image
        src={background}
        fill={true}
        alt='bgImg'
        style={{
          borderBottomLeftRadius: '50% 10%',
          borderBottomRightRadius: '50% 10%',
        }}
        className='z-1'
      />
      <div className='hidden md:block'>
        <div className='mx-auto flex w-11/12 items-center justify-center gap-5 lg:w-11/12 lg:gap-10 2xl:w-3/4 '>
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? ' w-[500px] flex-col items-center justify-center'
                  : 'w-[150px] items-center justify-center text-center'
              } relative flex h-96 cursor-pointer rounded-lg  p-2 md:h-[600px] lg:h-[500px] xl:h-[350px]`}
              onClick={() => setSelectedDiv(idx)}
            >
              <h3
                className={`${
                  selectedDiv === idx
                    ? 'mb-1'
                    : 'rotate-180 [writing-mode:vertical-rl]'
                } text-center text-xl text-slate-200 xl:text-[22px]`}
              >
                {item.title}
              </h3>
              {selectedDiv === idx && (
                <p className='text-center text-slate-200 lg:px-2 2xl:px-5'>
                  {item.desc}
                </p>
              )}
              <Image
                src={item?.img}
                fill={true}
                className='rounded-2xl object-cover opacity-50'
                alt='img'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='md:hidden'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? ' w-[320px] flex-col items-center justify-center'
                  : 'w-[100px] items-center justify-center text-center'
              } relative flex h-[320px] cursor-pointer rounded-lg p-2 `}
              onClick={() => setSelectedDiv(idx)}
            >
              <h3
                className={`${
                  selectedDiv === idx
                    ? 'mb-1'
                    : 'rotate-180 [writing-mode:vertical-rl]'
                } text-center text-lg text-slate-200 `}
              >
                {item.title}
              </h3>
              {selectedDiv === idx && (
                <p className='text-center text-[15px] text-slate-200'>
                  {item.desc}
                </p>
              )}
              <Image
                src={item?.img}
                fill={true}
                className='rounded-2xl object-cover opacity-50'
                alt='img'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighestLevelService;
