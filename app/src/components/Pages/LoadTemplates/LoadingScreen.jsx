import React from "react";
import IconsAPI from "../../content/icons/iconsAPI";
import {motion} from 'framer-motion';
import "./loadingScreen.scss";

export default function LoadingScreen() {
  const logoVariants = {
    initial: { filter: "brightness(0.5)", width: "220px", height: "220px" },
    animate: {
      filter: "brightness(1)",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="screen-loading-page">
      <div className="container">
        <IconsAPI
          category={"HOME"}
          name="mainLogo"
          initial={logoVariants.initial}
          animate={logoVariants.animate}
          alt={""}
        />
        <motion.div
          className="title"
          initial={{ filter: "grayscale(100%)" }}
          animate={{ filter: "grayscale(0%)" }}
          transition={logoVariants.animate.transition}
        >
          Unleash the Finger Lickin' Goodness
        </motion.div>
      </div>
    </div>
  );
}
