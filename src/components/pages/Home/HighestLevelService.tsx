'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import img6 from '../../../assets/homelanding/How Do we ensure/Above _ Beyond Service.png';
import img3 from '../../../assets/homelanding/How Do we ensure/amazing customer relations.png';
import img4 from '../../../assets/homelanding/How Do we ensure/Highly Trained Realtors.png';
import img1 from '../../../assets/homelanding/How Do we ensure/lower middle invest in our realtors.png';
import img2 from '../../../assets/homelanding/How Do we ensure/quality over quantity.png';
import img5 from '../../../assets/homelanding/How Do we ensure/Top Of the Line.png';

const data = [
  {
    title: 'Invest in Our Realtors',
    desc: 'We invest in our Realtors. We have understood and acknowledged the role played by Realtors in ensuring highest customer service levels and spare no efforts in equipping them to meet and surpass your expectations.',
    img: img1,
  },
  {
    title: 'Quality Over Quantity',
    desc: 'We put quality over quantity. We focus on having a lean and smart team who are highly knowledgeable and productive.',
    img: img2,
  },
  {
    title: 'Amazing Customer Relations',
    desc: 'Our customers, be it buyers or sellers are treated as partners and the relationships we establlish transcend from transactional to ones that last a lifetime.',
    img: img3,
  },
  {
    title: 'Highly Trained Realtors',
    desc: 'Every one of our realtors is chosen after a thorough evaluation process. They are made to undergo a rigorous training to equip them with market and statutory knowledge. Our realtors are equipped with the latest CRM tools to elevate customer engagement to the next level. Weekly and monthly training by experts from within the corporate as well as external subject matter experts ensure that our realtors possess sufficient knowledge and acumen to give holistic advice on real estate to every client.',
    img: img4,
  },
  {
    title: 'Top Of the Line Property Listings',
    desc: 'Properties listed by our agents are taken up for extensive social media and print advertising to ensure exposure to potential buyers across Canada and even abroad. This, coupled with top of the ine virtual tour and staging services plus top quality feature sheets ensures a very quick turnaround for every listed property at the best market price.',
    img: img5,
  },
  {
    title: 'Above & Beyond Service',
    desc: 'We provide comprehensive real estate advice to our buyers. From arranging affordable mortgage plans to helping our clients choose the right location and property, our realtors go above and beyond their duties to ensure happiness and satisfaction of each customer.',
    img: img6,
  },
];

const HighestLevelService = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);
  return (
    <div
      // style={{
      //   backgroundImage: `url('https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/ensure-highest-level-of-services.png)`,
      // }}
      className='max-w-screen relative min-h-[100vh] overflow-x-hidden bg-[url("https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/10/ensure-highest-level-of-services.png")] bg-cover bg-center bg-no-repeat'
    >
      <h2 className='z-2 mb-8 mt-20 text-center uppercase text-white md:mb-16 lg:mt-36'>
        How do we ensure highest level of service
      </h2>

      <div className='hidden md:block'>
        <div className='mx-auto flex w-11/12 items-center justify-center gap-5 lg:w-11/12 lg:gap-10 2xl:w-3/4 '>
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? ' w-[500px] flex-col items-center justify-center'
                  : 'w-[150px] items-center justify-center text-center'
              } ${
                idx === 1
                  ? ' overflow-hidden rounded-bl-2xl rounded-tl-2xl'
                  : idx === data.length - 1
                  ? 'overflow-hidden rounded-br-2xl rounded-tr-2xl'
                  : 'overflow-hidden rounded-2xl'
              } relative flex h-96 cursor-pointer  p-2 md:h-[500px] lg:h-[450px] xl:h-80`}
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
                className='object-cover opacity-50'
                alt='img'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='py-5 md:hidden'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                selectedDiv === idx
                  ? ' w-[320px] flex-col items-center justify-center'
                  : 'w-[100px] items-center justify-center text-center'
              } relative flex h-[250px] cursor-pointer p-2 `}
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
