export const mobile_variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 0.05 }, // Specify duration for opacity transition

      type: "spring",
      stiffness: 500,
      damping: 50,
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "100%",
    opacity: 0, // Add opacity transition here
    transition: {
      opacity: { duration: 0.05 }, // Specify duration for opacity transition
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};
