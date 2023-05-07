import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  }, [location]);

  return null;
}