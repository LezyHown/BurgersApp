import React from "react";
import {motion} from 'framer-motion';
import { showAnimations } from "../Tools/framerAnimations";

export default function Reservation() {
  return (
    <motion.main className="reservation-page mb-80" {...showAnimations.smoothOpacity}>
      <h1 className="text-center font-bold text-[48px] mt-6">
        <span className="text-upper-head">reservation</span>
      </h1>
    </motion.main>
  );
}