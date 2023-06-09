export const showAnimations = {
  slideInFromTop(show) {
    return {
      initial: { height: "0", visibility: "hidden" },
      animate: {
        height: show ? "100%" : "0",
        visibility: show ? "visible" : "hidden",
        transition: { duration: 0.7, type: "spring", damping: 19, stiffness: 170 },
      },
    };
  },
  productScrollSlide() {
    return {
      initial: {
        opacity: 0.9,
        scale: 0.9,
        rotateX: 5,
      },
      whileInView: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 0.35,
        },
      },
    };
  },
};

export const CounterAnimations = {
  blinkCounter(value) {
    return {
      key: value,
      initial: { opacity: 0.5 },
      animate: { opacity: 1 },
      end: { opacity: 0.5 },
      translate: { duration: 0.5 },
    };
  },
};
