import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./cart.scss";

import AnimatedCartIcon from "./AnimatedCartIcon";
import { useSelector } from "react-redux";
import Product from "./Product";
import { CounterAnimations, showAnimations } from "../Tools/framerAnimations";
import CloseBtn from "../Tools/UIElements/CloseBtn";

/**
 * Модальное окно корзины
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function CartModal({ show, close }) {
  const cart = useSelector((state) => state.cart);
  const currency = process.env.REACT_APP_CURRENCY;
  const isProductsExist = cart.products?.length > 0;
  const showAnimation = showAnimations.slideInFromTop(show);
  const cartWaitPicture = process.env.REACT_APP_CART_WAIT_PICTURE;
  
  return (
    <motion.div className="modal-window burger-gradient px-4" {...showAnimation}>
      <div className="modal-content w-[550px]">
        <CloseBtn onClose={close}/>

        <div className="inline-flex text-[22px] items-center justify-center mb-2">
          <span className="text-[25px] text-gray-900 text-opacity-90 font-extrabold ml-3">Cart</span>
          <AnimatedCartIcon size={60} wind={false} className="relative -translate-y-1 h-8 w-8" />
        </div>

        {isProductsExist ? (
          <div className="cart-items rounded-2xl">
            {cart.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center text-xl mb-8">
            <img className="w-40 h-40 object-cover" src={cartWaitPicture}/>
            Waiting for your new purchase :)
          </div>
        )}

        <AnimatePresence>
          <div className="flex items-center justify-center gap-3">
            <div className="total-price font-semibold gap-2">
              <span className="text-[21px] capitalize opacity-90 text-gray-900">total price:</span>
              <motion.span className="money-text text-[23px]" {...CounterAnimations.blinkCounter(cart.totalCost)}>
                {currency + cart.totalCost}
              </motion.span>
            </div>
            {isProductsExist ? <button class="orange-button p-4 px-6">Order Now</button> : null}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}