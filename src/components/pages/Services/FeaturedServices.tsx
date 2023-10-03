import React from 'react';

import NextImage from '@/components/NextImage';

import featured_fifth from '@/assets/services/feature-five.jpg';
import featured_fourth from '@/assets/services/feature-four.jpg';
import featured_first from '@/assets/services/feature-one.jpg';
import featured_seven from '@/assets/services/feature-seven.jpg';
import featured_sixth from '@/assets/services/feature-six.jpg';
import featured_third from '@/assets/services/feature-three.jpg';
import featured_second from '@/assets/services/feature-two.jpg';
const featuredData = [
  {
    id: 1,
    title: 'Comprehensive Property Assessment:',
    description: `Our journey begins with a detailed assessment of your property. Our experienced professionals conduct a thorough evaluation, considering factors such as location, condition, market trends, and comparable sales. This assessment provides you with a clear understanding of your property's market value, allowing you to set a competitive and realistic asking price.`,
    image: featured_first,
  },
  {
    id: 2,
    title: 'Strategic Pricing and Marketing:',
    description: `Setting the right price is crucial to attracting potential buyers. Leveraging our market insights, we assist you in strategically pricing your property to optimize its marketability. Our expert marketing team develops tailored strategies, utilizing cutting-edge techniques, professional photography, and compelling descriptions to showcase your property's unique features and attract a wide pool of qualified buyers.`,
    image: featured_second,
  },
  {
    id: 3,
    title: 'Maximum Exposure Across Platforms:',
    description: `Your property deserves maximum exposure to reach its full selling potential. We list your property on multiple platforms, including our website, MLS, social media, and print media, ensuring it reaches a wide audience of potential buyers locally and beyond. Our targeted marketing efforts generate interest and inquiries, increasing the likelihood of a quick and successful sale.`,
    image: featured_third,
  },
  {
    id: 4,
    title: 'Skilled Negotiation:',
    description: `Negotiating the terms of a sale requires finesse and expertise. Our skilled negotiators work diligently on your behalf to secure the best possible deal. From price negotiations to contingencies, our goal is to protect your interests while facilitating a smooth transaction that meets your selling objectives.`,
    image: featured_fourth,
  },
  {
    id: 5,
    title: 'Paperwork and Legal Support:',
    description: `The paperwork involved in a real estate transaction can be overwhelming. Our team ensures that all necessary documents and contracts are accurately prepared and reviewed, adhering to legal requirements and protecting your rights as a seller. We guide you through the process, minimizing stress and ensuring a seamless transition.`,
    image: featured_fifth,
  },
  {
    id: 6,
    title: 'Timely and Hassle-Free Transactions:',
    description: `Our focus is on streamlining the selling process for you. We coordinate property showings, handle inquiries, and ensure all deadlines are met. Our dedicated team manages the details, allowing you to focus on other priorities while enjoying a hassle-free selling experience.`,
    image: featured_sixth,
  },
  {
    id: 7,
    title: 'Post-Sale Support:',
    description: `Our commitment to you extends beyond the sale. Whether you have questions about the closing process, tax implications, or future real estate endeavors, we're here to provide ongoing support and guidance.`,
    image: featured_seven,
  },
];
export default function FeaturedServices() {
  return (
    <div className='max-w-screen overflow-x-hidden bg-[url("https://savemaxbc.com/wp-content/uploads/2023/09/Middle_part_bg.png")] bg-cover bg-no-repeat'>
      <section>
        <div className='py-10 md:py-20'>
          <div className='mx-auto w-full'>
            {featuredData?.map((item: any, i: number) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-between gap-4 md:mt-20 md:gap-0 lg:mx-0 lg:max-w-none'
                >
                  <div className='ml-5 md:ml-40 lg:mt-20'>
                    <div className='container'>
                      <h2 className='w-full text-2xl text-sky-950 md:w-[500px] md:text-5xl'>
                        <span className='text-[#525659]'>
                          {item?.title?.split(/ (.*)/)[0]}
                        </span>{' '}
                        {item?.title?.split(/ (.*)/)[1]}
                      </h2>
                      <p className='mt-5 text-xs md:w-[600px] md:text-lg'>
                        {item?.description}
                      </p>
                      <div className='mt-10 text-start'>
                        <a
                          href='#'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <NextImage
                      useSkeleton
                      className='contain w-50 md:w-[600px]'
                      width='0'
                      height='0'
                      src={item?.image}
                      alt='Icon'
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className='mx-auto mt-10 flex items-center justify-between gap-4 md:mt-20 lg:mx-0 lg:max-w-none'
                >
                  <div className=''>
                    <NextImage
                      useSkeleton
                      className='contain w-50 md:w-[600px]'
                      width='0'
                      height='0'
                      src={item?.image}
                      alt='Icon'
                    />
                  </div>
                  <div className='mt-5 pr-5 md:pr-40'>
                    <div className='lg:w-full'>
                      <h2 className='w-full text-2xl text-sky-950 md:w-[500px] md:text-5xl'>
                        <span className='text-[#525659]'>
                          {item?.title?.split(/ (.*)/)[0]}
                        </span>{' '}
                        {item?.title?.split(/ (.*)/)[1]}
                      </h2>
                      <p className='mt-5 text-xs md:w-[600px] md:text-lg'>
                        {item?.description}
                      </p>
                      <div className='mt-10 text-start'>
                        <a
                          href='#'
                          className='mt-10 border border-solid px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950'
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
}
