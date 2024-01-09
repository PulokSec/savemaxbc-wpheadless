'use client';
import { MailCheck, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  item: any;
  index: number
};

const RealtorCard = (props: Props) => {
  const { item, index } = props;
    const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
      key={index}
      className=' flex h-[500px] w-[300px] flex-col items-center justify-center overflow-hidden rounded xl:w-[325px]'
    >
      <div
        className='relative mb-5 h-[400px] w-[300px] xl:w-[325px] '
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
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
  );
};

export default RealtorCard;
