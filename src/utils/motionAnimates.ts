export const motionAnimates = {
  FadeUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  FadeDown: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  FadeRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  FadeLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  FlipLeft: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    exit: { opacity: 0, rotateY: -90 },
  },
  FlipDown: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
    exit: { opacity: 0, rotateX: -90 },
  },
  ZoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: { opacity: 0 },
  },
  Opacity: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
    exit: { opacity: 0 },
  },
};
