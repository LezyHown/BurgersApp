import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { signOut } from "../../../Redux/User/userSlice";

export default function UserUI({ user }) {
  const dispatch = useDispatch();

  return (
    <motion.div
      class="flex flex-col items-center rounded-lg p-4 mt-2 size-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: user ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class="flex flex-col items-center">
        <img src={user.avatar} alt="avatar" class="rounded-full mb-4 cursor-pointer" />
        <div className="user-details">
          <h2 class="text-[22px] font-semibold text-gray-800">{user.name}</h2>
          <p class="text-[20px] text-gray-600">{user.email}</p>
        </div>
      </div>
      <button class="bg-red-600 hover:bg-red-500 text-white rounded-lg w-40 mt-4 text-[21px] ml-0"
        onClick={() => dispatch(signOut())}
      >
        Sign Out
      </button>
    </motion.div>
  );
}
