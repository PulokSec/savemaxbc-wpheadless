import React from 'react';

type ScrollProps = {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
};

const Scroll = ({ style = {}, children, className = '' }: ScrollProps) => {
  return (
    <div style={style} className={`${className} relative w-full`}>
      {children}
    </div>
  );
};

export default Scroll;
