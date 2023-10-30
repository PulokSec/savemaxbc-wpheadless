import React from 'react';

type MyProps = {
  bottomSection: any;
};
export default function BottomFeature(props: MyProps) {
  const { bottomSection } = props;
  return (
    <section className="bg-20 mt-40 flex min-h-[30vh] flex-col items-center overflow-x-hidden bg-[url('https://savemaxbc.com/wp-content/uploads/2023/10/woman-showing-with-one-hand-mini-house-real-state-concept-ai-generative.jpg')] bg-cover bg-no-repeat md:min-h-screen md:justify-between">
      <div className='text-center'>
        <h2 className='my-20 text-center text-lg text-white md:text-5xl'>
          {bottomSection?.title}
        </h2>
        <p className='mt-0 px-3 pt-10 text-[10px] text-white md:mt-10 md:px-40 md:pt-20 md:text-xl'>
          {bottomSection?.description}
        </p>
      </div>
      <div className='mt-5 text-center md:mt-10'>
        <a
          href='#'
          className='text-uppercase z-10 mt-0 rounded-[8px] border border-solid bg-white px-2 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-950  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950 md:absolute md:mt-[-20px] md:px-3.5'
        >
          See More
        </a>
      </div>
    </section>
  );
}
