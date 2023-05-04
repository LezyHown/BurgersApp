import React from "react";
import { FcGoogle } from 'react-icons/fc';

export default function GoogleSignIn({ ...rest }) {
  return (
    <button className="google-signin" {...rest}>
      <FcGoogle size={45} className="mr-4 ml-2 antialiased" />
      <div className="title text-[20px] opacity-[85%]">
        Sign-in by Google
      </div>
    </button>
  );
}
