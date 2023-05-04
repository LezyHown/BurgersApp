import React from "react";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../Redux/Cart/CartSlice";
import { FiTrash } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { CounterAnimations } from "../Tools/SpringAnimations";

export default function Product({ product }) {
  const { id, name, image, price, outPrice, amount } = product;
  const currency = process.env.REACT_APP_CURRENCY;
  const dispatch = useDispatch();

  return (
    <div className=" px-2 py-4 drop-shadow-md" initial={{ height: 0 }} animate={{ height: "auto" }}>
        <div className="flex justify-between w-full items-start">
          <img src={image} className="w-[125px] h-[120px] object-cover rounded-3xl filter drop-shadow-lg" />
          <button className="remove-cart-item" onClick={() => dispatch(removeProduct({ productId: id }))}>
            <FiTrash size={30} className="text-gray-800"/>
          </button>
        </div>

        <AnimatePresence>
          <div className="cart-items-price">
            <div className="in-price">
              <span className="text-[20px] capitalize">price</span>
              <span className="money-text">{currency + price}</span>
            </div>
            <div className="out-price">
              <span className="text-[20px] capitalize">total price</span>
              <motion.span
                className="money-text"
                {...CounterAnimations.blinkCounter(outPrice)}
              >
                {currency + outPrice}
              </motion.span>
            </div>
          </div>
        </AnimatePresence>
        <div className="title text-[18px] my-2 font-bold text-[#2b2b3a] filter drop-shadow-lg">{name}</div>
        
        <Counter count={amount} productId={id} />
      </div>
  );
}
