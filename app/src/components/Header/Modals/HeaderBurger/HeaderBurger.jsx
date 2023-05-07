import React from "react";
import { motion } from "framer-motion";
import { showAnimations } from "../Tools/framerAnimations";
import './navmenu.scss';

/**
 * Модальное окно бургера для хедера
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function BurgerModal({ navigationMenu, show }) {
  const showAnimation = showAnimations.slideInFromTop(show);

  return (
    <motion.div className="header-burger-modal" {...showAnimation}>
      <div className="modal-content h-[400px] overflow-y-scroll">
        {navigationMenu}
      </div>
    </motion.div>
  );
}