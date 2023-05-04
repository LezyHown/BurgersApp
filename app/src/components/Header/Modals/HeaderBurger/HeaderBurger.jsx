import React from "react";
import { motion } from "framer-motion";
import './navmenu.scss';
import { ShowAnimations } from "../Tools/SpringAnimations";

/**
 * Модальное окно бургера для хедера
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function BurgerModal({ navigationMenu, show }) {
  const showAnimation = ShowAnimations.slideInFromTop(show);

  return (
    <motion.div className="header-burger-modal" {...showAnimation}>
      <div className="modal-content h-[400px] overflow-y-scroll">
        {navigationMenu}
      </div>
    </motion.div>
  );
}