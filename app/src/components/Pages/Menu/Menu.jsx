import React from "react";
import {motion} from 'framer-motion';

export default function Menu() {
  return (
    <motion.main className="menu-page mb-80" 
      initial={{opacity: 0}} animate={{ opacity: 1}} transition={{duration: 0.4}}>
      <h1 className="text-center font-bold text-[48px] mt-6">
        <span className="text-upper-head">Menu</span>
      </h1>
    </motion.main>
  );
}