import { cn } from '@/utils/cn';
import { useMergedRef } from '@mantine/hooks';
import { HTMLMotionProps, motion } from 'framer-motion';
import { memo, Ref } from 'react';
import { useInView } from 'react-intersection-observer';

interface BlockProps extends HTMLMotionProps<'div'> {
  ref?: Ref<HTMLDivElement>;
  borderColor?: string;
  reveal?: boolean;
}

export const Block = ({ className, children, ref, borderColor, style, reveal = true, ...props }: BlockProps) => {
  const { ref: revealRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    skip: !reveal,
  });

  const mergedRef = useMergedRef(revealRef as React.Ref<HTMLDivElement>, ref ?? null);

  return (
    <motion.div
      initial={reveal ? { opacity: 0, y: 24 } : false}
      animate={!reveal || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
      ref={mergedRef}
      style={{ borderColor: borderColor ?? '#ffffff28', ...style }}
      className={cn('w-full rounded-[40px] border p-[50px] max-md:rounded-4xl max-md:p-5', className)}
    >
      {children}
    </motion.div>
  );
};

export default memo(Block);
