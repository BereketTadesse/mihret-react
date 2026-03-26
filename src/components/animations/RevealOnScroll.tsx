import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.55,
  y = 30,
  scale,
  className,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, y, ...(scale !== undefined ? { scale } : {}) };

  const animate = prefersReduced
    ? { opacity: isInView ? 1 : 0 }
    : {
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : y,
        ...(scale !== undefined ? { scale: isInView ? 1 : scale } : {}),
      };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: prefersReduced ? 0.2 : duration,
        delay: prefersReduced ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
