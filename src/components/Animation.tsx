export const SimpleTitleIn = {
  initial: { opacity: 0, x: 100 }, // Start off-screen to the left
  animate: {
    opacity: 1,
    x: 0, // Slide in to the final position
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.4 }, // Delay the animation
  },
};
export const SimpleAuthorIn = {
  initial: { opacity: 0, x: -100 }, // Start off-screen to the left
  animate: {
    opacity: 1,
    x: 0, // Slide in to the final position
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 }, // Delay the animation
  },
};
export const SimplePhotoIn = {
  initial: { opacity: 0, x: 100 }, // Start off-screen to the left
  animate: {
    opacity: 1,
    x: 0, // Slide in to the final position
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.6 }, // Delay the animation
  },
};
export const SimpleDetailUp = {
  initial: { opacity: 0, y: 100 }, // Start off-screen to the left
  animate: {
    opacity: 1,
    y: 0, // Slide in to the final position
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.7 }, // Delay the animation
  },
};
export const SimpleDetailDown = {
  initial: { opacity: 0, y: -100 }, // Start off-screen to the left
  animate: {
    opacity: 1,
    y: 0, // Slide in to the final position
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 }, // Delay the animation
  },
};
