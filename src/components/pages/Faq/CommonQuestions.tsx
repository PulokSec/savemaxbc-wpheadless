'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

type MyProps = {
  title: any;
  questionBg: any;
  questions: any;
};
export default function CommonQuestions(props: MyProps) {
  const { title, questionBg, questions } = props;
  const [show, setShow] = useState({
    index: 0,
    open: true,
  });

  const handleItemClick = (i: number) => {
    if (i === show.index) {
      setShow((prevState) => ({
        ...prevState,
        index: i,
        open: !prevState.open,
      }));
    } else {
      setShow((prevState) => ({
        ...prevState,
        index: i,
        open: true,
      }));
    }
  };

  return (
    <section
      className=''
      style={{
        backgroundImage: `url(${questionBg?.node?.sourceUrl})`,
        objectFit: 'contain',
      }}
    >
      <div className='col-span-12 py-14 md:col-span-8 md:col-start-1 md:px-10 md:py-20'>
        <h2 className='text-center text-2xl md:text-4xl'>{title}</h2>
        <div className='mx-auto mt-10 flex w-11/12 flex-col items-center rounded shadow-xl md:container lg:mt-20'>
          <ul className='w-full'>
            {questions?.map((item: any, i: number) => (
              <li
                key={i}
                className='relative text-left drop-shadow-xl'
                onClick={() => handleItemClick(i)}
              >
                <div className='flex flex-row items-start'>
                  <div
                    className={`${
                      questions?.length - 1 === i ? 'pt-5' : 'py-5'
                    } w-full  text-[#061632]`}
                  >
                    <h3 className='rounded-t-xl border-2 px-5 py-5 pr-6 text-lg font-bold leading-6 shadow-xl md:pr-5'>
                      {item?.title}
                    </h3>
                    {show.index === i && show.open === true && (
                      <div
                        className={`${
                          questions?.length - 1 === i ? 'pb-5' : ''
                        } mt-5 block px-5 text-start text-xs md:text-lg`}
                        dangerouslySetInnerHTML={{
                          __html: item?.answer,
                        }}
                      ></div>
                    )}
                  </div>
                </div>
                {show.index === i && show.open === true ? (
                  <ChevronUp className='absolute right-2 top-10 h-5 w-5 text-gray-700 md:right-10 md:h-7 md:w-7' />
                ) : (
                  <ChevronDown className='absolute right-2 top-10 h-5 w-5 text-gray-700 md:right-10 md:h-7 md:w-7' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
