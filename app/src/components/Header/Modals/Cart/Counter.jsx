import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setAmount } from "../../../Redux/Cart/CartSlice";
import { motion } from "framer-motion";

export default function Counter({ count, productId, ...rest }) {
  const dispatch = useDispatch();
  const handleIncrement = () =>
    dispatch(
      setAmount({
        productId,
        count: Math.min(count + 1, 99),
      })
    );
  const handleDecrement = () =>
    dispatch(
      setAmount({
        productId,
        count: Math.max(count - 1, 1),
      })
    );

  return (
    <div className="flex items-center justify-center gap-4 w-full" {...rest}>
      <button className="counter-button" onClick={handleDecrement}>
        <AiOutlineMinus size={22} />
      </button>
      <input
        value={count}
        min={1}
        max={99}
        className="appearance-none text-center bg-gray-200 py-2 px-5 text-gray-700 leading-tight outline-none text-[20px] border border-gray-300 border-b-2 w-full rounded-md"
        onChange={(e) => {
          if (Number(e.target.value) >= 1 && Number(e.target.value) <= 99)
            dispatch(setAmount({ productId, count: Number(e.target.value) }));
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleDecrement();
          }
        }}
      />
      <button className="counter-button" onClick={handleIncrement}>
        <AiOutlinePlus size={22} />
      </button>
    </div>
  );
}
