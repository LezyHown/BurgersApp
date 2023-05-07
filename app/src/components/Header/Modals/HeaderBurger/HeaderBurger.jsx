import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { showAnimations } from "../Tools/framerAnimations";
import { PAGES } from "../../Navigation/navigationAPI";
import { hideAllModals } from "../../../Redux/Modals/modalsSlice";
import NavMenu from "../../Navigation/NavMenu";
import './navmenu.scss';

/**
 * Модальное окно бургера для хедера
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function BurgerModal({ show }) {
  const dispatch = useDispatch();
  const showAnimation = showAnimations.slideInFromTop(show);

  return (
    <motion.div className="header-burger-modal" {...showAnimation}>
      <div className="modal-content h-[400px] overflow-y-scroll">
        <NavMenu pages={PAGES} onClick={() => dispatch(hideAllModals())} />
      </div>
    </motion.div>
  );
}