export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 1,
    y: 100,
  },
};

export const menuAnim = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delay: 1,
    },
  },
  exit: {
    opacity: 1,
    y: 100,
  },
};

export const onTheGoAnim = {
  hidden: { opacity: 0, x: -500 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export const restListAnim = {
  hidden: { x: -2000 },
  show: {
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export const checkOutAnim = {
  hidden: { opacity: 0, x: 1000 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: 1000,
  },
};

export const orderAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
