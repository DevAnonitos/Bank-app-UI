import React from 'react';
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <>
      <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img 
            src={bill} 
            alt="billing" 
            className='w-[100%] h-[100%] relative z-[5]'
          />
          <div 
            className='absolute z-[3] -left-1/2 
            top-0 w-[50%] h-[50%] rounded-full white__gradient' 
          />
          <div 
            className='absolute z-[0] -left-1/2 
            bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'  
          />
        </div>  

        <div className={layout.sectionInfo}>

        </div>   
      </section>
    </>
  )
}

export default Billing