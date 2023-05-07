import React from "react";
import Icon from "../../content/icons/iconsAPI";
import {motion} from 'framer-motion';
import { showAnimations } from "../Tools/framerAnimations";
import GoogleMap from "../Tools/GoogleMap";

export default function Contact() {
  const iconCategory = "CONTACT";

  return (
    <motion.main className="contact-page" 
      {...showAnimations.smoothOpacity}>
      <h1 className="text-center font-bold text-[48px] mt-6">
        <span className="text-upper-head">Contact information</span>
      </h1>

      <div className="contact-container">
        <div className="location">
          <h2 className="city-title text-[36px]">Vinnitsa</h2>
          <div className="street-title  text-[24px] text-opacity-60 font-[400]">17E, 600th anniversary street,<br/> Vinnytsia region, 21000</div>
        </div>
        <div className="phone flex flex-row gap-6 relative max-sm:-translate-x-12">
          <Icon category={iconCategory} name="phone" style={{ minWidth: "53px", minHeight: "53px" }} />
          <div className="font-medium text-[36px] min-w-full">0 800 344 44 55</div>
        </div>
      </div>
      
      <h1 className="text-center font-bold text-[48px] my-8">
        <span className="text-upper-head">work schedule</span>
      </h1>
      <div className="work-time">
        <Icon category={iconCategory} name="timer" className="mr-6 ml-6"/>
        <div className="opacity-60 text-[32px] font-[400] mr-8">from 10-00 to 22-00</div>
      </div>

      <GoogleMap locationLink={process.env.REACT_APP_CONTACT_LOCATION}/>
    </motion.main>
  );
}
