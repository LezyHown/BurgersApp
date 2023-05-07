import React from "react";

export default function SocialLink({ to, children }) {
  return (
    <button onClick={() => window.open(to)} className="social">
      {children}
    </button>
  );
}
