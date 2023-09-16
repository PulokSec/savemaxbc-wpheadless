import React from 'react';

const gallery = [
  {
    id: 1,
    title: 'Quality Over Quantity',
    image:
      'https://savemaxbc.com/wp-content/uploads/2023/09/quality-over-quantity.png',
  },
  {
    id: 2,
    title: 'Amazing Customer Relations',
    image:
      'https://savemaxbc.com/wp-content/uploads/2023/09/Top-Of-the-Line.png',
  },
  {
    id: 3,
    title: 'Highly Trained Realtors',
    image:
      'https://savemaxbc.com/wp-content/uploads/2023/09/Highly-Trained-Realtors.png',
  },
  {
    id: 4,
    title: 'Top of the Line Property Listings',
    image:
      'https://savemaxbc.com/wp-content/uploads/2023/09/amazing-customer-relations.png',
  },
  {
    id: 5,
    title: 'Above & Beyond Service',
    image:
      'https://savemaxbc.com/wp-content/uploads/2023/09/Above-Beyond-Service.png',
  },
];
export default function EnsureSection() {
  return (
    <section className="min-h-screen bg-[url('https://savemaxbc.com/wp-content/uploads/2023/09/ensure-highest-level-of-services.png')] bg-cover bg-center bg-no-repeat">
      <h2 className='px-5 pt-20 text-center text-[20px] text-white md:text-4xl'>
        HOW DO WE ENSURE HIGHEST LEVELS OF SERVICE?
      </h2>
      <div className='mt-20 grid grid-cols-12 items-center justify-center gap-4 md:ml-5'>
        <div className="col-span-12 ml-5 flex h-[400px] w-[350px] flex-col items-center justify-center bg-[url('https://savemaxbc.com/wp-content/uploads/2023/09/lower-middle-invest-in-our-realtors.png')] bg-cover bg-no-repeat px-5 md:col-span-3 md:col-start-2 md:col-end-5 md:h-[500px] md:w-[470px]">
          <h2 className='text-bold mt-10 text-center text-sm md:text-[32px]'>
            Invest in Our Realtors
          </h2>
          <p className='text-bolder text-md mt-10 px-5 text-center md:text-[18px]'>
            We invest in our Realtors. We have understood and acknowledged the
            role played by BC Realtors in ensuring the highest customer service
            levels and spare no efforts in equipping them to meet and surpass
            your expectations.
          </p>
        </div>
        <div className='col-span-12 flex items-center justify-center gap-4 px-5 md:col-span-6 md:col-start-5 md:col-end-11 md:ml-2'>
          {gallery?.map((item) => (
            <div
              className='col-span-2 flex h-[200px] items-center justify-center bg-cover md:col-span-2 md:h-[500px] md:w-[170px]'
              key={item?.id}
              style={{
                backgroundImage: `url(${item?.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
              }}
            >
              <h2 className='text-bold rotate-[-90deg] text-[5px] md:text-[20px] '>
                {item?.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
