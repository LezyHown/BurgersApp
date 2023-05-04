import React from "react";
import { motion } from "framer-motion";
import { ShowAnimations } from "../Tools/SpringAnimations";
import { useDispatch } from "react-redux";
import { showModal } from "../../../Redux/Modals/modalsSlice";

/**
 * Уведомление о добавлении товара
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function CartNotifyModal({ show, close }) {
  const showAnimation = ShowAnimations.slideInFromTop(show);
  const dispatch = useDispatch();

  return (
    <motion.div className="modal-window burger-gradient" {...showAnimation}>
      <div className="modal-content">
        <h1 className="text-[20px] text-gray-800">Product success added to cart!</h1>
        <div className="flex w-full justify-between items-center mt-10 px-8 flex-wrap gap-3 max-sm:justify-center">
          <button className="orange-button g-gradient-to-br from-orange-300 to-red-500 p-4" onClick={close}>
            Сontinue shopping
          </button>
          <button className="orange-button p-4 px-8" onClick={() => { 
            close();
            dispatch(showModal("cart"));
          }}>
            Go to cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
