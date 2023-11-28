import React from 'react';

type MyProps = {
  map: any;
};

export default function ListingMap(props: MyProps) {
  const { map } = props;
  // console.log('map', map);
  const address = `<p style="text-align: left;"><iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.9613662040133!2d-123.13121422303949!3d49.27712927139206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d388abc5b5%3A0x6a90c18b450c1a65!2s1283%20Howe%20St%2C%20Vancouver%2C%20BC%20V6Z%200E3%2C%20Canada!5e0!3m2!1sen!2sbd!4v1685880319783!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="allowfullscreen"></iframe></p>`;
  return (
    <div className='mx-auto mb-5 max-w-[1400px] p-2 md:p-5 xl:py-10'>
      <h3 className='mb-2 text-gray-800'>Property Location</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: address,
        }}
      ></div>
    </div>
  );
}
