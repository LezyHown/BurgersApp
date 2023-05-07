import React from "react";
import IconsAPI from "../../content/icons/iconsAPI";
import { motion } from "framer-motion";
import "./loadingScreen.scss";
import { logoAnimations } from "../Tools/framerAnimations";

export default function LoadingScreen() {
  return (
    <div className="screen-loading-page">
      <div className="container">
        <IconsAPI
          category="HEADER"
          name="mainLogo"
          className="w-60 h-60 text-center"
          {...logoAnimations.blinking}
        />
        <motion.div className="title" {...logoAnimations.blinking}>
          Unleash the Finger Lickin' Goodness
        </motion.div>
      </div>
    </div>
  );
}
