import { useCaseRoutes } from '@/hooks/useCaseRoutes';
import { useDevice } from '@/hooks/useDevice';
import { CaseHeader } from '@/modules/CaseHeader';
import Footer from '@/modules/Footer';
import OtherCases from '@/modules/OtherCases';
import { CaseOptions, useCasesStore } from '@/stores/cases';
import { CasesCategory } from '@/types/Cases';
import { RouteData } from '@/types/RouteData';
import { cn } from '@/utils/cn';
import { Outlet, useLocation } from '@tanstack/react-router';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const setCaseOptions = useCasesStore((state) => state.setCaseOptions);
  const setSelectedCategory = useCasesStore((state) => state.setSelectedCategory);
  const setIsTransitioning = useCasesStore((state) => state.setIsTransitioning);
  const { background, scheme, borderColor, gap } = useCasesStore((state) => state.caseOptions);
  const { isMobile } = useDevice();
  const { currentCase } = useCaseRoutes();
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const pendingConfigRef = useRef<CaseOptions | null>(null);
  const pendingLocalizationRef = useRef<RouteData['localization'] | null>(null);
  // displayLocalization заморожена во время перехода — меняется только в onExitComplete
  const [displayLocalization, setDisplayLocalization] = useState<RouteData['localization'] | undefined>(undefined);

  // Флаг первой загрузки: конфиг и локализация применяются сразу, без ожидания exit-анимации
  const initializedRef = useRef(false);
  // Флаг первого рендера: не стартуем transition при маунте
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (!currentCase) return;
    const config: CaseOptions = {
      background: currentCase.config.background ?? 'black',
      scheme: currentCase.config.scheme ?? 'dark',
      borderColor: currentCase.config.borderColor,
      logo: currentCase.config.logo ?? '/cases/exampleLogo.png',
      gap: currentCase.config.gap ?? 64,
    };

    if (!initializedRef.current) {
      // Первая загрузка — применяем немедленно, transition нет
      initializedRef.current = true;
      setCaseOptions(config);
      setDisplayLocalization(currentCase.localization);
    } else {
      // Навигация — ждём завершения exit-анимации
      pendingConfigRef.current = config;
      pendingLocalizationRef.current = currentCase.localization;
    }
  }, [currentCase]);

  useLayoutEffect(() => {
    if (pathname === '/') return;
    if (isFirstRenderRef.current) {
      // Первый рендер: только обновляем категорию, transition не стартуем
      isFirstRenderRef.current = false;
      setSelectedCategory(pathname.split('/')[2] as CasesCategory);
      return;
    }
    setIsTransitioning(true);
    setSelectedCategory(pathname.split('/')[2] as CasesCategory);
  }, [pathname]);

  const contentGap = isMobile ? 40 : gap;

  return (
    <div
      ref={containerRef}
      style={{
        background,
        color: scheme === 'dark' ? 'white' : 'black',
        viewTransitionName: 'case-panel',
      }}
      className={cn('fixed top-0 left-0 z-20 h-full w-full overflow-auto px-[150px] pb-10 max-md:px-4', {
        'overflow-hidden max-md:!pr-6': pathname === '/',
      })}
      data-lenis-prevent
    >
      <CaseHeader containerRef={containerRef} localization={displayLocalization} />
      <div className='flex flex-col' style={{ gap: contentGap }}>
        <AnimatePresence
          mode='wait'
          onExitComplete={() => {
            // Сброс скролла + применение нового конфига и локализации в "мёртвой зоне" между exit и enter
            if (containerRef.current) containerRef.current.scrollTop = 0;
            if (pendingConfigRef.current) {
              setCaseOptions(pendingConfigRef.current);
              pendingConfigRef.current = null;
            }
            if (pendingLocalizationRef.current) {
              setDisplayLocalization(pendingLocalizationRef.current);
              pendingLocalizationRef.current = null;
            }
            setIsTransitioning(false);
          }}
        >
          {/* flex flex-col + gap дублируется чтобы дочерние секции кейса (fragment из Outlet) получили gap */}
          <motion.div
            key={pathname}
            className='flex flex-col'
            style={{ gap: contentGap }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: easeInOut }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        <OtherCases />
        <Footer borderColor={borderColor} mode={scheme} inCase />
      </div>
    </div>
  );
}
