import React from "react";
import {motion} from "framer-motion";
import { showAnimations } from "./framerAnimations";

export default function GoogleMap({ locationLink, isDarkMode = true }) {
  const darkMode = isDarkMode ? "grayscale-[20%] invert-[100%] contrast-[85%]" : null;

  return (
    <motion.iframe
      src={locationLink}
      className={`h-[450px] w-full pt-[91px] mb-[23px] border-none ${darkMode}`}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      {...showAnimations.smoothOpacity}
    />
  );
}
