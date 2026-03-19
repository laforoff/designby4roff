import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { useDevice } from '@/hooks/useDevice';
import { useLocalization } from '@/hooks/useLocalization';
import { CaseOptions, useCasesStore } from '@/stores/cases';
import { CaseData } from '@/types/Cases';
import { Localization } from '@/types/Localization';
import { cn } from '@/utils/cn';
import { useNavigate } from '@tanstack/react-router';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import DateRange from '../DateRange';
import Image from '../Image';

type CaseCardProps = HTMLMotionProps<'div'> &
  CaseData & {
    localization: Localization;
    scheme?: CaseOptions['scheme'];
    link: string;
    inCase?: boolean;
  };

export default function CaseCard({
  image,
  startDate,
  endDate,
  className,
  borderColor,
  localization,
  background,
  scheme,
  link,
  logo,
  gap,
  inCase = false,
  ...props
}: CaseCardProps) {
  const { L } = useLocalization(localization);
  const [isHovered, setIsHovered] = useState(false);
  const { isDesktop, isMobile, isTablet } = useDevice();
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);
  const navigate = useNavigate();

  const cardTextVariants: Variants = {
    default: {
      y: 100,
      opacity: 0,
    },
    hovered: {
      y: 0,
      opacity: 1,
    },
  };

  const setIsTransitioning = useCasesStore((state) => state.setIsTransitioning);

  const onOpenCase = async () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  console.log(isDesktop, isTablet, isMobile);

  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden rounded-[40px] border border-white/15 max-md:flex-col max-md:rounded-4xl',
        className,
        {
          'border-black/15': scheme === 'light' && inCase,
        },
      )}
      onClick={() => navigate({ to: link, from: '/', viewTransition: true })}
      onMouseDown={(e) => {
        e.preventDefault();
        if (e.button !== 1) return;
        window.open(link, '_blank');
      }}
    >
      <motion.div
        className='h-full w-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ bounce: 0 }}
        cursor-content={GL.open}
        onClick={onOpenCase}
        {...props}
      >
        <Image
          className='w-full object-cover'
          parentClassName='bg-black'
          animate={{
            scale: isHovered && isDesktop ? 1.1 : 1,
            filter: isHovered && isDesktop ? 'blur(10px)' : 'blur(0px)',
            opacity: isHovered && isDesktop ? 0.5 : 1,
          }}
          src={`/cases/${image}`}
          maxWidth='100%'
          minHeight={isDesktop ? '37vh' : ''}
        />
        <motion.div
          initial={false}
          className={cn(
            `bottom-0 flex w-full flex-col gap-7 p-[50px] max-md:gap-4 max-md:bg-[#141414] max-md:p-8 md:pointer-events-none
            md:absolute`,
            {
              'max-md:bg-white': scheme === 'light' && inCase,
            },
          )}
          variants={cardTextVariants}
          animate={isDesktop ? (isHovered ? 'hovered' : 'default') : 'hovered'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='flex flex-col max-md:gap-2.5'>
            <h1
              className={cn('text-[40px] font-bold text-white max-md:text-2xl', {
                'max-md:text-black': scheme === 'light' && inCase,
              })}
            >
              {L.caseTitle as string}
            </h1>
            <DateRange
              startDate={startDate}
              endDate={endDate}
              className={cn({ 'max-md:text-black/65': scheme === 'light' && inCase })}
            />
          </div>
          <p
            className={cn('text-xl text-white/65 max-md:text-base', {
              'max-md:text-black/65': scheme === 'light' && inCase,
            })}
          >
            {L.caseShortDescription as string}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
