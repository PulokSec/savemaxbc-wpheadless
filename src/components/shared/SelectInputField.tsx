import React, { useState } from 'react';

type Props = {
  fields: any;
  stateFunction: any;
  value: any;
  defaultValue: any;
};

const SelectInputField = (props: Props) => {
  const { fields, stateFunction, value, defaultValue } = props;
  const [reset, setReset] = useState(true);
  const handleSelectField = (event: any, setFunction: (arg0: any) => void) => {
    setFunction(event.target.value);
  };
  return (
    <div>
      <select
        onChange={(e) => handleSelectField(e, stateFunction)}
        value={value}
        className='mt-1 h-10 w-full border border-black text-gray-900  placeholder:text-[15px] focus:border focus:border-sky-700 focus:outline-none'
      >
        <option
          className='rounded text-[14px] focus:border focus:border-[#061632] focus:outline-none'
          selected
          value=''
          disabled
          hidden
        >
          {defaultValue}
        </option>
        {fields?.map((a: any, idx: number) => {
          return (
            <option
              key={idx}
              value={a?.name}
              className='rounded text-[14px] text-black placeholder:text-[14px] focus:border focus:border-[#061632] focus:outline-none'
            >
              {a?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInputField;
