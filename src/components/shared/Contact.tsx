import React from 'react'

type Props = {
  data: any
}

const Contact = (props: Props) => {
  const {data} = props;
  return (
    <div className='mx-auto max-w-[1400px] px-5 py-20 text-center '>
      <h2 className='mb-5'>{data?.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: data?.description,
        }}
      ></p>
    </div>
  );
}

export default Contact