import React from "react";
import IconsAPI from "../../content/icons/iconsAPI";
import {motion} from 'framer-motion';

export default function Contact() {
  return (
    <motion.main className="contact-page" 
      initial={{opacity: 0}} animate={{ opacity: 1}} transition={{duration: 0.4}}>
      <h1 className="text-center font-bold text-[48px] mt-6">
        <span className="text-upper-head">Contact information</span>
      </h1>

      <div className="contact-container">
        <div className="location">
          <h2 className="city-title text-[36px]">Vinnitsa</h2>
          <div className="street-title  text-[24px] text-opacity-60 font-[400]">52 Keleska St</div>
        </div>
        <div className="phone flex flex-row min-w-max">
          <IconsAPI category={"CONTACT"} name="phone" style={{ width: "53px", height: "53px" }} />
          <div className="font-medium text-[36px] pl-6">0 800 344 44 55</div>
        </div>
      </div>
      
      <h1 className="text-center font-bold text-[48px] my-8">
        <span className="text-upper-head">work schedule</span>
      </h1>
      <div className="work-time">
        <IconsAPI category={"CONTACT"} name="timer" className="mr-6 ml-6"/>
        <div className="opacity-60 text-[32px] font-[400] mr-8">from 10-00 to 22-00</div>
      </div>
      
      <IconsAPI category={"CONTACT"} name="mapContactLocation" className="w-full pt-[91px] mb-[23px]"/>
    </motion.main>
  );
}
