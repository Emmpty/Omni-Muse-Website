import type { HTMLMotionProps } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { motionAnimates } from '@/utils/motionAnimates';

interface IProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  // 使用 HTMLMotionProps 类型
  animate?: keyof typeof motionAnimates;
  duration?: number;
}

const MotionDiv = ({
  animate = 'FadeUp',
  children,
  duration = 0.5,
  ...motionProps
}: IProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      exit="exit"
      animate={controls}
      variants={(animate && motionAnimates[animate]) || ''}
      transition={{ duration }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { MotionDiv };
