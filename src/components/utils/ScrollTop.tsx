import { ChevronsUp } from 'lucide-react';
import React from 'react'
import ScrollToTop from 'react-scroll-up'
export default function ScrollTop() {
  return (
    <div className='relative z-[300]'>
      <ScrollToTop showUnder={760} style={{
      position: 'fixed',
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s'
    }} easing='easeInCirc' duration={1000}>
      <div className=" rounded-full border-[#dbc071] border-2 bg-[#061632]">
      <ChevronsUp className=' text-[#dbc071] w-[40px] h-[40px] animate-bounce'/>
      </div>
      </ScrollToTop>
    </div>
  )
}
