export const showAnimations = {
  get smoothOpacity() {
    return {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1, 
        transition: { duration: 0.4 }
      },
    };
  }
};

export const logoAnimations = {
  get blinking(){
    return {
      initial: { filter: "brightness(0.5)" },
      animate: {
        filter: "brightness(1)",
        transition: {
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    }
  }
};