import { useRef, type ReactNode, type ElementType } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface AnimatedHeadingProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Elegant clip-mask text reveal: text slides up from below an overflow-hidden
 * container, giving a premium "curtain lift" entrance effect used in
 * high-end film/studio websites.
 */
export default function AnimatedHeading({
  children,
  as: Tag = 'h2',
  className,
  delay = 0,
  duration = 0.7,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px -5% 0px' });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        animate={isInView ? { y: '0%', opacity: 1 } : { y: '105%', opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}
