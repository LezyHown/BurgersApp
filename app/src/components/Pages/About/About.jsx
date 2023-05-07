import React from "react";
import {motion} from 'framer-motion';
import { showAnimations } from "../Tools/framerAnimations";

export default function About() {
  return (
    <motion.main className="about-page mb-80" {...showAnimations.smoothOpacity}>
      <h1 className="text-center font-bold text-[48px] mt-6">
        <span className="text-upper-head">about</span>
      </h1>
    </motion.main>
  );
}