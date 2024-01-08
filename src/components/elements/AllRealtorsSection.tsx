'use client';
import { MailCheck, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
  allRealtors: any;
};

const AllRealtorsSection = (props: Props) => {
  const { allRealtors } = props;
  const [hovered, setHovered] = useState<number | null>(null);
  const [part, setPart] = useState(1);
  const [realtors, setRealtors] = useState<any>(
    allRealtors?.realtorCard?.slice(0, 8)
  );
  useEffect(() => {
    const begin = (part - 1) * 8;
    const end = part * 8;
    setRealtors(allRealtors?.realtorCard?.slice(begin, end));
  }, [part]);
  return (
    <div className='mt-40'>
      <h2
        className=' px-2 pt-5 text-center text-2xl text-gray-800 md:mb-20 md:text-3xl lg:text-5xl'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.title,
        }}
      ></h2>
      <div
        className='mx-auto mt-5 max-w-[1400px] px-5 text-xs leading-5 text-[#515151] md:text-lg'
        dangerouslySetInnerHTML={{
          __html: allRealtors?.description,
        }}
      ></div>
      <div className='mx-auto max-w-[1400px] px-3'>
        <div className='mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 md:gap-y-14'>
          {realtors?.map((item: any, index: number) => (
            <div
              key={index}
              className=' flex h-[500px] w-[300px] flex-col items-center justify-center overflow-hidden rounded xl:w-[325px]'
            >
              <div
                className='relative mb-5 h-[400px] w-[300px] xl:w-[325px] '
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {item?.image ? (
                  <>
                    <Image
                      src={item?.image?.sourceUrl}
                      fill={true}
                      alt={item?.image?.altText}
                      className={`${
                        hovered === index ? ' scale-[98%] opacity-70' : ''
                      } h-[400px] w-[300px] rounded object-cover transition-all duration-500 ease-in-out xl:w-[325px]`}
                    />
                    <div className='absolute bottom-0 h-1 w-full rounded bg-[#AA752A]'></div>
                    <div
                      className={`${
                        hovered === index ? 'opacity-30' : 'opacity-30'
                      } absolute left-0 top-0 h-full w-full rounded bg-black transition-all duration-500 ease-in-out`}
                    ></div>
                  </>
                ) : (
                  <div className='h-full w-full rounded bg-[#AA752A]'></div>
                )}

                <h3 className='absolute bottom-6 left-4 rounded bg-sky-950 px-2 py-1 text-lg font-medium tracking-wide text-gray-100 lg:text-[22px]'>
                  {item?.name}
                </h3>
              </div>
              <div className='flex w-[300px] flex-col items-start justify-start xl:w-[325px]'>
                <a
                  href={`tel:${item?.phone}`}
                  className='mb-2 flex items-center gap-2 px-2 hover:text-[#AA752A]'
                >
                  <Phone className='-mt-1 h-5 w-5' /> <p>{item?.phone}</p>
                </a>
                <a
                  href={`mailto:${item?.email}`}
                  className='flex items-center gap-2 px-2 hover:text-[#AA752A]'
                >
                  <MailCheck className='h-5 w-5' /> <p>{item?.email}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-3'>
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              className='rounded-full bg-sky-950 px-3 py-1 text-white hover:bg-sky-900'
              onClick={() => setPart(index + 1)}
            >
              <p className='mt-1'>{index + 1}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRealtorsSection;
