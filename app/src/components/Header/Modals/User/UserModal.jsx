import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import GoogleSignIn from "./GoogleSignIn";

// ----------------
// Авторизация
// ----------------
import { signIn } from "../../../Redux/User/userSlice";
import UserUI from "./UserUI";
import CloseBtn from "../Tools/UIElements/CloseBtn";
import { ShowAnimations } from "../Tools/SpringAnimations";

/**
 * Модальное окно пользователя
 * @param {Boolean} show - показ окна (Boolean)
 * @param {Action} handle - функция переключения показа (Action)
 */
export default function UserModal({ show, close }) {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showAnimation = ShowAnimations.slideInFromTop(show);

  return (
    <motion.div className="modal-window burger-gradient" {...showAnimation}>
      <div className="modal-content">
        <CloseBtn onClose={close} />

        {!user ? (
          <GoogleSignIn onClick={() => dispatch(signIn())} {...showAnimation} />
        ) : (
          <UserUI user={user} />
        )}
      </div>
    </motion.div>
  );
}
