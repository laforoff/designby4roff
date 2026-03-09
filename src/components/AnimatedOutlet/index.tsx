import { Outlet } from '@tanstack/react-router';
import { easeInOut, motion, useIsPresent, type MotionProps } from 'framer-motion';
import { forwardRef, useRef } from 'react';

type AnimatedOutletProps = Omit<MotionProps, 'children'>;

const TRANSITION = { bounce: 0, duration: 0.7, ease: easeInOut } as const;

const AnimatedOutlet = forwardRef<HTMLDivElement, AnimatedOutletProps>((props, ref) => {
  const isPresent = useIsPresent();

  // Замораживаем JSX пока элемент присутствует
  // Когда isPresent станет false — показываем последний живой снапшот
  const frozenContent = useRef(<Outlet />);
  if (isPresent) {
    frozenContent.current = <Outlet />;
  }

  return (
    <motion.div
      ref={ref}
      className='fixed inset-0 h-screen w-full overflow-auto'
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '100%' }} // ← ЭТО было главной проблемой
      transition={TRANSITION}
      style={{
        pointerEvents: isPresent ? 'auto' : 'none',
        ...props.style,
      }}
      {...props}
    >
      {frozenContent.current}
    </motion.div>
  );
});

AnimatedOutlet.displayName = 'AnimatedOutlet';
export default AnimatedOutlet;
